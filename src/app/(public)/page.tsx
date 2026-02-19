export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-card">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Login to AMH Demand
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Please enter your credentials to access the portal.
        </p>
        {/* Login form would go here */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
          />
          <button className="w-full bg-sky-800 text-white py-2 rounded-lg font-semibold hover:bg-sky-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
