import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router";

export default function AuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      const returnTo = localStorage.getItem("returnTo");
      if (returnTo) {
        localStorage.removeItem("returnTo");
        navigate(returnTo);
      } else {
        navigate("/explore");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(getFriendlyErrorMessage(err.code));
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // Helper function to convert Firebase error codes to user-friendly messages
  const getFriendlyErrorMessage = (code: string) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-disabled":
        return "This account has been disabled";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      default:
        return "Login failed. Please try again.";
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Log In</h2>
      {error && (
        <div className="mb-4 p-2 bg-red-500 text-white rounded-md">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-white mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white disabled:opacity-50"
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
      <p className="mt-4 text-gray-300 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-400 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
