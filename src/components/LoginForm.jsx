import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/LoginForm.css'; // Import the CSS file

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div>
                <p>Are you a new member? <Link to="/signup" className="signup-link">Sign Up Here</Link></p>
            </div>
            <div>
                <label>Email:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <br /><br />
            <button type="submit" className="submit-button">Login</button><br />
            <button type="reset" className="reset-button">Reset</button>
            <br /><br /><br />
            <p>Forgot Password?</p>
        </form>
    );
};

export default LoginForm;
