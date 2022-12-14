import './App.css';
import airbnblogo from './booking.png'
import React, { useState } from 'react';
import Home from './components/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [hide, sethide] = useState(true);
  const [show, setshow] = useState(true);

  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");


    let validation = "Please complete the form fields";
    let emailVal = "Email must include @ .com TryAgain!";
    let passVal = "Password char must not be less than 8";

    if (!input1.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
      
    }else {
      emailValidate();
    }

    function emailValidate() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      }else {
        console.log("input1 validated");
        status.classList.remove("active")
        input1.classList.add("valid");
      }
      
    }
    if (!input2.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
      
    } else {
      passwordValidate();
    }
    function passwordValidate() {

      if (input2.value.length < 8) {
        console.warn('password char must contain more than 7 characters');
        status.classList.add("active");
        status.innerHTML = `${passVal}`;
      }else {
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
      }
      
    }
    if(input1.classList.contains("valid") && input2.classList.contains("valid")) {
      console.log('submited');

      setTimeout(() => {
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
  
        sethide(!hide + wrapper.classList.add("hide"));
        setshow(!show + container.classList.add("show"));
        

      }, 1000)

    }

  }
  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    let status = document.querySelector(".status");
    let validation = "Please fill the fields";
    let emailVal = "Email must include @";
    if (!input1.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
      
    }else {
      emailValidate();
    }
    function emailValidate(params) {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      }else {
        console.log("input1 validated");
        status.classList.remove("active")
      }
    }

  }
  const handlePassword = () => {
    const input2 = document.querySelector("#input2");
    let status = document.querySelector(".status");

    let validation = "Please complete the form fields";
    let passVal = "Password char must not be less than 8";

    if (!input2.value) {
      console.warn("validation error");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
      
    } else {
      passwordValidate();
    }
    function passwordValidate() {

      if (input2.value.Length <8) {
        console.warn('password char must contain more than 7 characters');
        status.classList.add("active");
        status.innerHTML = `${passVal}`
      }else {
        console.log('input2 validated');
        status.classList.remove("active");
      }
      
    }
  }


  return (
    <div className="App">
      <Home />
      <div className="wrapper">
        <div className="content">
          <div className="logo">
              <img src={airbnblogo} alt="airbnblogo" />
          </div>
          <div className="register">
            <span> Register to All About Booking today</span>
          </div>
          <div className='form'>
            <div className='status'>test</div>
            <form action='#' onSubmit={validateForm}>
              <div className='eInput'>
                <FontAwesomeIcon className='icon' icon={faUser} />
                <input type="text" id='input1' placeholder='Enter email adress' onKeyUp={handleMail}/>
              </div>
              <div className='eInput'>
                <FontAwesomeIcon className='icon' icon={faLock} />
                <input type="password" id='input2' placeholder='Enter password' onKeyUp={handlePassword}/>
              </div>
              <div className='submit'>
                <button type="submit">Submit</button>

              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
