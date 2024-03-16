import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    useEffect(() => {
        fetch("https://homy-6bvz.onrender.com/products")
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
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={item._id}>
                        <div className="card">
                            <div className="row no-gutters">
                                <div className="col-md-4">
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
                                            <button className="btn btn-secondary mr-2">Add To cart</button> 
                                            <button className="btn btn-secondary mr-2">Add To Wishlist</button>
                                            <button className="btn btn-info">Review</button>
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
