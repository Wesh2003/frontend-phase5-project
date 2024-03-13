import React, { useState, useEffect } from 'react';

function WishlistTable() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch('/wishlist')
      .then(response => response.json())
      .then(data => {
        setWishlistItems(data);
      })
      .catch(error => {
        console.error('Error fetching wishlist items:', error);
      });
  }, []);

  const handleDeleteItem = (id) => {
    fetch(`/wishlist/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
      } else {
        console.error('Failed to delete item from wishlist');
      }
    })
    .catch(error => {
      console.error('Error deleting item from wishlist:', error);
    });
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map(item => (
          <li key={item.id}>
            <img src={item.product.image} alt={item.product.name} style={{ width: '100px', height: '100px' }} />
            <p>Name: {item.product.name}</p>
            <p>Price: ${item.product.price}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistTable;
