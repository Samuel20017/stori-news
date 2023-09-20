import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
        <h1 className="text-3xl font-semibold mb-4">
          Subscribe to Our Newsletter
        </h1>
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
              className="w-full px-3 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
