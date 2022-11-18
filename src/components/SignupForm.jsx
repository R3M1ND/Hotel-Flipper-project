import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/SignupFormBox.css'
import logo from "../assets/LOGO-hotelflipper.PNG"
import usericon from "../assets/user.svg"
import password from "../assets/password.svg"

const SignupForm = () => {

    const[personal,setPersonal] = useState({email:"",password:""})
    const[Hoteldata, setHoteldata] = useState({hotelname:"",tel:""})
    const[HotelAddr, setHotelAddr] = useState({hotelno:"",soi:"",road:"",subDistrict:"",district:"",province:"",zipcode:""})
    
    const[error,setError] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const[noti,setNoti] = useState("")

    const handleChange = (e) =>{
        const{name,value} = e.target
        setPersonal({...personal,[name]:value})
        setHoteldata({...Hoteldata,[name]:value})
        setHotelAddr({...HotelAddr,[name]:value}) }

    const Signup = personal=>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
        console.log(personal) 
            
        if(personal.email==""){
            setNoti("กรุณากรอกอีเมลของท่าน")
            }
        else if(personal.password==""){
            setNoti("กรุณากรอกรหัสผ่าน")
            }
        else if(!regexEmail.test(personal.email)){
            setNoti("อีเมลของท่านไม่ถูกต้อง")
            }
        else if(!regexPass.test(personal.password)&&(personal.password!="")){
            setNoti("รหัสผ่านต้องมีอย่างต่ำ 8 ตัวอักษร พิมพ์ใหญ่พิมพ์เล็กและตัวเลขอย่างต่ำ 1 ตัว")
            }
    }

    const HotelSignup = Hoteldata=>{
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        // console.log(Hoteldata)

        if(Hoteldata.hotelname==""){
            setNoti("กรุณากรอกชื่อโรงแรม")
            }
        else if(Hoteldata.tel==""){
            setNoti("กรุณากรอกเบอร์โทรศัพท์")
            }
        else if(!regexTelnum.test(Hoteldata.tel)){
            setNoti("เบอร์โทรศัพท์กรอกเฉพาะตัวเลขเท่านั้น")}
            
    }

    const AddrSignup = HotelAddr =>{
        const regexPostcode = /^([1-9]\d{4}|\d[1-9]\d{3}|\d{2}[1-9]\d{2}|\d{3}[1-9]\d|\d{4}[1-9])$/
        
        console.log(HotelAddr)

        if (HotelAddr.zipcode=""){
            setNoti("กรุณากรอกรหัสไปรษณีย์")
        }
        else if (!regexPostcode.test(HotelAddr.zipcode)) {
            setNoti("กรุณากรอกรหัสไปรษณีย์ที่ถูกต้อง")
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        Signup(personal);
        HotelSignup(Hoteldata);
        AddrSignup(HotelAddr);
        setError(validate(personal));
        setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(error)
        console.log(personal)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(personal);  
        }
    },[error]);

    const validate=(values)=>{
        const errors ={};
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        const regexPostcode = /^([1-9]\d{4}|\d[1-9]\d{3}|\d{2}[1-9]\d{2}|\d{3}[1-9]\d|\d{4}[1-9])$/
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm

        if (!values.email){
            errors.email ="Email is required"
        }else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.password){
            errors.password ="Password is required"
        }else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }else if (values.password.length > 32) {
            errors.password = "Password cmust be less than 20 characters";
        }else if(!regexPass.test(values.password)){
            errors.password ="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
        }

        if (!values.zipcode){
            errors.zipcode ="zipcode is required"
        }else if (!regexPostcode.test(values.zipcode)) {
            errors.zipcode = "This is not a valid zipcode format!";
        }

        if (!values.tel){
            errors.tel ="Telnum is required"
        }else if (!regexTelnum.test(values.tel)) {
            errors.tel = "This is not a valid telnum format!";}

        return errors;
    };
    
    return(
        <div className="BoxFormSignup">
            <div>
                <img src={logo} alt="logo" className="logo-signup"/>
                <div className="Head-Signup">ลงทะเบียนสมาชิกใหม่</div>

                <Form className="Form-Signup" onSubmit={submitHandler} >
                    <div className="scale-one-box-user">
                        <div className="one-input-box-user">
                            <img src={usericon} alt="usericon" className="usericon"/>
                            <input className="email-login" type="text" placeholder="Email" 
                            name="email" id="email" value={personal.email} onChange={handleChange}></input>
                        </div>
                        <div className="one-input-box-user">
                            <img src={password} alt="usericon" className="usericon"/>
                            <input className="password-login" type="password" placeholder="Password" 
                            name="password" id="password" value={personal.password} onChange={handleChange}></input>
                        </div>
                    </div>

                    <div className="write-detail-hotel">
                        กรอกข้อมูลโรงแรมเพื่อใช้บริการ Hotel Flipper
                    </div>
                    <div className="scale-one-box-user">
                        <div className="one-input-box">
                            <input type="text" placeholder="ชื่อโรงแรม*" id="hotelname" name="hotelname" value={Hoteldata.hotelname} onChange={handleChange}/> <br/>
                        </div>

                        <div className="one-input-box">
                            <input type="text" placeholder="เบอร์โทรศัพท์*" id="tel" name="tel" value={Hoteldata.tel} onChange={handleChange}/> <br/>
                        </div>
                    </div>

                    <div className="scale-three-box-user">
                        <div className="three-input-box-addr">
                        
                            <input type="text" placeholder="บ้านเลขที่*" name="hotelno" id="hotelno" value={HotelAddr.hotelno} onChange={handleChange} required/> 
                        </div>
                        <div className="three-input-box-addr"> 
                            <input type="text" placeholder="ซอย*" name="soi" id="soi" value={HotelAddr.soi} onChange={handleChange}/>
                        </div>
                        <div className="three-input-box-addr">
                            <input type="text" placeholder="ถนน*" name="road" id="road" value={HotelAddr.road} onChange={handleChange}/> 
                            <br/>
                        </div>
                    </div>
                    
                    <div className="scale-two-box-user">
                        <div className="two-input-box-dt">
                            <input type="text" placeholder="แขวน/ตำบล*" name="subDistrict" id="subDistrict" value={HotelAddr.subDistrict} onChange={handleChange} required/>
                        </div>
                        <div className="two-input-box-dt">
                            <input type="text" placeholder="เขต/อำเภอ*" name="district" id="district" value={HotelAddr.district} onChange={handleChange} required/> 
                            <br/>
                        </div>
                        </div>
                    <div className="scale-two-box-user">
                        {/* province */}
                        <div className="two-input-box-city">
                            <input type="text" placeholder="จังหวัด*" name="province" id="province" value={HotelAddr.province} onChange={handleChange} required/> 
                        </div>
                        {/* zipcode */}
                        <div className="two-input-box-city">
                            <input type="text" placeholder="รหัสไปรษณีย์*" name="zipcode" id="zipcode" value={HotelAddr.zipcode} onChange={handleChange} required/> 
                            <br/>
                        </div>
                    </div>
                
                    <div className="scale-one-box-user">
                        <button type="submit" className="bttn-Signup">ลงทะเบียน Hotel Flipper</button>
                    </div>

                    <p className="goto-login">
                        มีบัญชีอยู่แล้ว -
                        <Link to="/LoginPage">
                            <botton> เข้าสู่ระบบ</botton>
                        </Link>
                    </p>
               
                </Form>
                
                {(noti != "")?(<div className="Register_ERROR">{noti}</div>):""}
            </div>
        </div>
    )
}

export default SignupForm