"use client";

import { useState } from 'react';

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    teacherName: ''
  });
  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    
    // Reset form after submission
    setFormData({
      studentName: '',
      email: '',
      phone: '',
      teacherName: ''
    });
    
    // Show success message (in a real app)
    alert('Registration submitted successfully!');
  };


  
  return (
    <section id="registration" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-20 right-20 w-80 h-80 bg-[#FF00FF]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-[#2a1e5c]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-40 bg-[#c60313]/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-[#000000] relative inline-block">
            <span className="relative z-10">Registration</span>
          
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">Complete your registration form to join our innovative programs</p>
        </div>
        
        <div className="max-w-lg mx-auto">
          {/* Registration Form */}
          <div className="bg-white p-8 rounded-xl shadow-[0_20px_30px_-15px_rgba(0,0,0,0.2)] border-2 border-[#FF00FF]/20 transform transition-all duration-500 hover:shadow-[0_25px_35px_-15px_rgba(0,0,0,0.3)] hover:border-[#FF00FF]/40">
            <h3 className="text-2xl font-bold mb-6 text-[#2a1e5c] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF00FF] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Online Registration
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
              <div className="group">
                <label htmlFor="studentName" className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#FF00FF] transition-colors">
                  Student Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter student name"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#FF00FF] transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#FF00FF] transition-colors">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="teacherName" className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-[#FF00FF] transition-colors">
                  Preferred Teacher (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="teacherName"
                    name="teacherName"
                    value={formData.teacherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter preferred teacher"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-gradient-to-r from-[#FF00FF] to-[#c60313] rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF00FF]/20 focus:outline-none focus:ring-2 focus:ring-[#FF00FF] focus:ring-offset-2 mt-3 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Submit Registration
                </span>
              </button>
            </form>
          </div>
          

        </div>
      </div>
    </section>
  );
} 