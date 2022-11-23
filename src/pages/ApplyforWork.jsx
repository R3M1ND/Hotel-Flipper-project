import React, {useEffect} from "react";
import ApplyforWorkForm from "../components/ApplyforWorkForm";
import '../css/ApplyforWork.css'
import keeper from "../assets/keeper.png"
import NavbarHotel from "../components/Navbar";

const ApplyforWork  = () => {
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
    return(
        <body className="body1">
            <div className="bg-roomservice">
                <div className="bg-roomfade">
                    <NavbarHotel />
                    <img src={keeper} alt="#" className="keeperfix"/>
                    <div className="Form-ApplyforWork">
                        <div className="join-with-us">ร่วมเป็นผู้ให้บริการกับเรา</div>
                        <div className="join-with-us-text">เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! 
                        <br/>
                        และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม</div>
                        <ApplyforWorkForm />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ApplyforWork