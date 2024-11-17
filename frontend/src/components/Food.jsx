import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    howManyPeople: '',
    quantity: '',
    foodName: '',
    date: new Date().toISOString().split('T')[0], 
    amount: '',
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
    setSuccessMessage('Food details submitted successfully!');
    
  };

  
  const handleBackClick = () => {
    navigate('/welcome'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Food Resources
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Enter food resource details below.
        </Typography>

        
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            {successMessage}
          </Alert>
        )}

        
        <form onSubmit={handleSubmit}>
          <TextField
            label="How Many People"
            name="howManyPeople"
            type="number"
            value={formData.howManyPeople}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Food Name"
            name="foodName"
            type="text"
            value={formData.foodName}
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
            name="amount"
            type="number"
            value={formData.amount}
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

export default Food;
