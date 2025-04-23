import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // Import app as a named import
import { useAuth } from "@/context/AuthContext"; // Import useAuth hook

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { isAuthenticated, isLoading: authLoading } = useAuth(); // Get auth state and loading from context

  console.log("Login Page - isAuthenticated:", isAuthenticated, "authLoading:", authLoading); // Log auth state in Login page

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      toast({
        title: "Login Successful!",
        description: "Welcome back to Moments.",
      });
      // Redirection is handled by PublicRoute now, but keep this for successful manual login
      navigate('/dashboard');

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
           message = 'Invalid email address.';
           break;
        default:
          message = error.message || "An unexpected error occurred during login.";
      }
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: message,
      });

    } finally {
      setIsLoading(false);
    }
  };

  // If already authenticated, PublicRoute should redirect. This component shouldn't be fully rendered.
  // However, if we are here, let's render the form.

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-alex text-primary">Login</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isLoading || authLoading} // Disable if either local or auth context is loading
              >
                {isLoading || authLoading ? "Loading..." : "Login"}
              </Button>
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
