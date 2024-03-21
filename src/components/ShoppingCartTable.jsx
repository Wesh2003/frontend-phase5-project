import React, { useState, useEffect } from 'react';

function ShoppingCart({isAuthenticated}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/shoppingcart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        isAuthenticated = true;
      })
      .catch(error => {
        console.error('Error fetching shopping cart items:', error);
      });
  }, []);

  const handleDeleteItem = (id) => {
    fetch(`/shoppingcart/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      } else {
        console.error('Failed to delete item from shopping cart');
      }
    })
    .catch(error => {
      console.error('Error deleting item from shopping cart:', error);
    });
  };
  // const handleAddToCart = (item) => {
  //   fetch('/add-to-cart', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(item),
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       // Assuming the response contains the updated cart items
  //       return response.json();
  //     } else {
  //       console.error('Failed to add item to cart');
  //     }
  //   })
  //   .then(data => {
  //     setCartItems(data); // Update the UI with the updated cart items
  //   })
  //   .catch(error => {
  //     console.error('Error adding item to cart:', error);
  //   });
  // };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;