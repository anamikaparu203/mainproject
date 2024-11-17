import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Medicine = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    patientName: '',
    medicineName: '',
    money: '',
    date: new Date().toISOString().substring(0, 10), 
  });

  const [successMessage, setSuccessMessage] = useState(''); 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setSuccessMessage('Medicine details submitted successfully!'); 
  };


  const handleBackClick = () => {
    navigate('/welcome'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Medicine Resources
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Enter medicine resource details below.
        </Typography>

        
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            {successMessage}
          </Alert>
        )}

        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Patient Name"
            name="patientName"
            type="text"
            value={formData.patientName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Medicine Name"
            name="medicineName"
            type="text"
            value={formData.medicineName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Amount"
            name="money"
            type="number"
            value={formData.money}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

    
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" type="submit" style={{ marginRight: '10px' }}>
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleBackClick}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Medicine;
