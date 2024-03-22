import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './ShoppingCartTable'; // Import the ShoppingCart component

function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [itemAddedToCart, setItemAddedToCart] = useState(false);
    const userId = localStorage.getItem("id");

    const [selectedCategory, setSelectedCategory] = useState('All Categories');
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

    async function handleAddToCart(item) {
        const userId = localStorage.getItem("id");
        const formData = {
            product_id: item.id,
            user_id: userId,
            // Add other properties as needed
        };
    
        try {
            const response = await fetch(' https://backend-phase5-project.onrender.com/shoppingcart', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Could not add to cart');
            }
            setItemAddedToCart(true);
            window.prompt('added')
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately (e.g., display error message to user)
        }
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
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item._id} id='entire-card'>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4" id='image-div'>
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
                                            {/* Use handleAddToCart function to trigger the rendering of the ShoppingCart component */}
                                            <button className="btn btn-primary mr-2" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                                            <button className="btn btn-info"><Link to={`/reviews`} className="link" id='reviewbutton'>Review</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Render the ShoppingCart component if an item is added to the cart */}
            {itemAddedToCart && <ShoppingCart />}
        </div>
    );
}

export default ProductsTable;







