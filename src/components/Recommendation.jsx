import React from 'react';

const Recommendation = ({ recommendedItems }) => {
  return (
    <div className="recommendation">
      <h2>Recommended Products</h2>
      <ul>
        {recommendedItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
