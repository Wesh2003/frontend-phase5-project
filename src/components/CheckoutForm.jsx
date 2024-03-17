import React, { useState } from 'react';
function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    deliveryAddress:'',
    shippingDetails :'',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
     [name]: value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here if needed
    onSubmit(formData);

  };
  
  const handleAddToReceipt = () => {
    fetch('/add-to-receipt', {  // Change the endpoint to /add-to-receipt
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        // Assuming the response contains the updated receipt items
        return response.json();
      } else {
        console.error('Failed to add item to receipt');
      }
    })
    .then(data => {
      // Update the UI with the updated receipt items
      // This could involve rendering the receipt table with the new data
      renderReceiptTable(data);
    })
    .catch(error => {
      console.error('Error adding item to receipt:', error);
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

      </div>

      <div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div>
      <div>
        <label htmlFor="deliveryAddress">deliveryAddress</label>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveraddress"
          value={formData.address}
          onChange={handleChange}
          required
        />

      </div>
      <div>
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.city}
          onChange={handleChange}
          required
        />
      <div> 
      <label htmlFor="shippingAddress">shippingAddress</label>
        <input
          type="text"
          id="shippingAddress"
          name="shippingAddress"
          value={formData.city}
          onChange={handleChange}
          required
        />


        </div>  
      </div>  
      <button type="submit">Submit</button>
    </form>

  );

}

 

export default CheckoutForm;