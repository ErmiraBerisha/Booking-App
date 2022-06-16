import "./Contactstyle.css";

import React from 'react'

const Contact = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>E-mail</label>
        <input type="email"></input>
        <label>Select Dates</label>
        <input type="date"></input>
        <label>Message</label>
       <textarea rows="6" placeholder="Type your message here"></textarea>
       <button className="btn">Submit</button>

      </form>

    </div>
  )
}

export default Contact