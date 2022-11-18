import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../css/ProfileDetailBox.css'
import axios from 'axios'

const ProfileDetail  = (props) =>{
    const {hdetail} = props
    const[currentHdetail,setCurrentHdetail] = useState({
        email:hdetail.email,
        password:hdetail.password,
        hotelname:hdetail.hotelname,
        tel:hdetail.tel })

    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
                // setServiceName(res.data)
                // setServiceScope(res.data)
                // setServiceCondition(res.data)
                // setServiceList(res.data)
            setCurrentHdetail(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
        
    return(
        <div>
            <div className="Box-HotelProfile-Detail">
                    
                    <div className="Head-HetelPF-DT">
                        ข้อมูลโรงแรมของท่าน
                    </div>
                    <div className="Line-HotelProfile-Detail"></div>
                    <div className="Hotel-DT">
                        <div className="Hotel-Name">
                            ชื่อโรงแรม
                        </div>
                        <div className="Hotel-Name-DT">
                            {/* โรงแรมซอฟต์แวร์อาร์คิเทกเจอร์นามสมมติ */}
                            {currentHdetail.hotelname}
                        </div>
                        <div className="Hotel-Email">
                            อีเมล
                        </div>
                        <div className="Hotel-Email-DT">
                            {/* softwareacrch_hotel@gmail.com */}
                            {currentHdetail.email}
                        </div>
                        <div className="Hotel-Tel">
                            เบอร์โทรศัพท์
                        </div>
                        <div className="Hotel-Tel-DT">
                            {/* 02 123 4567 */}
                            {currentHdetail.tel}
                        </div>
                    </div>
                    {/* <div className="Line-HotelDT-deco"></div>
                    <button className="bttn-edit-HetelDT">
                        แก้ไขข้อมูลโรงแรม
                    </button> */}
                    
                </div>
        </div>
    )
}

export default ProfileDetail