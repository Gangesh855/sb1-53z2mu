import React from 'react'
import { Search, Filter, MapPin, Building } from 'lucide-react'

const jobListings = [
  { id: 1, title: 'Frontend Developer', company: 'WebTech Solutions', location: 'Remote', type: 'Full-time', salary: '$80,000 - $120,000' },
  { id: 2, title: 'Product Manager', company: 'InnovateCo', location: 'New York, NY', type: 'Full-time', salary: '$100,000 - $150,000' },
  { id: 3, title: 'Data Analyst', company: 'DataCrunch', location: 'Chicago, IL', type: 'Contract', salary: '$70,000 - $90,000' },
  { id: 4, title: 'DevOps Engineer', company: 'CloudSys', location: 'San Francisco, CA', type: 'Full-time', salary: '$110,000 - $160,000' },
  { id: 5, title: 'UX Researcher', company: 'DesignFirst', location: 'Los Angeles, CA', type: 'Part-time', salary: '$60,000 - $80,000' },
]

const JobSearch: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Search</h1>
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <Search size={24} />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Filter size={20} className="mr-2" /> Filters
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Job Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Full-time
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Part-time
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Contract
                  </label>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Entry Level
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Mid Level
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Senior Level
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Job Listings</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building size={16} className="mr-2" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{job.type}</span>
                    <span className="text-sm font-medium text-green-600">{job.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSearch