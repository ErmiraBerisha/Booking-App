import React from 'react'

import "./TestimonialStyles.css"

import { FaStar} from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className='pg3'>
        <h3>Happy Visitors</h3>
        <div className='icons'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        
        <div className='testimonials'>
            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p style={{fontWeight: "bold"}}>&#8212; Adam Smith</p>
            </div>
            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p style={{fontWeight: "bold"}}>&#8212; Adam Smith</p>
            </div>
            <div className='testimonial'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p style={{fontWeight: "bold"}}>&#8212; Adam Smith</p>
            </div>
            

        </div>
    </div>
  )
}

export default Testimonials