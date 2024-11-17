// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [contactDetails, setContactDetails] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/contact-details') // Replace with your backend URL
//       .then((response) => {
//         setContactDetails(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to fetch contact details. Please try again later.");
//       });
//   }, []);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Contact Us</h1>
//       <hr style={{ width: '50%', margin: '20px auto', border: '1px solid orange' }} />
      
//       {error ? (
//         <p style={{ color: 'red' }}>{error}</p>
//       ) : contactDetails ? (
//         <div>
//           <p>{contactDetails.description}</p>
//           <h3>{contactDetails.organization}</h3>
//           <p>
//             {contactDetails.address.street}, {contactDetails.address.city}, {contactDetails.address.state}, {contactDetails.address.zip}
//           </p>
//           <p>Phone: {contactDetails.phone}</p>
//           <p>Email: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></p>
//         </div>
//       ) : (
//         <p>Loading contact details...</p>
//       )}
//     </div>
//   );
// };

// export default Contact;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [contactDetails, setContactDetails] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/contact-details') // Replace with your backend URL
//       .then((response) => {
//         setContactDetails(response.data);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError("Failed to fetch contact details. Please try again later.");
//       });
//   }, []);

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Contact Us</h1>
//       <hr style={styles.divider} />
      
//       {error ? (
//         <p style={styles.error}>{error}</p>
//       ) : contactDetails ? (
//         <div style={styles.details}>
//           <p style={styles.description}>{contactDetails.description}</p>
//           <h3 style={styles.organization}>{contactDetails.organization}</h3>
//           <p style={styles.address}>
//             {contactDetails.address.street}, {contactDetails.address.city}, {contactDetails.address.state}, {contactDetails.address.zip}
//           </p>
//           <p style={styles.info}><strong>Phone:</strong> {contactDetails.phone}</p>
//           <p style={styles.info}>
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactDetails.email}`} style={styles.link}>
//               {contactDetails.email}
//             </a>
//           </p>
//         </div>
//       ) : (
//         <p style={styles.loading}>Loading contact details...</p>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '600px',
//     margin: '30px auto',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     fontSize: '2rem',
//     color: '#333',
//     marginBottom: '10px',
//   },
//   divider: {
//     width: '50%',
//     margin: '10px auto 20px',
//     border: '1px solid #ffa500',
//   },
//   error: {
//     color: '#d9534f',
//     fontWeight: 'bold',
//   },
//   details: {
//     textAlign: 'left',
//     padding: '0 20px',
//   },
//   description: {
//     fontSize: '1rem',
//     color: '#555',
//     marginBottom: '20px',
//   },
//   organization: {
//     fontSize: '1.5rem',
//     color: '#333',
//     margin: '10px 0',
//   },
//   address: {
//     fontSize: '1rem',
//     color: '#666',
//     marginBottom: '10px',
//   },
//   info: {
//     fontSize: '1rem',
//     color: '#444',
//     marginBottom: '10px',
//   },
//   link: {
//     color: '#007bff',
//     textDecoration: 'none',
//   },
//   loading: {
//     fontSize: '1rem',
//     color: '#888',
//   },
// };

// export default Contact;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactDetails, setContactDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get('http://localhost:5000/contact-details') // Replace with your backend URL
      .then((response) => {
        setContactDetails(response.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch contact details. Please try again later.");
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <hr style={styles.divider} />
      
      {error ? (
        <p style={styles.error}>{error}</p>
      ) : contactDetails ? (
        <div style={styles.details}>
          <p style={styles.description}>{contactDetails.description}</p>
          <h3 style={styles.organization}>{contactDetails.organization}</h3>
          <p style={styles.address}>
            {contactDetails.address.street}, {contactDetails.address.city}, {contactDetails.address.state}, {contactDetails.address.zip}
          </p>
          <p style={styles.info}><strong>Phone:</strong> {contactDetails.phone}</p>
          <p style={styles.info}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactDetails.email}`} style={styles.link}>
              {contactDetails.email}
            </a>
          </p>
        </div>
      ) : (
        <p style={styles.loading}>Loading contact details...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f0fff0', // Light blue background color
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '10px',
  },
  divider: {
    width: '50%',
    margin: '10px auto 20px',
    border: '1px solid #ffa500',
  },
  error: {
    color: '#d9534f',
    fontWeight: 'bold',
  },
  details: {
    textAlign: 'left',
    padding: '0 20px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '20px',
  },
  organization: {
    fontSize: '1.5rem',
    color: '#333',
    margin: '10px 0',
  },
  address: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
  info: {
    fontSize: '1rem',
    color: '#444',
    marginBottom: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  loading: {
    fontSize: '1rem',
    color: '#888',
  },
};

export default Contact;
