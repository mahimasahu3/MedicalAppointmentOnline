import React from 'react';
import { useNavigate } from 'react-router-dom';
const myStyle={
    textAlign:"center",
    padding:"150px"
}
const buttonStyle={
    backgroundColor:"blue",
    color:"white",
    padding:"10px",
    borderRadius:"30px"
}


const Home = () => {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/service');
    };
    return (
        <div style={myStyle}>
            <h1 style={{fontSize:"40px",fontWeight:"bold"}}>Your Health Our Responsibilty</h1>
            <p>Welcome to the Medical Appointment Online App. Please sign up or log in to book an appointment.</p>
            
            <button style={buttonStyle} onClick={handleGetStartedClick}> Get Started</button>
            
        </div>
    );
};

export default Home;
