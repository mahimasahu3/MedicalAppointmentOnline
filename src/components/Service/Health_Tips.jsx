function Healthtips(){
    const box_div={
        padding:"20px",
        marginTop: "25px",
        marginBottom:"25px",
        marginLeft:"300px", 
        marginRight:"300px",       
        borderRadius:"5px",
        backgroundColor:"#f0f0f0"
    }
    return(
        <div>
            <div>
                <h3 style={{textAlign:"center"}}>Health Tips and Guidance</h3>
            </div>
            
                <div style={box_div}>
                    <h5>Stayed Hydrated</h5>
                    <p>Drink plenty of water throughout the day to keep your body hydrated and maintain optimal bodily functions. Water helps with digestion, circulation, temperature regulation, and more.</p>
                </div>
                <div style={box_div}>
                    <h5>Eat a Balanced Diet</h5>
                    <p>Consume a variety of nutrient-rich foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. A balanced diet provides essential nutrients and helps maintain overall health.</p>
                </div>
                
                <div style={box_div}>
                    <h5>Get Adequate Sleep</h5>
                    <p>Prioritize quality sleep to rejuvenate your body and mind. Most adults require 7-9 hours of sleep per night. Establish a consistent sleep schedule, create a relaxing sleep environment, and practice good sleep hygiene.</p>
                </div>
                <div style={box_div}>
                    <h5>Exercise Regularly</h5>
                    <p>Engage in regular physical activity to boost cardiovascular health, strengthen muscles, improve flexibility, manage weight, and enhance overall well-being. Aim for at least 150 minutes of moderate- intensity exercise per week.</p>
                </div>
            
        </div>
    );
};

export default Healthtips;