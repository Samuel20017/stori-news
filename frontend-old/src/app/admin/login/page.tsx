"use client";
import { useLoginForm } from "./formController";

export default function Login() {
  const { formik } = useLoginForm();
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md items-center">
        <h3 className="text-3xl font-semibold mb-4 text-gray-950 justify-center">
          Login
        </h3>
        <p className="text-gray-700 mb-6">
          Stay up to date with the latest news and updates.
        </p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="email"
              id="email"
              placeholder=""
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="password"
              id="password"
              placeholder=""
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
