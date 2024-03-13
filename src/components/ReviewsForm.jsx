import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Container, Button} from 'react-bootstrap';

function ReviewsForm() {

  const[loading, setLoading]= useState(false);
//   const[error, setError]= useState(null);
  const [usernameID, setUsernameID] = useState("");
  const [productID, setProductID] = useState("");
  const[users, setUsers]= useState([])
  const [products, setproducts]= useState([])
  const [description, setDescription]=useState('')
  const [rating, setRating]=useState('')

  
    useEffect(() => {
        fetch("/users")
            .then((r) => r.json())
            .then(setUsers);
        }, []);

    useEffect(() => {
        fetch("/products")
            .then((r) => r.json())
            .then(setproducts);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            username_id: parseInt(usernameID),
            product_id: parseInt(productID),
            description,
            rating,
        };
        try {
            const response = await fetch('/appointments', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setLoading(false);
        } catch (error) {
            // Handle error
            setLoading(false);
        } finally {
            window.location.reload();
        }
    };

  if  (loading){
    return <h4>Loading...</h4>
  }

  return (
    <div>
        <Container className='mb-5'>
            <h3 className="text-center mt-3 mb-4">Book Appointment</h3>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control name='description' value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder="Description" /><br/>
                        <Form.Select name='rating' value={rating} onChange={(e) => setRating(e.target.value)} aria-label="Default select example">
                            <option>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select><br/>
                    </Col>
                    <Col>
                        <Form.Select name='product_id' value={productID} onChange={(e) => setProductID(e.target.value)} aria-label="Default select example">
                        <option value="">Select product</option>
                            {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                            </option>
                            ))}
                        </Form.Select><br/>    
                        <Form.Select name='username_id' value={usernameID} onChange={(e) => setUsernameID(e.target.value)} aria-label="Default select example">
                        <option value="">Select your username</option>
                            {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                            ))}
                        </Form.Select><br/>   
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Create Review
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default ReviewsForm