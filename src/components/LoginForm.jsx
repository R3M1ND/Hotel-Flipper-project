import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/LoginFormBox.css'
import logo from "../assets/LOGO-hotelflipper.PNG"
import usericon from "../assets/user.svg"
import password from "../assets/password.svg"

const LoginForm = () => {
    const[personal,setPersonal] = useState({username:"",password:""});
    const[noti,setNoti] = useState("");

    const Login = personal=>{
        console.log(personal);
        
        if(personal.username==""){
            setNoti("กรุณากรอกอีเมลผู้ใช้งาน")
        }
        else if(personal.username!=""&&personal.password==""){
            setNoti("กรุณากรอกรหัสผ่าน")
        }
        else {
            console.log("Invalid User");
            setNoti("อีเมลผู้ใช้งานหรือรหัสผ่านผิด");
        }
    }

    const submitHandler = e=>{
        e.preventDefault();
        Login(personal);
    }

    const handleChange = e =>{
        const{name,value} = e.target
        setPersonal({...personal,[name]:value})
    }



    return(
        <div className="BoxFormLogin">
            <div>
                <img src={logo} alt="logo" className="logo-login"/>
                <div className="Head-Login">เข้าสู่ระบบ</div>
                <Form className="Form-Login" action="#" onSubmit={submitHandler}>
                {/* <Form action="#"> */}
                    <div className="Scale-input-Login">
                        <div className="input-email-box">
                            <img src={usericon} alt="usericon" className="usericon" />
                            <input type="text" placeholder="Email" name="username" id="username" onChange={handleChange}/>
                            {/* user_account_profile_icon */}
                        </div>
                        <div className="input-password-box">
                            <img src={password} alt="usericon" className="usericon"/>
                            <input type="password" placeholder="Password" name="password" id="password" onChange={handleChange}/>
                        </div>

                        <Link to='/ForgetPassword'>
                            <botton>
                                <p className="forgetpass">
                                    ลืมรหัสผ่านใช่ไหม?
                                </p>
                            </botton>
                        </Link>

                        <button type="submit" className="bttn-Login">เข้าสู่ระบบ Hotel Flipper</button>
                        <Link to="/SignupPage"><button type="submit" className="bttn-gotoSignup">ลงทะเบียนสมาชิกใหม่</button></Link>
                    </div>
                </Form>
                
                {(noti != "")?(<div className="Login_ERROR">{noti}</div>):""}
                
            </div>
        </div>
    )
}

export default LoginForm