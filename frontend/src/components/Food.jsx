// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router';
// const Food = () => {

//   const navigate=useNavigate();
//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     howManyPeople: '',
//     quantity: '',
//     foodName: '',
//     date: new Date(),
//     amount: '',
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

// const handleBackClick=()=>{
//   Navigate('/Welcome');
// }

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Food Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter food resource details below.
//       </Typography>

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>

//         <TextField
           
//           label="How Many People"
//           name="howManyPeople"
//           type="number"
//           value={formData.howManyPeople}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           style={{width:'500px'}}
          
//         />
//         <TextField
//           label="Quantity"
//           name="quantity"
//           type="number"
//           value={formData.quantity}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Food Name"
//           name="foodName"
//           type="text"
//           value={formData.foodName}
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
//         <Button variant="contained" color="primary"onClick={handleBackClick} type="Back" style={{ marginTop: '20px' }}>
//           Back
//         </Button>

//       </form>
//     </div>
//   );
// };

// export default Food;



// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Food = () => {
//   // Initialize navigate
//   const navigate = useNavigate();

//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     howManyPeople: '',
//     quantity: '',
//     foodName: '',
//     date: new Date(),
//     amount: '',
//   });
//   // const [successMessage, setSuccessMessage] = useState('');

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
//     console.log(formData);
//     // setSuccessMessage('Registered Successfully');
//     // Log form data; replace with submission logic if needed
//   };

//   // Navigate to the welcome page
//   const handleBackClick = () => {
//     navigate('/welcome'); // Adjust this path based on your routing setup
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Food Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter food resource details below.
//       </Typography>


//    {/* Show success message if available */}
//    {/* {successMessage && (
//         <Alert severity="success" style={{ marginBottom: '20px' }}>
//           {successMessage}
//         </Alert>
//       )} */}


//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="How Many People"
//           name="howManyPeople"
//           type="number"
//           value={formData.howManyPeople}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
          
//         />
//         {/* <TextField
//           label="Quantity"
//           name="quantity"
//           type="number"
//           value={formData.quantity}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         /> */}
//         <TextField
//           label="Food Name"
//           name="foodName"
//           type="text"
//           value={formData.foodName}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Date"
//           name="date"
//           type="date"
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           label="Amount"
//           name="amount"
//           type="number"
//           value={formData.amount}
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
//           color="primary"
//           onClick={handleBackClick}
//           style={{ marginTop: '20px', marginLeft: '10px' }}
//         >
//           Back
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Food;



// import React, { useState } from 'react';
// import { TextField, Button, Typography, Alert } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Food = () => {
//   // Initialize navigate
//   const navigate = useNavigate();

//   // State variables to store form input
//   const [formData, setFormData] = useState({
//     howManyPeople: '',
//     quantity: '',
//     foodName: '',
//     date: new Date().toISOString().split('T')[0], // Default to current date in 'YYYY-MM-DD' format
//     amount: '',
//   });
//   const [successMessage, setSuccessMessage] = useState('');

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
//     console.log(formData);
//     setSuccessMessage('Food details submitted successfully!');
//     // Simulate form submission; replace with actual API call if needed
//   };

//   // Navigate to the welcome page
//   const handleBackClick = () => {
//     navigate('/welcome'); // Adjust this path based on your routing setup
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Food Resources</Typography>
//       <Typography variant="body1" paragraph>
//         Enter food resource details below.
//       </Typography>

//       {/* Show success message if available */}
//       {successMessage && (
//         <Alert severity="success" style={{ marginBottom: '20px' }}>
//           {successMessage}
//         </Alert>
//       )}

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="How Many People"
//           name="howManyPeople"
//           type="number"
//           value={formData.howManyPeople}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Food Name"
//           name="foodName"
//           type="text"
//           value={formData.foodName}
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
//           name="amount"
//           type="number"
//           value={formData.amount}
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
//           color="primary"
//           onClick={handleBackClick}
//           style={{ marginTop: '20px', marginLeft: '10px' }}
//         >
//           Back
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default Food;




import React, { useState } from 'react';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  // Initialize navigate
  const navigate = useNavigate();

  // State variables to store form input
  const [formData, setFormData] = useState({
    howManyPeople: '',
    quantity: '',
    foodName: '',
    date: new Date().toISOString().split('T')[0], // Default to current date in 'YYYY-MM-DD' format
    amount: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

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
    console.log(formData);
    setSuccessMessage('Food details submitted successfully!');
    // Simulate form submission; replace with actual API call if needed
  };

  // Navigate to the welcome page
  const handleBackClick = () => {
    navigate('/welcome'); // Adjust this path based on your routing setup
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

        {/* Show success message if available */}
        {successMessage && (
          <Alert severity="success" style={{ marginBottom: '20px' }}>
            {successMessage}
          </Alert>
        )}

        {/* Form Fields */}
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

export default Food;
