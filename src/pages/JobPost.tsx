import React from 'react'

const JobPost: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form className="bg-white p-6 rounded-md shadow">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input type="text" id="title" name="title" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input type="text" id="company" name="company" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input type="text" id="location" name="location" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
          <select id="jobType" name="jobType" className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select job type</option>
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
          <input type="text" id="salary" name="salary" placeholder="e.g. $50,000 - $70,000" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
          <textarea id="description" name="description" rows={6} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
          <textarea id="requirements" name="requirements" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">Benefits</label>
          <textarea id="benefits" name="benefits" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Post Job
        </button>
      </form>
    </div>
  )
}

export default JobPost