import React from "react";
import EditProfileForm from "../components/EditProfileForm";
import '../css/EditProfile.css';
import NavbarHotel from "../components/Navbar";
import { useEffect } from "react";


const EditProfilePage =() =>{
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
    return(
        <div>
            <div className="bg-roomservice">
                <div className="bg-roomfade-edit">
                    <NavbarHotel />
                    <div className="Form-EditPage">
                        < EditProfileForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage