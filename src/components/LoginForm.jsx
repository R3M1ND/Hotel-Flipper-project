import React, { useState} from "react";
import { Link ,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/LoginFormBox.css'
import logo from "../assets/LOGO-hotelflipper.PNG"
import usericon from "../assets/user.svg"
import password from "../assets/password.svg"
import axios from "axios";

const LoginForm = () => {
    const letgoHome = useNavigate();

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
    }

    const signin =async(e) => {
        const data = {
            email: personal.username,
            password: personal.password
        }
        console.log(data)
        const res = await axios.post('http://localhost:3004/hotel/signin',data)
        .then(res=>{
            console.log(res.data)
            if (res.data.statuscode=== 200){
                alert('คุณได้เข้าสู่ระบบเรียบร้อย')
                localStorage.setItem('h_id',res.data.hotel.h_id)
                //*** Timeout Login set ไว้ 10นาที ***
                setTimeout(() => {
                    localStorage.removeItem('h_id')
                    // console.log("ไอ้รอม")
                    letgoHome('/LoginPage')
                    alert('หมดเวลาเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่')
                }, 600000);

                //*** หากถูกต้องให้ไปที่หน้า Home ***
                letgoHome('/')}
            else {
                alert('เกิดปัญหา เข้าสู่ระบบไม่สำเร็จ')
            }
        })
        .catch(err=>{
            if(err.response.status===403){
                alert('คุณเข้าสู่ระบบไม่สำเร็จ')
            }
            console.log('>>>',err)
        })
    }

    const submitHandler = async(e)=>{
        e.preventDefault();
        Login(personal);
        signin();
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
                    <div className="Scale-input-Login">
                        <div className="input-email-box">
                            <img src={usericon} alt="usericon" className="usericon" />
                            <input type="text" placeholder="Email" name="username" id="username" onChange={handleChange}/>
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

                        <button type="submit" className="bttn-Login" onClick={submitHandler}>เข้าสู่ระบบ Hotel Flipper</button>
                        <Link to="/SignupPage"><button type="submit" className="bttn-gotoSignup">ลงทะเบียนสมาชิกใหม่</button></Link>
                    </div>
                </Form>
                
                {(noti != "")?(<div className="Login_ERROR">{noti}</div>):""}
            </div>
        </div>
    )
}

export default LoginForm