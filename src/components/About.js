import React from 'react';
import aboutImg from '../images/about-img.jpeg';


const About = () => {
    return (
        <div className="container">
            <div className="row align-items-center ">
                <div className="col-md-6  ">
                    <h1 className='text-center'>WHO WE ARE?</h1>
                    <h3 className='text-warning'>We’re Creative Coworking Working Space For Sucsess</h3>
                    <p className='text-success'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quisquam optio eos
                        harum ad corporis qui porro quia incidunt! Laudantium, quasi esse? Quisquam, fuga expedita 
                        iure labore, asperiores ratione dolorem
                    </p>
                </div>
                <div className="col-md-6 d-flex ">
                    <img src={aboutImg} alt="About-img" className="img-fluid mt-3" />
                </div>
            </div>
        </div>
    );
}
export default About;