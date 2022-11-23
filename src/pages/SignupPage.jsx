import React from "react";
import SignupForm from "../components/SignupForm";
import '../css/Signup.css';
import NavbarHotel from "../components/Navbar";
import { useEffect } from "react";


const SignupPage =() =>{
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
    return(
        <div>
            <div className="bg-roomservice-signup">
                <div className="bg-roomfade-signup">
                    <NavbarHotel />
                    <div className="Form-SignupPage">
                        < SignupForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage