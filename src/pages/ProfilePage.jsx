import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import ProfileAddress from "../components/ProfileAddress";
import '../css/Profile.css'
import NavbarHotel from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetaildemo from "./HotelDetaildemo";
import HotelAddressdemo from "./HotelAddressdemo";

const ProfilePage = () =>{
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
    
    return(
        <div className="bodyProfile">
            <NavbarHotel />
            <div className="Top-Profilepage">
                <div className="Text-top-profile">
                    โปรไฟล์
                </div>
            </div>
            <div className="Supermain-Profilepage">
                <div className="Main-Profilepage">
                    <div className="Box-Main-Profilepage">
                        { HotelDetaildemo.map((item) => (
                            <div ><ProfileDetail hdetail={item}/></div> ))}
                    </div>
                    <div className="Box-Main-Profilepage">
                        
                        { HotelAddressdemo.map((addr) => (
                            <div ><ProfileAddress haddress={addr}/></div> ))}
                    </div>  
                </div>
                <Link to='/EditProfilePage'>
                    <button className="bttn-edit-HetelDT">
                                แก้ไขข้อมูลโรงแรม
                    </button>  
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default ProfilePage