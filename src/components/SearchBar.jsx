import React, { useState } from 'react'

function SearchBar({products}) {
    const [input,setInput] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    const handleSearch = () => {
        const searchTerm = input.toLowerCase();

        if (searchTerm.trim() === '') {
            setFilteredData([]);
        } else {
            const filtering = products.filter((item) =>
                (item.name || '').toLowerCase().includes(searchTerm)
            );

            if (filtering.length === 0) {
                alert("Sorry, we don't have those  products thanks.");
            }

            setFilteredData(filtering);
        }
    };


  return (
    <div>
        <input 
        type="text" 
        placeholder='Search...'
        value={input}
        onChange={(e)=>setInput(e.target.value)}

        
        />
        <button onClick={handleSearch}>Search</button>

        <ul>
        {filteredData.map((item) => (
                    <li key={item._id}>
                        <span style={{ color: "darkgrey" }}>
                            {item.name}
                        </span> <br />
                        <img
                            src={item.image}
                            alt="Product"
                            className="product-image"
                        />
                        <br />
                        <strong>Description:</strong> {item.description}
                        <br />
                        <strong>Price:</strong> {item.price}
                        <br />
                        <strong>Quantity:</strong> {item.quantity}
                        <br />
                        <strong>Category:</strong>{item.category}
                        <br></br>
                        <button>
                            Add To Cart
                        </button>
                        <br></br>
                        <button>
                            Add To Wishlist
                        </button>
                        


                    </li>



                ))}
                
            

        </ul>

    </div>
  )
}

export default SearchBar
