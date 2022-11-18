import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import '../css/ProfileAddressBox.css'
import location from "../assets/location.svg";
import axios from 'axios'


const ProfileAddress = (props) =>{
    const {haddress} = props
    const[currentHaddress,setCurrentHaddress] = useState({
        hotelno:haddress.hotelno,
        soi:haddress.soi,
        road:haddress.road,
        subDistrict:haddress.subDistrict,
        district:haddress.district,
        province:haddress.province,
        zipcode:haddress.zipcode })

    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
                
            setCurrentHaddress(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return(
        <div>
            <div className="Box-HotelProfile-Addr">
                    <div className="Head-HetelPF-AD">
                        ข้อมูลที่อยู่
                    </div>
                    <div className="Line-HotelProfile-Detail"></div>
                    <div className="Box-location-hotel">
                        <img src={location} alt="#" height = {40}/>
                        <div className="Hotel-Location-AD">
                            {currentHaddress.hotelno},&nbsp;
                             {currentHaddress.soi},&nbsp; 
                             {currentHaddress.road},&nbsp;
                             {currentHaddress.subDistrict},&nbsp;
                             {currentHaddress.district},&nbsp;
                             {currentHaddress.province},&nbsp; 
                             {currentHaddress.zipcode}
                        </div>
                    </div>
                    <div className="for-bttn-edit-HotelAD">
                        {/* <div className="Line-HotelDT-deco"></div>
                   
                        <button className="bttn-edit-HetelAD">
                        แก้ไขข้อมูลที่อยู่
                        </button> */}
                    </div>                   
            </div>

        </div>
    )
}

export default ProfileAddress