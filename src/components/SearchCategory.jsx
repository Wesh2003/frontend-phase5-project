import React, { useState, useEffect } from 'react';

function SearchCategory() {
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`/products?category=${category}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error searching products by category:', error);
      });
  };

  return (
    <div>
      <h2>Search by Category</h2>
      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h3>Search Results:</h3>
      <ul>
        {searchResults.map(product => (
          <li key={product.id}>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>On Stock: {product.onstock}</p>
            <p>Rating: {product.rating}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchCategory;
