import React, { useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import '../css/EditProfileForm.css'
import usericon from "../assets/user-b.svg"
import password from "../assets/password-b.svg"
import axios from "axios"

const EditProfileForm = () => {

    const letgoProfile = useNavigate();
    const[Hoteldata, setHoteldata] = useState({hotelname:"",tel:""})
    const[HotelAddr, setHotelAddr] = useState({hotelno:"",soi:"",road:"",subDistrict:"",district:"",province:"",zipcode:""})
    
    const[error,setError] = useState("")
    const[isSubmit,setIsSubmit] = useState(false)
    const[noti,setNoti] = useState("")

    const handleChange = (e) =>{
        const{name,value} = e.target
        setHoteldata({...Hoteldata,[name]:value})
        setHotelAddr({...HotelAddr,[name]:value}) }
    const HotelUpdate = Hoteldata=>{
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        if(Hoteldata.hotelname==""){
            setNoti("กรุณากรอกชื่อโรงแรม (ไม่ต้องการเปลี่ยนให้ใส่ชื่อเดิม)")
            }
        else if(Hoteldata.tel==""){
            setNoti("กรุณากรอกเบอร์โทรศัพท์ (ไม่ต้องการเปลี่ยนให้ใส่เบอร์เดิม)")
            }
    }

    const AddrUpdate = HotelAddr =>{
        const regexPostcode = /^([1-9]\d{4}|\d[1-9]\d{3}|\d{2}[1-9]\d{2}|\d{3}[1-9]\d|\d{4}[1-9])$/
        
        console.log(HotelAddr)

        if (HotelAddr.zipcode==""){
            setNoti("กรุณากรอกรหัสไปรษณีย์")
        }
        else if (!regexPostcode.test(HotelAddr.zipcode)) {
            setNoti("กรุณากรอกรหัสไปรษณีย์ที่ถูกต้อง")
        }
    }

    const editpf =async(e) =>{
        const data = {
            h_id: localStorage.getItem("h_id"),
            h_name: Hoteldata.hotelname,
            tel: Hoteldata.tel,
            address: HotelAddr.hotelno,
            alley: HotelAddr.soi,
            street: HotelAddr.road,
            subdistrict: HotelAddr.subDistrict,
            district: HotelAddr.district,
            province: HotelAddr.province,
            postcode: HotelAddr.zipcode
        }

        console.log(data)
        const res = await axios.put('http://localhost:3004/hotel/update',data)
        .then(res=>{
            console.log(res.data.statuscode)
            if (res.data.statuscode===200) {
                alert('คุณได้ทำการแก้ไขเรียบร้อย')
                letgoProfile('/ProfilePage')}

            else {alert('มีบางอย่างผิดพลาด กรุณาลองใหม่')}      
        })
        .catch(err=>{
            if(err.response.status===403){
                alert('คุณทำการแก้ไขไม่สำเร็จ')
            }
            console.log('>>>',err)
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        HotelUpdate(Hoteldata);
        AddrUpdate(HotelAddr);
        editpf()
        setIsSubmit(true)
    }

    useEffect(()=>{
        console.log(error)
        // console.log(personal)
        if(Object.keys(error).lenght=== 0 && isSubmit){
            console.log(Hoteldata);  
        }
    },[error]);

    const validate=(values)=>{
        const errors ={};
        const regexTelnum = /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm
        const regexPostcode = /^([1-9]\d{4}|\d[1-9]\d{3}|\d{2}[1-9]\d{2}|\d{3}[1-9]\d|\d{4}[1-9])$/

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
                <div className="Head-Edit">แก้ไขข้อมูลโรงแรม</div>
                <div className="Line-HotelProfile-Edit"></div>

                <Form className="Form-Edit" onSubmit={submitHandler} >
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
                            <input type="text" placeholder="แขวง/ตำบล*" name="subDistrict" id="subDistrict" value={HotelAddr.subDistrict} onChange={handleChange} required/>
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
                            <input type="text" placeholder="รหัสไปรษณีย์*" name="zipcode" id="zipcode" value={HotelAddr.zipcode} onChange={handleChange}/> 
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