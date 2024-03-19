import React, { useState, useEffect } from 'react';

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetch('https://backend-phase5-project.onrender.com/wishlists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      setWishlistItems(data.wishlist);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (
    <div className="container">
      <h2>My Wishlist</h2>
      <div className="row">
                {wishlistItems.map((item) => (
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item._id} id = 'entire-card'>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4" id= 'image-div'>
                                    <img
                                        src={item.image}
                                        alt="Product"
                                        className="card-img"
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "darkgrey" }}>{item.name}</h5>
                                        <p className="card-text"><strong>Description:</strong> {item.description}</p>
                                        <p className="card-text"><strong>Price:</strong> {item.price}</p>
                                        <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p>
                                        <p className="card-text"><strong>Category:</strong> {item.category}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-secondary mr-2">Add To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

    </div>
  );
}

export default WishlistPage;
