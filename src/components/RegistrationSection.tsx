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
    <section id="registration" className="py-16 px-6 bg-white text-[#c60313]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Online Registration</h2>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium mb-1">
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-black/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
                placeholder="Enter student name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-black/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
                placeholder="Enter email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-black/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
                placeholder="Enter phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="teacherName" className="block text-sm font-medium mb-1">
                Preferred Teacher Name
              </label>
              <input
                type="text"
                id="teacherName"
                name="teacherName"
                value={formData.teacherName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-black/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF00FF]"
                placeholder="Enter preferred teacher"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#FF00FF] hover:bg-[#c60313] rounded-md font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-[#FF00FF] focus:ring-offset-2 focus:ring-offset-blue-900 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 