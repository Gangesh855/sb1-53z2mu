import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About JobHub</h3>
            <p>Connecting job seekers and employers for a better future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 JobHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer