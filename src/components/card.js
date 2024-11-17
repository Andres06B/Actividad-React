import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';

function Card({ title, imageUrl, link }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-image">
          <img src={imageUrl} alt="Card" />
        </div>
        <div className="card-info">
          <h3>{title}</h3>
          <button 
            className="card-button" 
            onClick={handleNavigation}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
