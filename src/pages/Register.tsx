import React from 'react'
import { Link } from 'react-router-dom'

const Register: React.FC = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
      <form className="bg-white p-6 rounded-md shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Register
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
      </p>
    </div>
  )
}

export default Register