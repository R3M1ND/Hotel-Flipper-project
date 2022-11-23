import React , { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/ForgetPassword.css'
import NavbarHotel from "../components/Navbar";

const ForgetPassword = () =>{

    const[details,setDetails] = useState({email:""})
    const[error,setError] = useState("")
    const[noti,setNoti] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }
    const submitHandler = (e) =>{
            e.preventDefault();
            Reset(details);
            setError(validate(details));
            setIsSubmit(true)
        }

    useEffect(()=>{
        console.log(error)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(details);  
        }
        document.title = "Hotel Flipper"
    },[error]);    

    const Reset=details=>{
        console.log(details)
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!details.email){
            setNoti("กรุณากรอกอีเมลก่อนกดยืนยัน")
        }else if(!regexEmail.test(details.email)){
            setNoti("อีเมลของคุณไม่ถูกต้อง กรุณาป้อนใหม่อีกครั้ง")
        }else if(details.email!=""){
            setNoti("")
        }
    }
    const validate=(values)=>{
        const errors={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.email){
            errors.email ="Email is required"
        }else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        return errors;
    }
    return(
        <div className="contain-forgot-page">
            <div className="bg-img">
                <div className="bg-roomfade-forgot">
                <NavbarHotel />
                    <div className="for-Formforget">
                        <Form onSubmit={submitHandler}>
                            <div className="box-forget">
                                    <div className="forgetpass-text">ลืมรหัสผ่านใช่ไหม ?</div>
                                    <div className="sendmail-text">กรุณาป้อนอีเมลของคุณ เพื่อส่งรหัสผ่านใหม่ของคุณทางอีเมล
                                    </div>
                            <div className="group-PasswordReset">
                                <label >อีเมลของคุณ <br /></label>
                                <input className="input-email-forgot" type="text" name="email" value={details.email} onChange={handleChange} required/>
                            </div>
                            
                            <button type="submit" className="bttn-submitforget">ยืนยัน</button>
                            <Link to='/LoginPage'>
                                <button className="bttn-backtoLogin">กลับไปเข้าสู่ระบบ</button>
                            </Link>
                            {(noti != "")?(<div className="ResetPass__Noti">{noti}</div>):""}
                            </div>
                            
                        </Form>  
                    </div>  
                </div>
            </div>    
        </div>
        
    )
}

export default ForgetPassword 