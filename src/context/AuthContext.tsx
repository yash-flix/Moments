
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone: string, location: string) => Promise<void>;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for saved user on component mount
    const savedUser = localStorage.getItem("moments_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulating API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // In a real app, validate against a backend
        if (email === "test@example.com" && password === "password") {
          const userData: User = {
            id: "user123",
            name: "Test User",
            email,
            phone: "+91 9876543210",
            location: "Delhi"
          };
          setUser(userData);
          setIsAuthenticated(true);
          localStorage.setItem("moments_user", JSON.stringify(userData));
          resolve();
        } else {
          // Check for other users stored during signup
          const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
          const matchedUser = registeredUsers.find(
            (u: any) => u.email === email && u.password === password
          );
          
          if (matchedUser) {
            const { password, ...userData } = matchedUser; // Remove password from user data
            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem("moments_user", JSON.stringify(userData));
            resolve();
          } else {
            reject(new Error("Invalid credentials"));
          }
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string, phone: string, location: string) => {
    // Simulating API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        try {
          // Check if email already exists
          const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
          if (registeredUsers.some((u: any) => u.email === email)) {
            reject(new Error("Email already registered"));
            return;
          }
          
          // Create new user
          const userData = {
            id: `user${Date.now()}`,
            name,
            email,
            phone,
            location,
            password, // In a real app, NEVER store passwords in localStorage
          };
          
          // Save to "registered users"
          registeredUsers.push(userData);
          localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
          
          // Set current user (without password)
          const { password: _, ...userWithoutPassword } = userData;
          setUser(userWithoutPassword);
          setIsAuthenticated(true);
          localStorage.setItem("moments_user", JSON.stringify(userWithoutPassword));
          
          resolve();
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("moments_user");
  };

  const updateUserProfile = async (data: Partial<User>) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (user) {
          const updatedUser = { ...user, ...data };
          setUser(updatedUser);
          localStorage.setItem("moments_user", JSON.stringify(updatedUser));
          
          // Also update in registered users
          const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
          const updatedUsers = registeredUsers.map((u: any) => 
            u.id === user.id ? { ...u, ...data } : u
          );
          localStorage.setItem("registered_users", JSON.stringify(updatedUsers));
        }
        resolve();
      }, 500);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUserProfile,
      }}
    >
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
