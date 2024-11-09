

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Medicine = () => {
  // State variables to store form input
  const [formData, setFormData] = useState({
    patientName:String,        
    medicineName:String,   
    money:Number,           
    date:{ type: Date, default: Date.now }
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (e.g., send data to a backend or API)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data; replace with submission logic if needed
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Medicine Resources</Typography>
      <Typography variant="body1" paragraph>
        Enter food resource details below.
      </Typography>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="patientName"
          name="patientName"
          type="String"
          value={formData.howManyPeople}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="medicineName"
          name="medicineName"
          type="String"
          value={formData.quantity}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
       
        <TextField
          label="Date"
          name="date"
          type="date"
        //   value={formData.date.toISOString().substring(0, 10)}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="amount"
          name="amount"
          type="number"
          value={formData.money}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Submit Button */}
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Medicine;