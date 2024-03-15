import React from 'react';

function ReceiptTable({ orderDetails, userId }) {
  return (
    <div>
      <h2> Receipt</h2>
      <p>Thank you for using Shop mate, User ID: {userId}!</p>
      <h3>Order Details:</h3>
      <ul>
        {orderDetails.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal(orderDetails)}</p>
    </div>
  );
}

function calculateTotal(orderDetails) {
  return orderDetails.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

export default ReceiptTable;