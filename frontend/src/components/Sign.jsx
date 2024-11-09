// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// function Sign() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
// const navigate=useNavigate();


//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       setError('Both fields are required');
//       return;
//     }

//     console.log('Sign-in successful', formData);
//     navigate('/Welcome')
//   };

//   return (
//     <div>
//       <h2>Sign</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         {error && <p>{error}</p>}
//         <button type="submit">Sign In</button>
//       </form>
//       <a href="/forgot-password">Forgot Password?</a>
//     </div>
//   );
// }

// export default Sign;


import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TextField, Button, Typography, Container, Box, Link } from '@mui/material';

function Sign() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    navigate('/Welcome');
  };

  return (
    <Container maxWidth="xs" style={{ paddingTop: '50px' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '8px' }}
      >
        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '20px' }}
          >
            Sign In
          </Button>
        </form>
        <Box display="flex" justifyContent="center" marginTop="10px">
          <Link href="/forgot-password" variant="body2">
            Forgot Password?
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Sign;
