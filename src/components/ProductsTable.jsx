import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddToWishlist from './AddToWishlist';

function ProductsTable({userId ,isAuthenticated} ) {
    const [products, setProducts] = useState([]);
    console.log(userId)

    const [selectedCategory, setSelectedCategory] = useState('All Categories')
    useEffect(() => {
        fetch("https://backend-phase5-project.onrender.com/products")
            .then(response => response.json())
            .then((data) => setProducts(data));
    }, []);

    const handleFilterByCategory = () => {
        if (selectedCategory === "All Categories") {
            return products;
        } else {
            return products.filter(product => product.category === selectedCategory);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const categories = ['All Categories', ...new Set(products.map(item => item.category))];

    function handleAddToCart(item){
        if (!userId) {
            alert('Please log in to add items to your wishlist.');

            return;
        }

        
        fetch('https://backend-phase5-project.onrender.com/shoppingcart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, product_id: item}),
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
        
            alert('An error occurred while adding to wishlist. Please try again later.');
        });
    } 
    function handleAddToWishlist(productId) {
        
    
        if (!userId) {
            alert('Please log in to add items to your wishlist.');
            return;
        }
    
        fetch('http://0.0.0.0:5009/wishlists/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: userId, product_id: productId }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Could not add to wishlist');
            }
            return response.json();
        })
        .then(data => {
            alert(data.message); 
        });
    }
    
     

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                    <h1>Products</h1>
                    <SearchBar products={products} />
                </div>
                <CategoryFilter categories={categories} category={selectedCategory} handleCategoryChange={handleCategoryChange} />
            </div>
            <div className="row">
                {handleFilterByCategory().map((item) => (
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item._id} id = 'entire-card'>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4" id= 'image-div'>
                                    <img
                                        src={item.image_url}
                                        alt="Product"
                                        className="card-img"
                                        style={{ objectFit: 'auto' }}
                                    />y
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
      
                                        <h5 className="card-title" style={{ color: "black" }}>{item.name}</h5>
                                        <p className="card-text"><strong>Description:</strong> {item.description}</p>
                                        <p className="card-text"><strong>Price:</strong> {item.price}</p>
                                        {/* <p className="card-text"><strong>Quantity:</strong> {item.quantity}</p> */}
                                        <p className="card-text"><strong>Category:</strong> {item.category}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn btn-primary mr-2" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                                            <button className="btn btn-secondary mr-2" onClick={() => handleAddToWishlist(item.id)}>Add To Wishlist</button>

                                            <button className="btn btn-info"><Link to={`/reviews`} className="link" id = 'reviewbutton'>Review</Link></button>
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

export default ProductsTable;
