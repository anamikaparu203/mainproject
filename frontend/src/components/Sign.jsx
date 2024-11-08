import React, { useState } from 'react';

function Sign() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Both fields are required');
      return;
    }

    console.log('Sign-in successful', formData);
  };

  return (
    <div>
      <h2>Sign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
    </div>
  );
}

export default Sign;
