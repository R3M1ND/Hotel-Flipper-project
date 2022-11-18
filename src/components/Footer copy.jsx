import React from "react";
import "../css/Footer.css"
import facebook from "../assets/facebook.png";
import line from "../assets/line.png";
import mail from "../assets/mail.png";
import tel from "../assets/tel.png";



const Footer = () => {
    return (
        <div className="box-footer">
            <div className="box-left">
                <div className="font-footer-title">Hotel Flipper</div>
                <div className="font-footer-text">บริษัทโฮเต็ลฟลิปเปอร์จำกัด <br></br>
                    1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง <br></br>
                    เขตลาดกระบัง กรุงเทพมหานคร 10520
                </div>
            </div>
            <div className="box-right">
                <div className="font-footer-contact">ติดต่อ</div>
                <div className="facebook-font mb-2">
                    <img src={facebook} alt="#" width={25} height = {25}/>
                    <div className="ms-2">Hotel Flipper</div>
                </div>
                <div className="mail-font mb-2">
                    <img src={mail} alt="#" width={25} height = {25}/>
                    <div className="ms-2" >hotel.flipper@gmail.com</div>
                </div>
                <div className="line-font mb-2">
                    <img src={line} alt="#" width={25} height = {25}/>
                    <div className="ms-2">@hotelflipper</div>
                </div>
                <div className="tel-font">
                    <img src={tel} alt="#" width={25} height = {25}/>
                    <div className="ms-2">091-234-5678</div>
                </div>
            </div>
        </div>
    )
}
export default Footer