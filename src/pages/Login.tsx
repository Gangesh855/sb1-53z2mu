import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <form className="bg-white p-6 rounded-md shadow">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register here</Link>
      </p>
    </div>
  )
}

export default Login