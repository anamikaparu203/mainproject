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
import image from'../assets/images/image.jpg'


const Home = () => {

  return (
    <div className="App"><img src={image} alt="Orphan support"  style={{ width: '1525px', height: '680px',}}  /> <br />
 

  

    {/* <h2>hello</h2> */}

    
    <center><h3>Each day, an estimated 734 children
become orphans </h3></center>

<h5>Orphan Life Foundation is a worldwide non-profit orphanage funding organization that are dedicated to looking for the welfare of abandoned children and orphans. We help orphans by providing health and educational opportunities, stable housing and adoption services.

With the help of our charity program for orphans, we’ve developed a number of orphanages, infant adoption centers, and schools in underserved parts of Philippines,India,Columbia and Africa with proper learning resources and tools.

Help us donate to orphans and improve their living situations.</h5>


  </div>


  
  )
 

}

export default Home

