// import React from 'react';
// import Home from ''; // Adjust the path as needed

// const Home = () => (
//   <div style={styles.container}>
//     <h1>Welcome to the Orphan Life Foundation</h1>
//     <img src={image} alt="Orphan Life Foundation" style={styles.image} />
//     <p>
//       We are committed to supporting and uplifting orphans worldwide. Join us in making a difference.
//     </p>
//   </div>
// );

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '20px',
//   },
//   image: {
//     width: '100%',
//     maxWidth: '800px',
//     borderRadius: '8px',
//     margin: '20px 0',
//   },
// };

// export default Home;



import React from 'react'
import image from'../assets/images/orphan.jpg'

const Home = () => {
  return (
    <div><img src={image} /></div>
  )
}

export default Home

