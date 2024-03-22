import React from 'react';
import { useEffect, useState } from 'react'
import {Container, Table, Button} from 'react-bootstrap';

function ReceiptTable({ orderDetails}) {
  const  [receipts, setReceipts] = useState([])
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState('')

//   const userId = localStorage.getItem("id");

  useEffect(()=>{
      async function fetchReceiptData(){
          try{
              await fetch('https://backend-phase5-project.onrender.com/receipt')
              .then(response => response.json())
              .then(data => {
                  console.log("Here is data table")
                  console.log(data)
                  setReceipts(data)
              })
          }catch (error){
              console.log('Error: ', error)
          }
      }
      fetchReceiptData()
  },[])
  // console.log(receipt)

  function handleDelete(id) {
      fetch(`https://backend-phase5-project.onrender.com/receipt/${id}`, {
          method: "DELETE",
          }).then((r) => {
          if (r.ok) {
              setReceipts((receipts) =>
              receipts.filter((receipt) => receipt.id !== id)
              );
          }
          });

          alert ("Deleted")

    } 

    // useEffect(() => {
    //     fetch(`https://backend-phase5-project.onrender.com/shoppingcart/${userId}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setCartItems(data.cart); // Assuming 'cart' is the key containing your array of items
    //             calculateTotalCost();
    //         })
    //         .catch(error => {
    //             console.error('Error fetching shopping cart items:', error);
    //         });
            
    //     }, [userId]); // Make sure to include userId as a dependency of useEffect

    // function calculateTotalCost(){
    //     let totalcost = 0;
    //     for (let item of cartItems){
    //         totalcost += item.price;
    //         console.log(item.price);
    //     }
    //     console.log(totalcost)
    //     setTotal(totalcost.toFixed(2));
    // }


  return (
    <div>
      <h2> Receipt</h2>
      <h1>Thank you for using Shop mate</h1>
      <h3>Order Details:</h3>
      <Container className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Delivery address</th>
                    <th>City</th>
                    <th>Created at:</th>
                    {/* <th>Total cost</th> */}
                    <th>Delete receipt</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(receipts) && receipts.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.delivery_address}</td>
                        <td>{item.city}</td>
                        <td>{item.created_at}</td>
                        {/* <td>{item.user && item.user.name}</td>
                        <td>{item.user && item.user.email}</td>
                        <td>{item.user && item.user.phone}</td> */}
                        {/* <td>{total}</td> */}
                        <td><Button variant='danger' onClick={() => handleDelete(item.id)}>Cancel Delivery</Button></td>
                        {/* <td><Button variant='success'><Link to={`/receipt/${item.id}/edit`} className="link">Update Review</Link></Button></td>  */}
                        {/* Maybe we can update the review? */}
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
      {/* <p>Total: ${calculateTotal(orderDetails)}</p> */}
    </div>
  );
}

// function calculateTotal(orderDetails) {
//   return orderDetails.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
// }

export default ReceiptTable;