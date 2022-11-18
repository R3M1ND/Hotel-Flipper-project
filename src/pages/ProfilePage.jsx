import React, {useEffect,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import ProfileAddress from "../components/ProfileAddress";
import '../css/Profile.css'
import NavbarHotel from "../components/Navbar";
import Footer from "../components/Footer";
import HotelDetaildemo from "./HotelDetaildemo";
import HotelAddressdemo from "./HotelAddressdemo";
// import EditProfileAddress from "../components/EditProfileAddress";

const ProfilePage = () =>{
    // const [editMode, setEditMode] = useState(false)

    // const changeTofalse = () => {
    //     setEditMode(false);
    //   }
    //   console.log(editMode);

    // const toggleTab = (index) => {
    //     console.log(index);
    //     setToggleState(index);
    // }
    
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
                        {/* <ProfileDetail/> */}
                        { HotelDetaildemo.map((item) => (
                            <div ><ProfileDetail hdetail={item}/></div> ))}
                    </div>
                    <div className="Box-Main-Profilepage">
                        {/* <ProfileAddress/> */}
                        
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