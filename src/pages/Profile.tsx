import React from 'react'
import { User, Briefcase, Mail, Phone, MapPin, Calendar, Download } from 'lucide-react'

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    title: 'Senior Software Developer',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    location: 'San Francisco, CA',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker'],
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Co.',
        period: '2018 - Present',
        description: 'Led development of multiple web applications using React and Node.js. Implemented CI/CD pipelines and improved overall code quality.',
      },
      {
        title: 'Junior Developer',
        company: 'Startup Inc.',
        period: '2015 - 2018',
        description: 'Worked on front-end development using HTML, CSS, and JavaScript. Collaborated with UX designers to implement responsive designs.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        year: '2015',
      },
    ],
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-white p-6 rounded-md shadow">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mr-6">
            <User size={48} className="text-gray-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.title}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="flex items-center mb-2"><Mail size={18} className="mr-2" /> {user.email}</p>
            <p className="flex items-center mb-2"><Phone size={18} className="mr-2" /> {user.phone}</p>
            <p className="flex items-center"><MapPin size={18} className="mr-2" /> {user.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
          {user.experience.map((job, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium">{job.title} at {job.company}</h4>
              <p className="text-gray-600 flex items-center"><Calendar size={14} className="mr-1" /> {job.period}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          {user.education.map((edu, index) => (
            <div key={index}>
              <h4 className="font-medium">{edu.degree}</h4>
              <p>{edu.school}, {edu.year}</p>
            </div>
          ))}
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center">
          <Download size={18} className="mr-2" /> Download Resume
        </button>
      </div>
    </div>
  )
}

export default Profile