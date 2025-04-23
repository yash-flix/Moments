import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User as FirebaseUser } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { app, db } from "../firebase"; // Import app and db
import { toast } from "@/hooks/use-toast";

// Define User interface including name and location as optional fields for component compatibility
interface User {
  uid: string;
  email: string | null;
  name?: string; // Optional field
  phone?: string; // Keeping phone as optional for now, though not saved to DB on signup
  location?: string; // Optional field
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean; // Add loading state for auth changes
  login: (email: string, password: string) => Promise<void>;
  // Signup parameters still include name/phone/location in the function signature
  // but the implementation only saves email to the database as per user's description
  signup: (email: string, password: string, name?: string, phone?: string, location?: string) => Promise<void>;
  logout: () => Promise<void>;
  // updateUserProfile can still accept partial User, but will only save/update fields present in DB (email)
  updateUserProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const auth = getAuth(app);

  // Listen for Firebase Auth state changes and fetch data from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => { // Make the callback async
      console.log("Auth state changed:", firebaseUser); // Log auth state changes
      if (firebaseUser) {
        // User is signed in - fetch additional data from Firestore
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
             const firestoreData = userDocSnap.data();
             const appUser: User = {
                uid: firebaseUser.uid,
                email: firestoreData.email || firebaseUser.email,
                name: firestoreData.name, // Include name from Firestore if exists
                phone: firestoreData.phone, // Include phone from Firestore if exists
                location: firestoreData.location, // Include location from Firestore if exists
             };
             console.log("User data from Firestore:", firestoreData); // Log fetched data
             setUser(appUser);
        } else {
            // If user document doesn't exist, create a basic user object with just UID and email.
             const appUser: User = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
             };
             setUser(appUser);
             console.warn("User document not found in Firestore for UID:", firebaseUser.uid);
        }
        setIsAuthenticated(true);
        console.log("isAuthenticated:", true); // Log isAuthenticated state

      } else {
        // User is signed out
        console.log("User is signed out"); // Log signed out state
        setUser(null);
        setIsAuthenticated(false);
        console.log("isAuthenticated:", false); // Log isAuthenticated state
      }
      setIsLoading(false); // Set loading to false after checking auth state
      console.log("isLoading:", false); // Log isLoading state
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [auth, db]); // Add db as a dependency

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The onAuthStateChanged listener will update the user state and fetch Firestore data
      toast({
        title: "Login Successful!",
        description: "Welcome back to Moments.",
      });
    } catch (error: any) {
      setIsLoading(false);
      let message = "An error occurred during login.";
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'No user found with this email address.';
          break;
        case 'auth/wrong-password':
          message = 'Incorrect password.';
          break;
         case 'auth/invalid-credential':
          message = 'Invalid email or password.';
          break;
        case 'auth/invalid-email':
           message = 'Invalid email format.';
           break;
        default:
          message = error.message || "An unexpected error occurred during login.";
      }
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: message,
      });
      throw error; // Re-throw to allow components to catch and handle
    }
  };

  // Signup only saves email to Firestore as per database structure
  const signup = async (email: string, password: string, name?: string, phone?: string, location?: string) => {
     setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Save only email to Firestore as per database structure
      await setDoc(doc(db, "users", firebaseUser.uid), {
         email: email,
         // Name, phone, location are not saved here based on user's database description
      });

      // The onAuthStateChanged listener will now fetch this saved data (which only contains email)
      toast({
        title: "Account created successfully!",
        description: "You can now log in with your new account.",
      });
    } catch (error: any) {
      setIsLoading(false);
      let message = "An error occurred during signup.";
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = 'The email address is already in use by another account.';
          break;
        case 'auth/weak-password':
          message = 'Password should be at least 6 characters.';
          break;
         case 'auth/invalid-email':
           message = 'Invalid email format.';
           break;
        default:
          message = error.message || "An unexpected error occurred during signup.";
      }
      toast({
        variant: "destructive",
        title: "Signup Error",
        description: message,
      });
       throw error; // Re-throw to allow components to catch and handle
    }
  };

  const logout = async () => {
     setIsLoading(true);
    try {
      await signOut(auth);
      // The onAuthStateChanged listener will update the user state to null
       toast({
        title: "Logged out successfully",
        description: "See you soon!",
      });
    } catch (error: any) {
       setIsLoading(false);
       toast({
        variant: "destructive",
        title: "Logout Error",
        description: error.message || "An error occurred during logout.",
      });
       throw error; // Re-throw to allow components to catch and handle
    }
  };

  // UpdateUserProfile implementation - only saves/updates email in DB
   const updateUserProfile = async (data: Partial<User>) => {
       if (!user) {
           console.error("Cannot update profile: User is not logged in.");
           toast({
               variant: "destructive",
               title: "Update Failed",
               description: "You must be logged in to update your profile.",
           });
           return;
       }
       setIsLoading(true);
       try {
           const userDocRef = doc(db, "users", user.uid);
           // Only include email in data to save to DB
           const dataToSave: Partial<User> = { };
           if (data.email !== undefined) {
             dataToSave.email = data.email;
           }

           if (Object.keys(dataToSave).length > 0) {
                await setDoc(userDocRef, dataToSave, { merge: true }); // Use merge: true
           }

           // Fetch the updated user data to ensure context is in sync
           const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const firestoreData = userDocSnap.data();
                 const appUser: User = {
                   uid: user.uid,
                   email: firestoreData.email || user.email,
                    name: firestoreData.name, // Include name from Firestore if exists
                    phone: firestoreData.phone, // Include phone from Firestore if exists
                    location: firestoreData.location, // Include location from Firestore if exists
                };
                setUser(appUser);
            }

           toast({
               title: "Profile Updated",
               description: "Your profile has been updated.",
           });
       } catch (error: any) {
           console.error("Error updating profile:", error);
            toast({
                variant: "destructive",
                title: "Update Failed",
                description: error.message || "An error occurred while updating your profile.",
            });
            throw error; // Re-throw to allow components to catch and handle
       } finally {
            setIsLoading(false);
       }
   };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        signup,
        logout,
        updateUserProfile,
      }}
    >
       {/* Optionally render a loading spinner while auth state is being determined */}
       {/* {isLoading ? <div>Loading...</div> : children} */}
       {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
