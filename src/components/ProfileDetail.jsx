import React, { useState,useEffect} from "react";
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
        detailpf()
    },[])

    const detailpf = async(e) =>{
        const res = await axios
        .get(`http://localhost:3004/hotel/${localStorage.getItem('h_id')}`)
        .then(res=>{

            console.log(res.data)
        
            setCurrentHdetail({
                email: res.data.email,
                password:  res.data.password,
                hotelname:  res.data.h_name,
                tel: res.data.tel
            })
            console.log(hdetail)
        })
        .catch(err=>{
            console.log(err)
        })

    }
        
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
                            {currentHdetail.hotelname}
                        </div>
                        <div className="Hotel-Email">
                            อีเมล
                        </div>
                        <div className="Hotel-Email-DT">
                            {currentHdetail.email}
                        </div>
                        <div className="Hotel-Tel">
                            เบอร์โทรศัพท์
                        </div>
                        <div className="Hotel-Tel-DT">
                            {currentHdetail.tel}
                        </div>
                    </div>
                 
                    
                </div>
        </div>
    )
}

export default ProfileDetail