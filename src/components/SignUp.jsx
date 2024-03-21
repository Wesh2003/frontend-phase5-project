import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '', // Added phone state
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // Send signup request to backend

      const response = await fetch('https://backend-phase5-project.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response);
      if (response.ok) {
        // Redirect to products page upon successful signup
        window.location.replace('/'); 
      } else {
        // Handle signup error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  // this is a comment

  return (
    <div className='signup-form'>
      <h2 className='sign-heading'>Sign Up</h2>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div >
          <label className='signup-labels' htmlFor="username">Username:</label>
          <input className='signup-inputs' type="text" id="username" name="username" value={formData.name} onChange={handleChange} required />
        </div>
        <br></br>
        <div>
          <label className='signup-labels' htmlFor="email">Email:</label>
          <input className='signup-inputs' type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <br></br>
        <div>
          <label className='signup-labels' htmlFor="phone">Phone:</label>
          <input className='signup-inputs' type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <br></br>
        <div>
          <label className='signup-labels' htmlFor="password">Password:</label>
          <input className='signup-inputs' type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <button className = 'sign-button' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
