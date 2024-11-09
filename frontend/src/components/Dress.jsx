import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Dress = () => {
  // State to store form input
  const [formData, setFormData] = useState({
    girlsDress: '',
    boysDress: '',
    date: new Date(),
    money: '',
  });

  // Handle input changes

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log(formData); // For example, log the form data
    // You can also perform any necessary API calls or state updates here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

    // try {
    //   // Make API call to save the data (assuming an endpoint to save the dress details)
    //   const response = await fetch('/api/dress', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

//       if (response.ok) {
//         console.log('Dress details submitted successfully');
//         // Clear the form or navigate to another page
//       } else {
//         console.error('Error submitting dress details');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Dress Resources</Typography>
      <Typography variant="body1" paragraph>
        Enter the details of the dress resources below.
      </Typography>

      {/* Form to input dress details */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Girls' Dress"
          name="girlsDress"
          type="number"
          value={formData.girlsDress}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Boys' Dress"
          name="boysDress"
          type="number"
          value={formData.boysDress}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date.toISOString().substring(0, 10)}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Money"
          name="money"
          type="number"
          value={formData.money}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />

        {/* Submit button */}
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Dress;



