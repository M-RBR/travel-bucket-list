import { Link } from "react-router";
import AuthLogin from "../components/AuthLogin";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Link to="/" className="block mb-8 text-center"></Link>
            <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <AuthLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
