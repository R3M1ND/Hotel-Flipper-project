import React, { useState,useEffect}  from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import NavbarHotel from "../components/Navbar";
import '../css/Login.css';

const LoginPage =() =>{
    return(
        
        <div  className="contain-login-page">
            <div className="bg-roomservice-login">
                <div className="bg-roomfade-login">
                    <NavbarHotel />
                    <div className="Form-LoginPage">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage