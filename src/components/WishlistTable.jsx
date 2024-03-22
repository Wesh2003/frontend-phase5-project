import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function WishlistTable({ userId }) {
    const [wishlistItems, setWishlistItems] = useState([]);
    const history = useHistory()
    console.log(userId);

    useEffect(() => {
        console.log(userId);
        if (userId) {
            fetch(`https://backend-phase5-project.onrender.com/wishlists/${userId}`)
                .then(response => response.json())
                .then(data => {
                    setWishlistItems(data.wishlist);
                })
                .catch(error => {
                    console.error('Error fetching wishlist:', error);
                });
        }
        

    }, [userId]);
    
    function  handleLog(){
        history.push( "/login" )
    }
    
    if (!userId) {
        return <button onClick={handleLog} className="btn btn-secondary mr-2">login first</button>;
    }
    function deleteFromWishlist(productId) {
        fetch(`https://backend-phase5-project.onrender.com/wishlists/remove/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete from wishlist');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message); 
        })
        .catch(error => {
            console.error('Error deleting from wishlist:', error);
            alert('An error occurred while deleting from wishlist. Please try again later.');
        });
    }
    
    return (
        <div className="container">
            <h2>My Wishlist</h2>
            <div className="row">
                {wishlistItems.map((item) => (
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item._id} id='entire-card'>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4" id='image-div'>
                                    <img
                                        src={item.image_url}
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
                                        {/* <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p> */}
                                        {/* <p className="card-text"><strong>Category:</strong> {item.category}</p> */}
                                        
                                        <div className="d-flex justify-content-between align-items-center">
                                           {console.log(item)}
                                            
                                        <button className="btn btn-secondary mr-2" onClick={() => deleteFromWishlist(item.product_id)}>Delete from Wishlist</button>

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

export default WishlistTable;
