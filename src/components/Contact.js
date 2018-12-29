import React from "react";
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>INSERT DYNAMIC TEXT HERE</p>
            <Link to="/">
                <button>back</button> 
            </Link>
        </div>
    );
}

export default Contact;