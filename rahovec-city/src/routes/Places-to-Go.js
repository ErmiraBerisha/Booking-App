import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import Recommend from '../components/Recommend';
import Testimonials from '../components/Testimonials';



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg />
      <Recommend />
      <Testimonials />
      <Footer />
     
    </div>
  )
}

export default Home