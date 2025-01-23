'use client';

import { useState } from 'react';

export default function RegisterUserPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the form data (or send it to an API)
    console.log({
      username,
      email,
      password,
    });
    
    // Optionally reset the form or show a success message
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className='text-black'>Register User Page</h1>
      <div className="bg-white p-8 rounded shadow-lg w-96 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-black">Register User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1 text-black">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1 text-black">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 px-4 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
