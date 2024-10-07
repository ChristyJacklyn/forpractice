import React from "react";

function DesignCss() {
    return(
        <div className="container">
            <h2 className="headername">
            </h2>
            <div className="imageholder">
                <img src="src/assets/profilepic.jpeg" alt="profilepic" className="profileimage"/>
                <p className="mydescription"><style>@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Dots:wght@400..700&display=swap');</style>
                <h3>I am Jacklyn.</h3><h4>A Web Devoloper & Constant Learner</h4>Every Life has something unique in it. In versite journey of life has made to shift the gear smoothly. I am a Constant learner & change with the flow.</p>
            </div>

            <div className="maincontainer">
                <div className="cardcontainer">
                    <div className='card'>My First Project with css property!!</div>
                    <div className='card'>My Second Project with css property!!</div>
                    <div className='card'>My Second Project with css property!!</div>
                </div>
            </div>

            <div className="footer">
                    <p className="footerpara">Connect with me:</p>
                    <img src="" alt="" />
            </div>
        </div>
       
    );
}

export default DesignCss;