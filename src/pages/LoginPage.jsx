import React, { useEffect}  from "react";
import LoginForm from "../components/LoginForm";
import NavbarHotel from "../components/Navbar";
import '../css/Login.css';

const LoginPage =() =>{
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
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