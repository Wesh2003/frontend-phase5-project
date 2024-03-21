import React from 'react'
import { useEffect, useState } from 'react'
import {Container, Table, Button} from 'react-bootstrap';
// import { Link } from "react-router-dom";


function ReviewTable() {
  const  [reviews, setReviews] = useState([])
    useEffect(()=>{
        async function fetchReviewData(){
            try{
                await fetch('https://backend-phase5-project.onrender.com/reviews')
                .then(response => response.json())
                .then(data => {
                    console.log("Here is data table")
                    console.log(data)
                    setReviews(data)
                })
            }
            catch (error){
                console.log('Error:', error);
            }
        }
        fetchReviewData()
    },[])
    // console.log(reviews)

    function handleDelete(id) {
        fetch(`https://backend-phase5-project.onrender.com/reviews/${id}`, {
            method: "DELETE",
            }).then((r) => {
            if (r.ok) {
                setReviews((reviews) =>
                reviews.filter((review) => review.id !== id)
                );
            }
            });

            alert ("Deleted")

      } 
    
  return (
    <div>
      <Container className='table-container'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Desccription</th>
                    <th>Rating</th>
                    <th>Created at:</th>
                    <th>Product Name</th>
                    <th>User name</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(reviews) && reviews.map(item => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.description}</td>
                        <td>{item.rating}</td>
                        <td>{item.created_at}</td>
                        <td>{item.product && item.product.name}</td>
                        <td>{item.user && item.user.name}</td>
                        <td><Button variant='danger' onClick={() => handleDelete(item.id)}>Delete</Button></td>
                        {/* <td><Button variant='success'><Link to={`/reviews/${item.id}/edit`} className="link">Update Review</Link></Button></td>  */}
                        {/* Maybe we can update the review? */}
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default ReviewTable