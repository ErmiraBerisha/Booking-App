
import React from 'react';
import Carousel from 'react-elastic-carousel';
import one from "../assets/vineyard.jpg"
import two from "../assets/hardhfest.jpg"
import three from "../assets/ura2.jpg"
import four from "../assets/anadrinia.jpg"
import five from "../assets/stadiumi.jpg"
import six from "../assets/basket.jpg"

import Itemstyle from "./Itemstyle.css"

const breakPoints= [
    {width: 1, itemsToShow: 1},
    {width: 680, itemsToShow: 2},
    {width: 800, itemsToShow: 2},
    {width: 1000, itemsToShow: 3},

    {width: 1300, itemsToShow: 3},

]

const imgslider = () => {
  return (
    <>
        <h1 style={{textAlign:"center"}}>Explore different events</h1>
        <div className="Carousel">
            <Carousel breakPoints={breakPoints}>
                <div className='slider-images'>
                   <div>
                        <img src={one} alt={""}/>
                        <p>Explore Vineyards</p>
                    </div>
                </div>
                <div className='slider-images'>
                    <div>
                        <img src={two} alt={""}/>
                        <p>Attend Hardhfest Festival</p>
                    </div>
                </div>
                <div className='slider-images'>
                    <div>
                        <img src={three} alt={""}/>
                        <p>Attend Annual Bridge Jumping</p>
                    </div>
                </div>
                <div className='slider-images'>
                    <div>
                        <img src={four} alt={""}/>
                        <p>Attend "Anadrinia Jehon" folklore festival</p>
                    </div>
                </div>
                <div className='slider-images'>
                    <div>
                        <img src={five} alt={""}/>
                        <p>Visit the Football Stadium</p>
                    </div>
                </div>
                <div className='slider-images'>
                    <div>
                        <img src={six} alt={""}/>
                        <p>Watch Rahoveci Basketball team</p>
                    </div>
                </div>
            </Carousel>
            

        </div>
    </>
  )
}

export default imgslider