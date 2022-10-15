import React from 'react'
import { useState } from 'react'
import './register.css'
function Register(props) {
  console.log(props.closepop)
  const [termsandcondition, settermsandcondition]= useState("terms-false")
  const getbuttonClass=()=>{
    if(termsandcondition==="terms-false"){
      settermsandcondition("terms-true")
      return 
    }
    settermsandcondition("terms-false")
    return 
  }
  return (
    <>
    <div className='regisBack'>
        <form id='regisForm'>
          <button id="close" onClick={() => props.closepop(false)}>X</button>
          <div><img src="./images/logo2.jpg" alt=""  className='spotifylogo'/><p>Sotify</p></div>

            <div className='userInput'>
                <input type='text' placeholder='UserName' required></input>

            </div>
            <div className='passInput'>
                <input  type='password' placeholder='Password'></input>

            </div>
            <div className='emailInput'>
                <input type='text' placeholder='Email'></input>
            </div>
            <div className='dobInput'>
                <input type='text' placeholder='dd/mm/yyyy' ></input>
            </div>
            <div className='userTypeInput'>
                <input type='radio' ></input>
                <input type='radio'></input>
            </div>
            <div>
              <input type="checkbox" id='checkbox-register' required onChange={()=>getbuttonClass()}/>
              <p id='Terms-register'>I agree to Terms & Condition receiving marketing and promotional materials</p>
            </div>
            <button>register</button>
        </form>
    </div>
      
    </>
  )
}

export default Register;
