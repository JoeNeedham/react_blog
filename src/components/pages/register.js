import React from 'react';
import '../../stylesheets/register.css'

export default function Register() {
    return (
    <div className="register">
        <span className="registerTitle">register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className="registerInput" type="text" placeholder="Enter your username..." />
            <label>Email</label>
            <input className="registerInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="registerInput" type="password" placeholder="Enter your password..." />
            <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
    );
}
