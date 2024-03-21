import React from 'react'
// import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Entry() {
    
  return (
    <div className = 'entry-page'>
        <img className = 'entry-image' src='https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg' alt='Customer care'/>
        <div className = 'entry-text'>
            <h1>Welcome to ShopMate</h1>
            <br></br>
            <h3>
            Discover the convenience of shopping online and explore a variety of shops from the comfort of your home.
            </h3>
            <br></br>
            <p>
            If you're a shop owner, join our marketplace and reach a wider audience by creating your own shop!
            </p>
            <br></br>
            <button className='entry-login-btn'><Link to={`/login`} className="link">Login</Link></button>
            <br></br>
            <br></br>
            <em>Don't have an account ? <span ><Link to={`/register`} className="span-link">Sign up</Link></span> </em>
        </div>

    </div>
  )
}

export default Entry