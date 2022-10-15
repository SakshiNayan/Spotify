import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/header';
import Register from '../Register/register';
import axios from 'axios';
import './login.css';
function LoginPg() {
    const navigate = useNavigate()
    const [regisPop, setRegisPop] = useState(false);
    const [show , setshow]= useState(false)
    // const ProceedRegister=()=>{
    //     setRegisPop(prevState =>({...prevState, regisPop:true}))
    // }
    const [login, setLogin]=useState({"userName":"", "password":""})
    const handleLogin=(e)=>{
        e.preventDefault()            //meaning that the default action that belongs to the event will not occur
        console.log(login)
        if(login.userName ==="" && login.password ===""){
            alert("User and password are requied")
        }
        else{
            axios.post("http://localhost:3001/user/login",login).then((data)=>{
                localStorage.setItem("authorization", data.login.Authtoken)
                localStorage.setItem("UserName", data.login.userName)
                navigate("/dashboard")

            }).catch((err)=>{
                setshow(!show)
                setTimeout(()=>{
                    setshow(!setshow)
                },2000)
                console.log(err)
            })
            setLogin({userName:"", password:""})
        }
    }
    const handleInput=(e,id)=>{
        setLogin({...login,[id]: e.target.value})
    }
  return (
    <>
    <Header/>
    <div id='coverPg'>
        <img src="./images/cover2.jpg" alt=""  className='coverImg'/>
        <div id='content-area'>
            <div className='login-area'>
                <div><img src="./images/logotag.jpg" alt="" className='logo'/></div>
                <div id='userLogin'>
                    <form className='login-form'>
                        
                        <h2 style={{color:"grey"}} className="loginhead">LOGIN</h2>
                        <div className='input-field'>
                            <label className='lable'>User Name</label>
                            <div><input  className='input' type="text" onChange={(e)=>handleInput(e,"userName")}  required></input></div>
                            
                            <div className='signin-blueline' ></div>

                        </div>
                        <div className='input-field'>
                            <label className='lable'>Password</label>
                            <div><input  type="password" onChange={(e)=>handleInput(e,"password")} required></input>
                            <img src='./images/padlock.svg' alt='padlock' style={{width: "20px", height: "20px"}} className="padlock"/>
                            </div>
                            
                            <div className='signin-blueline' ></div>
                        </div>
                        <p className='Forgot-password'>Forgot Password?</p>
                        <div id="login-b"><button   id="Button-signin" onSubmit={()=>{handleLogin()}}>SIGN IN</button></div>
                        
                    </form>
                </div>
                <div className='accountText'>___DON'T HAVE ACCOUNT___</div>
                <div>
                    <button id="regis-button" onClick={()=> setRegisPop(true)}>REGISTER</button>
                </div>
            </div>
            <div className='quotes-area'>
                <div>
                    <p className='para'>Get the right music,<br></br>right now</p>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
    {regisPop && <Register closepop ={setRegisPop}/>}
    </>
  )
}

export default LoginPg
