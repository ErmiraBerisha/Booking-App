import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{color: "#ffff", marginRight: "2rem"}}/></h4>
                    <h4><p> 21000 Rahovec</p>
                    <p>Kosovo</p></h4>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#ffff" ,marginRight: "2rem"}}/>
                    383-44-123-321</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#ffff" , marginRight: "2rem"}}/>
                    info@travels.com </h4>
                </div>
               
            </div>

            <div className="right">
                <h4>Visit us</h4>
                <p>
                    Contact us via our email or social media and 
                    plan your next visit in our city.
                </p>
                <div className="social">
                    <FaFacebook
                        size={30}
                        style={{color: "#ffff", marginRight:"1rem"}}
                    
                    />
                     <FaInstagram
                        size={30}
                        style={{color: "#ffff", marginRight:"1rem"}}
                    
                    />

                </div>
            </div>

        </div>

    </div>
  )
}

export default Footer