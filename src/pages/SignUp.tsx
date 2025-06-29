import AuthSignUp from "../components/AuthSignUp";
import { Link } from "react-router";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Link to="/" className="block mb-8 text-center"></Link>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <AuthSignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
