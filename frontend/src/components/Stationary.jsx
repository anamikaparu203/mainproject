import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Stationary = () => {
  const navigate = useNavigate();

  // State to store form inputs
  const [formData, setFormData] = useState({
    books: '',
    bags: '',
    penPencil: '',
    date: new Date().toISOString().substring(0, 10), // Default to today's date
    money: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data or replace with API submission
  };

  // Navigate back to resources page
  const handleBackClick = () => {
    navigate('/Welcome'); // Adjust this path based on your routing setup
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Stationary Resources</Typography>
      <Typography variant="body1" paragraph>
        Enter stationary resource details below.
      </Typography>

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
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>

        {/* Back Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={handleBackClick}
          style={{ marginTop: '20px', marginLeft: '10px' }}
        >
          Back
        </Button>
      </form>
    </div>
  );
};

export default Stationary;
