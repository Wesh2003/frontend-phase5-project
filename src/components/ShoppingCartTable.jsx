import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    fetch(`https://backend-phase5-project.onrender.com/shoppingcart/${userId}`)
      .then(response => response.json())
      .then(data => {
        setCartItems(data.cart); // Assuming 'cart' is the key containing your array of items
      })
      .catch(error => {
        console.error('Error fetching shopping cart items:', error);
      });
  }, [userId]); // Make sure to include userId as a dependency of useEffect

  const handleDeleteItem = (id) => {
    fetch(`https://backend-phase5-project.onrender.com/shoppingcart/${id}`, {
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
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image_url} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>Name: {item.name}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className='entry-login-btn'><Link to={`/checkout`} className="link">Proceed to Checkout</Link></button>
    </div>
  );
}

export default ShoppingCart;
