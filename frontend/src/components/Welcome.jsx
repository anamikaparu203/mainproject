import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleResourceClick = () => {
    console.log("Resource button clicked");
    setIsDropdownVisible((prevState) => !prevState);
  };


  const handleBackClick = () => {
    navigate('/Sign'); 
  };

  
  const handleDropdownItemClick = (route) => {
    navigate(route);
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <br /><br /><br /><br />

      <center><h2>Welcome To SponsorshipPage!</h2></center>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        
        <button 
          onClick={handleResourceClick} 
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Resource
        </button>
      </div>

      
      {isDropdownVisible && (
        <div style={{
          position: 'absolute', 
          top: '250px', 
          left: '57%', 
          transform: 'translateX(-50%)', 
          backgroundColor: '#ffffff', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
          padding: '10px',
          borderRadius: '5px'
        }}>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li onClick={() => handleDropdownItemClick('/food')} style={{ padding: '8px 0', cursor: 'pointer' }}>Food</li>
            <li onClick={() => handleDropdownItemClick('/dress')} style={{ padding: '8px 0', cursor: 'pointer' }}>Dress</li>
            <li onClick={() => handleDropdownItemClick('/Medicine')} style={{ padding: '8px 0', cursor: 'pointer' }}>Medicine</li>
            <li onClick={() => handleDropdownItemClick('/Stationary')} style={{ padding: '8px 0', cursor: 'pointer' }}>Stationary</li>
          </ul>
        </div>
      )}

      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button 
          onClick={handleBackClick} 
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#FF5722',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}  

export default Welcome;
