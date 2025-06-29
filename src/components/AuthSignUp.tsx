import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebaseConfig";
import { Link, useNavigate } from "react-router";
import { getFriendlyAuthError } from "../utils/authErrors";

export default function AuthSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Sign-up successful! Redirecting...");

      setTimeout(() => {
        const returnTo = localStorage.getItem("returnTo");
        if (returnTo) {
          localStorage.removeItem("returnTo");
          navigate(returnTo);
        } else {
          navigate("/explore");
        }
      }, 2000);
    } catch (err) {
      if (err instanceof FirebaseError) {
        setError(getFriendlyAuthError(err.code));
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Sign Up
      </h2>

      {error && (
        <div className="mb-4 p-2 bg-red-500 text-white rounded-md">{error}</div>
      )}
      {success && (
        <div className="mb-4 p-2 bg-green-500 text-white rounded-md">
          {success}
        </div>
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
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="mt-4 text-gray-300 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
