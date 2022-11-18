import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/EditProfileForm.css'
import logo from "../assets/LOGO-hotelflipper.PNG"
import usericon from "../assets/user-b.svg"
import password from "../assets/password-b.svg"

const EditProfileForm = () => {

    const[personal,setPersonal] = useState({email:"",password:"",newpassword:""})
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

    const ProfileUpdate = personal=>{
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;

        console.log(personal) 
            
        if(personal.email==""){
            setNoti("กรุณากรอกอีเมลของท่าน")
            }
        else if(personal.password==""){
            setNoti("กรุณากรอกรหัสผ่านเดิม")
            }
        else if(personal.newpassword==""){
            setNoti("กรุณากรอกรหัสผ่านใหม่ (ไม่ต้องการเปลี่ยนให้ใส่รหัสเดิม)")
            }
        else if(!regexEmail.test(personal.email)){
            setNoti("อีเมลของท่านไม่ถูกต้อง")
            }
        else if(!regexPass.test(personal.password)&&(personal.password!="")){
            setNoti("รหัสผ่านต้องมีอย่างต่ำ 8 ตัวอักษร พิมพ์ใหญ่พิมพ์เล็กและตัวเลขอย่างต่ำ 1 ตัว")
            }
        else if(!regexPass.test(personal.newpassword)&&(personal.newpassword!="")){
            setNoti("รหัสผ่านต้องมีอย่างต่ำ 8 ตัวอักษร พิมพ์ใหญ่พิมพ์เล็กและตัวเลขอย่างต่ำ 1 ตัว")
            }
    }

    const HotelUpdate = Hoteldata=>{
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        // console.log(Hoteldata)

        if(Hoteldata.hotelname==""){
            setNoti("กรุณากรอกชื่อโรงแรม (ไม่ต้องการเปลี่ยนให้ใส่ชื่อเดิม)")
            }
        else if(Hoteldata.tel==""){
            setNoti("กรุณากรอกเบอร์โทรศัพท์ (ไม่ต้องการเปลี่ยนให้ใส่เบอร์เดิม)")
            }
        else if(!regexTelnum.test(Hoteldata.tel)){
            setNoti("เบอร์โทรศัพท์กรอกเฉพาะตัวเลขเท่านั้น (ไม่ต้องการเปลี่ยนให้ใส่เบอร์เดิม)")}
            
    }

    const AddrUpdate = HotelAddr =>{
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
        ProfileUpdate(personal);
        HotelUpdate(Hoteldata);
        AddrUpdate(HotelAddr);
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
        const regexPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,32}$/;
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        const regexPostcode = /^([1-9]\d{4}|\d[1-9]\d{3}|\d{2}[1-9]\d{2}|\d{3}[1-9]\d|\d{4}[1-9])$/

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

        if (!values.newpassword){
            errors.newpassword ="Password is required"
        }else if (values.newpassword.length < 8) {
            errors.newpassword = "Password must be more than 8 characters";
        }else if (values.newpassword.length > 32) {
            errors.newpassword = "Password cmust be less than 20 characters";
        }else if(!regexPass.test(values.newpassword)){
            errors.newpassword ="Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase"
        }

        if (!values.tel){
            errors.tel ="Telnum is required"
        }else if (!regexTelnum.test(values.tel)) {
            errors.tel = "This is not a valid telnum format!";}

        if (!values.zipcode){
            errors.zipcode ="zipcode is required"
        }else if (!regexPostcode.test(values.zipcode)) {
            errors.zipcode = "This is not a valid zipcode format!";
        }

        return errors;
    };
    
    return(
        <div className="BoxFormEdit">
            <div>
                {/* <img src={logo} alt="logo" className="logo-signup"/> */}
                <div className="Head-Edit">แก้ไขข้อมูลโรงแรม</div>
                <div className="Line-HotelProfile-Edit"></div>

                <Form className="Form-Edit" onSubmit={submitHandler} >
                    <div className="scale-one-edit">
                        <div className="one-input-edit-user">
                            <img src={usericon} alt="usericon" className="usericon"/>
                            <input className="email-login" type="text" placeholder="Email" 
                            name="email" id="email" value={personal.email} onChange={handleChange}></input>
                        </div>
                        <div className="one-input-edit-user">
                            <img src={password} alt="usericon" className="usericon"/>
                            <input className="password-login" type="text" placeholder="Password" 
                            name="password" id="password" value={personal.password} onChange={handleChange}></input>
                        </div>
                        <div className="one-input-edit-user">
                            <img src={password} alt="usericon" className="usericon"/>
                            <input className="password-login" type="text" placeholder="New Password" 
                            name="newpassword" id="newpassword" value={personal.newpassword} onChange={handleChange}></input>
                        </div>
                        </div>

                    <div className="edit-detail-hotel">
                        กรอกข้อมูลโรงแรมที่ต้องการแก้ไข
                    </div>
                    <div className="scale-one-edit">
                        <div className="one-input-edit">
                            <input type="text" placeholder="ชื่อโรงแรม*" id="hotelname" name="hotelname" value={Hoteldata.hotelname} onChange={handleChange}/> <br/>
                        </div>

                        <div className="one-input-edit">
                            <input type="text" placeholder="เบอร์โทรศัพท์*" id="tel" name="tel" value={Hoteldata.tel} onChange={handleChange}/> <br/>
                        </div>
                    </div>

                    <div className="scale-three-edit">
                        <div className="three-input-box-edit">        
                            <input type="text" placeholder="บ้านเลขที่*" name="hotelno" id="hotelno" value={HotelAddr.hotelno} onChange={handleChange} required/> 
                        </div>
                        <div className="three-input-box-edit"> 
                            <input type="text" placeholder="ซอย*" name="soi" id="soi" value={HotelAddr.soi} onChange={handleChange}/>
                        </div>
                        <div className="three-input-box-edit">
                            <input type="text" placeholder="ถนน*" name="road" id="road" value={HotelAddr.road} onChange={handleChange}/> 
                            <br/>
                        </div>
                    </div>   

                    <div className="scale-two-edit">
                        <div className="two-input-edit-dt">
                            <input type="text" placeholder="แขวน/ตำบล*" name="subDistrict" id="subDistrict" value={HotelAddr.subDistrict} onChange={handleChange} required/>
                        </div>
                        <div className="two-input-edit-dt">
                            <input type="text" placeholder="เขต/อำเภอ*" name="district" id="district" value={HotelAddr.district} onChange={handleChange} required/> 
                            <br/>
                        </div>
                    </div>
                    <div className="scale-two-edit">
                        {/* province */}
                        <div className="two-input-edit-city">
                            <input type="text" placeholder="จังหวัด*" name="province" id="province" value={HotelAddr.province} onChange={handleChange} required/> 
                        </div>
                        {/* zipcode */}
                        <div className="two-input-edit-city">
                            <input type="text" placeholder="รหัสไปรษณีย์*" name="zipcode" id="zipcode" value={HotelAddr.zipcode} onChange={handleChange} required/> 
                            <br/>
                        </div>
                    </div>

                    <div className="scale-one-edit">
                        <button type="submit" className="bttn-Edit">ยืนยันการแก้ไขข้อมูลโรงแรม</button>
                    </div>

                    <p className="goto-profile">
                        กลับไปที่หน้า -
                        <Link to="/ProfilePage">
                            <botton> ผู้ใช้งาน</botton>
                        </Link>
                    </p>
               
                </Form>
                
                {(noti != "")?(<div className="edit_ERROR">{noti}</div>):""}
            </div>
        </div>
    )
}

export default EditProfileForm 