import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Container, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login(){
    //   const[error, setError]= useState(null);
    const [users, setUsers]= useState([])
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const history = useHistory();
    
      
        useEffect(() => {
            fetch("https://homy-6bvz.onrender.com/users")
                .then((r) => r.json())
                .then((data) => {
                    console.log(data)
                    setUsers(data)
                    });
            }, []);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = {
                username,
                password,
            };
            for(let user in users){
                if (formData.name === user.name & formData.password === user.password){
                    history.push('https://homy-6bvz.onrender.com')
                }
                else {
                    window.prompt('User does not exist or either the user name or password are incorrect')
                    history.push('https://homy-6bvz.onrender.com/signup')
                }
            }
        };





    return (
        <div>
            <Container className='mb-5'>
                <h3 className="text-center mt-3 mb-4">Create review</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control name='username' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder="username" /><br/>
                        </Col>
                        <Col>
                            <Form.Control name='password' value={password} onChange={(e) => setPassword(e.target.value)} type='text' placeholder="passwword" /><br/>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
      )
    
}

export default Login 


