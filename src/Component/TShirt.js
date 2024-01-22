// Updated Component/TShirt.js
import React from 'react';
import { data } from '../data';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function TShirt({ index }) {
  const { name, price, description, path } = data[index];
  const capitalizedName = capitalizeFirstLetter(name);
  const capitalizedDescription = capitalizeFirstLetter(description);

  return (
    <div style={{ borderRadius: '40px',textAlign: 'center', margin: '40px', borderRight: '2px solid #ccc', padding: '40px', backgroundColor: 'rgb(90, 24, 5)' }}>
      <img src={path} style={{ width: '300px', marginBottom: '10px', borderRadius: '30px' }} alt={capitalizedName} />
      <h1 style={{ fontSize: '2.5rem', color: 'white' }}>{capitalizedName}</h1>
      <p style={{ fontSize: '3.2rem', color: 'white' }}>
        <span style={{ fontWeight: 'bold' }}>$</span>
        {price}
      </p>
      <p style={{ fontSize: '2rem', color: 'white' }}>{capitalizedDescription}</p>
      <button style={{ fontSize: '2rem',background:'lime',borderRadius:'15px',padding:'15px' }}>Add to Cart</button>
    </div>
  );
}

export default TShirt;
