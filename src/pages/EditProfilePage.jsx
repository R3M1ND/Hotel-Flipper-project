import React from "react";
// import { Link } from "react-router-dom";
import EditProfileForm from "../components/EditProfileForm";
import '../css/EditProfile.css';
import NavbarHotel from "../components/Navbar";


const EditProfilePage =() =>{
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