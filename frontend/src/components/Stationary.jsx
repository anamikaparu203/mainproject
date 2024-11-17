import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Stationary = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    books: '',
    bags: '',
    penPencil: '',
    date: new Date().toISOString().substring(0, 10), 
    money: '',
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

  
    setSuccessMessage('Stationary details submitted successfully!');

    
    setFormData({
      books: '',
      bags: '',
      penPencil: '',
      date: new Date().toISOString().substring(0, 10),
      money: '',
    });
  };

  
  const handleBackClick = () => {
    navigate('/Welcome'); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Stationary Resources
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Enter stationary resource details below.
        </Typography>

        {/* Success Message */}
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            {successMessage}
          </Alert>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Books"
            name="books"
            type="number"
            value={formData.books}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bags"
            name="bags"
            type="number"
            value={formData.bags}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Pen & Pencil"
            name="penPencil"
            type="number"
            value={formData.penPencil}
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

          {/* Submit Button */}
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

export default Stationary;
