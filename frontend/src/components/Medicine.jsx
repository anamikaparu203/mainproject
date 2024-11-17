

// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';

// const Medicine = () => {
//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     patientName:String,        
//     medicineName:String,   
//     money:Number,           
//     date:{ type: Date, default: Date.now }
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission (e.g., send data to a backend or API)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Log form data; replace with submission logic if needed
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Medicine Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter food resource details below.
//       </Typography>

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="patientName"
//           name="patientName"
//           type="String"
//           value={formData.howManyPeople}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="medicineName"
//           name="medicineName"
//           type="String"
//           value={formData.quantity}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
       
//         <TextField
//           label="Date"
//           name="date"
//           type="date"
//         //   value={formData.date.toISOString().substring(0, 10)}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="amount"
//           name="amount"
//           type="number"
//           value={formData.money}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />

//         {/* Submit Button */}
//         <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Medicine;



// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Medicine = () => {
//   const navigate = useNavigate();

//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     patientName: '',
//     medicineName: '',
//     money: '',
//     date: new Date().toISOString().substring(0, 10) // Default to today's date
//   });

  
//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Log form data; replace with submission logic if needed
//   };

  



//   // Navigate back to the welcome page
//   const handleBackClick = () => {
//     navigate('/welcome'); // Adjust this path based on your routing setup
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Medicine Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter medicine resource details below.
//       </Typography>

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Patient Name"
//           name="patientName"
//           type="text"
//           value={formData.patientName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Medicine Name"
//           name="medicineName"
//           type="text"
//           value={formData.medicineName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Date"
//           name="date"
//           type="date"
//           value={formData.date}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="Amount"
//           name="money"
//           type="number"
//           value={formData.money}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />

//         {/* Submit Button */}
//         <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
//           Submit
//         </Button>
      
//         {/* Back Button */}
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleBackClick}
//           style={{ marginTop: '20px', marginLeft: '10px' }}
//         >
//           Back
//         </Button>
//       </form>
      


//     </div>
//   );
// };

// export default Medicine;



// import React, { useState } from 'react';
// import { TextField, Button, Typography, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Medicine = () => {
//   const navigate = useNavigate();

//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     patientName: '',
//     medicineName: '',
//     money: '',
//     date: new Date().toISOString().substring(0, 10), // Default to today's date
//   });

//   const [successMessage, setSuccessMessage] = useState(''); // State for success message

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData); // Log form data; replace with submission logic if needed
//     setSuccessMessage('Medicine details submitted successfully!'); // Set success message
//   };

//   // Navigate back to the welcome page
//   const handleBackClick = () => {
//     navigate('/welcome'); // Adjust this path based on your routing setup
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Medicine Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter medicine resource details below.
//       </Typography>

//       {/* Display success message if available */}
//       {successMessage && (
//         <Alert severity="success" style={{ marginBottom: '20px' }}>
//           {successMessage}
//         </Alert>
//       )}

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Patient Name"
//           name="patientName"
//           type="text"
//           value={formData.patientName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Medicine Name"
//           name="medicineName"
//           type="text"
//           value={formData.medicineName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Date"
//           name="date"
//           type="date"
//           value={formData.date}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="Amount"
//           name="money"
//           type="number"
//           value={formData.money}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />

//         {/* Submit Button */}
//         <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
//           Submit
//         </Button>

//         {/* Back Button */}
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={handleBackClick}
//           style={{ marginTop: '20px', marginLeft: '10px' }}
//         >
//           Back
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Medicine;





import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Medicine = () => {
  const navigate = useNavigate();

  // State variables to store form input
  const [formData, setFormData] = useState({
    patientName: '',
    medicineName: '',
    money: '',
    date: new Date().toISOString().substring(0, 10), // Default to today's date
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  // Handle form input changes
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
    console.log(formData); // Log form data; replace with submission logic if needed
    setSuccessMessage('Medicine details submitted successfully!'); // Set success message
  };

  // Navigate back to the welcome page
  const handleBackClick = () => {
    navigate('/welcome'); // Adjust this path based on your routing setup
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

        {/* Display success message if available */}
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            {successMessage}
          </Alert>
        )}

        {/* Form Fields */}
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

          {/* Submit and Back Buttons */}
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
