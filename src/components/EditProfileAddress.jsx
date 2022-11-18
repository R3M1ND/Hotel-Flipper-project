import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import '../css/ProfileAddressBox.css'
import location from "../assets/location.svg";
import axios from 'axios'

const EditProfileAddress = (props) =>{
    const {haddress} = props
    const[currentHaddress,setCurrentHaddress] = useState({
        hotelno:haddress.hotelno,
        soi:haddress.soi,
        road:haddress.road,
        subDistrict:haddress.subDistrict,
        district:haddress.district,
        province:haddress.province,
        zipcode:haddress.zipcode })

    // function putEdit() {
    //     axios
    //         .put(
    //             global_url_token.url+"/updateCustomerAccount/customer/ChangeAccountInfo/",
    //             {
    //                 hotelno: hotelnoE,
    //                 soi: soiE,
    //                 road: roadE,
    //                 subDistrict: subDistrictE,
    //                 district: districtE,
    //                 province: provinceE,
    //                 zipCode: zipcodeE 
    //             }
    //           )
        
    //           .then(function (response) {
    //             console.log(response);
    //             // console.log(data)
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //           });
    //       }
        
    //       // console.log(firstName);
    //     const onsubmit = (e) => {
    //         e.preventDefault();
    //         putEdit();
    //     };

    return(
        <div>
            <form onSubmit={onsubmit}>
                <div className="Head-HetelPF-AD">
                    ข้อมูลที่อยู่
                </div>
            </form>
        </div>
    )
}

export default EditProfileAddress;