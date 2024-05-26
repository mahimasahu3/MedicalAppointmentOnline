
import Image1 from '../assets/Instant_Consultation.jpg';
import Image2 from '../assets/Book_Appointment.jpg';
import Image3 from '../assets/Self_Checkup.jpg';
import Image4 from '../assets/Health_Tips.jpg';

import { useNavigate } from 'react-router-dom';

function Services(){
    
    const img_div={
        height:"250px",
        width:"250px"
    }

    const parent_div= {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft:"200px",
        paddingRight:"200px",
        
    }
    const child_div ={
        margin: "5px",        
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        textAlign: "center",
        borderRadius:"10px"
    }

    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/healthtips');
    };
    const handleBookAppointmentClick = () => {
        navigate('/bookappointment');
    };
    return(
        <div>
            
            <h4 style={{textAlign:"center"}}>Best Services</h4>
            <p style={{textAlign:"center"}}>Love yourself enough to live a healthy lifestyle.</p>
            
            <div style={parent_div}>
            <div style={child_div} >
                <img src={Image1} alt="Instant Consultation" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Instant Consultation</p>
            </div>
            <div style={child_div} onClick={handleBookAppointmentClick}>
                <img src={Image2} alt="Book Appointment" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Book Appointment</p>
            </div>
            <div style={child_div} >
                <img src={Image3} alt="Self Checkup" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Self Checkup</p>
            </div>
            <div style={child_div} onClick={handleGetStartedClick}>
                <img src={Image4} alt="Health Tips and Guidance" style={img_div}/>
                <p style={{fontWeight:"bold"}}>Health Tips and Guidance</p>
            </div>
            </div>
        </div>
    );
};

export default Services;