import React from 'react'

function AddToWishlist({item}) {
    function handleAddToWishlist(productId) {
        fetch('https://your-backend.com/wishlists/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
          body: JSON.stringify({ product_id: productId }),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not add to wishlist');
          }
          return response.json();
        })
        .then(data => {
          alert(data.message);
          
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
      
  return (
    <button className="btn btn-secondary mr-2" onClick={() => handleAddToWishlist(item._id)}>Add To Wishlist</button>

  )
}

export default AddToWishlist