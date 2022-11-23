import React, { useState} from "react";
import '../css/ProfileAddressBox.css'


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