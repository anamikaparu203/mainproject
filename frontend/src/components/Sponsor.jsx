import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Sponsor = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('register'); 
  };

  return (
    <div className="sponsor-page container">
      <h1>Become a Sponsor</h1>
      <p>Learn more about our sponsorship options and how you can help support a child in need.</p>

      
      <button onClick={handleNextClick} className="btn btn-primary">
        Next
      </button>

      
      <Outlet />
    </div>
  );
};

export default Sponsor;
