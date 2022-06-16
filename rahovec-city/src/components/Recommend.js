import "./RecommendStyles.css";

import React from 'react'

import Destination1 from "../assets/sahatkulla.jpg"
import Destination2 from "../assets/stonecastle.jpg"
import Destination3 from "../assets/drini.jpg"
import Destination4 from "../assets/bodrumi.jpg"
import Destination5 from "../assets/bjeshka.jpg"
import Destination6 from "../assets/nqosh.jpg"
const Recommend = () => {
  return (
   <div className="pg2">
        <div><h3>Recommended Destinations</h3></div>
        <div className="destinations">
            <div className="destination">
                <img className="img1" 
                src={Destination1} alt={""} />
                <div className="content">
                    <h5>SahatKulla</h5>
                    <p>SahatKulla was built in 1815 by Mahmut Pasha. This old monument is located near the centre of the city.</p>
                </div>
            </div>
            <div className="destination">
                <img className="img1" 
                src={Destination2} alt={""}/>
                <div className="content">
                    <h5>Stone Castle Winery</h5>
                    <p>Stone Castle Vineyards And Winery is a hidden gem in the heart of Rahovec Valley. Stone Castle offers wine tastings and guided tours by appointment.</p>
                </div>
            </div>
            <div className="destination">
                <img className="img2" 
                src={Destination4} alt={""}/>
                <div className="content">
                    <h5>Bodrumi i Vjetër</h5>
                    <p>Old Cellar (Bodrumi i Vjeter) Rahovec was established in 1953. You can visit this winery and see the production process as well as taste the produced wine. </p>
                </div>
            </div>
            <div className="destination">
                <img className="img2" 
                src={Destination3} alt={""}/>
                <div className="content">
                    <h5>White Drin Canyon</h5>
                    <p>This is a small canyon that has the Fshajt Bridge over it. Close to the bridge are two rocks; the "Eagle Rock" and "Skanderbeg Rock", which features an engraving of 15th-century Albanian nobleman George Kastrioti Skanderbeg.</p>
                </div>
            </div>
            
            <div className="destination">
                <img className="img2" 
                src={Destination5} alt={""}/>
                <div className="content">
                    <h5>Bjeshka Restaurant</h5>
                    <p>Bjeshka Restaurant is a beautiful restaurant that serves traditional food. The restaurant is located in the Rahovec-Malisheve road, in a 500 m altitude.</p>
                </div>
            </div>
            <div className="destination">
                <img className="img2" 
                src={Destination6} alt={""}/>
                <div className="content">
                    <h5>N'Qosh Bar</h5>
                    <p>N'Qosh is a warm and welcoming bar with great coctails and good music. The location is also very convenient within a short distance from the city park and stadium.</p>
                </div>
            </div>
            
        </div>

   </div>
  )
}

export default Recommend
     
