import React from 'react'
import { Search, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

const featuredJobs = [
  { id: 1, title: 'Senior React Developer', company: 'TechCorp', location: 'San Francisco, CA' },
  { id: 2, title: 'UX Designer', company: 'DesignHub', location: 'New York, NY' },
  { id: 3, title: 'Data Scientist', company: 'DataMinds', location: 'Boston, MA' },
]

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Find Your Dream Job</h1>
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex">
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Search size={24} />
          </button>
        </div>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Technology', 'Healthcare', 'Education', 'Finance', 'Marketing', 'Engineering', 'Sales', 'Customer Service'].map((category) => (
            <div key={category} className="bg-white p-4 rounded-md shadow hover:shadow-md transition-shadow">
              <h3 className="font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-md shadow hover:shadow-md transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <Link to={`/jobs/${job.id}`} className="text-blue-600 hover:underline">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home