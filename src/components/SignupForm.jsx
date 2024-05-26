import React, { useState } from 'react';
import '../style/SignUpForm.css'; // Import the CSS file

const SignUpForm = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const handleReset = () => {
        setRole('');
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <label>Role</label><br />
                <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
                    <option value="">Select Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
                <label>Name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="input-field" />
                
                <label>Phone</label><br />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="input-field" />
                
                <label>Email</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input-field" />
                
                <label>Password</label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="input-field" />
                
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" onClick={handleReset} className="reset-button">Reset</button>
            </form>
        </div>
    );
};

export default SignUpForm;
