import React from "react";
import { Link } from "react-router-dom"
import NavbarHotel from "../component/Navbar";

const Home = () => {
    return (
        <div>
            <NavbarHotel />
            <h1> ไม่ได้ใช้หน้านี้ทำเพื่อลอง link เฉยๆ </h1>
            <Link to='/ProfilePage'>
                <botton>
                    ProfilePage
                </botton>
            </Link>
            <h1> ตัวลองเข้าสู่ระบบ </h1>
            <Link to='/LoginPage'>
                <botton>
                    เข้าสู่ระบบงับ
                </botton>
            </Link>
            <h1> หน้าสมัครงาน </h1>
            <Link to='/ApplyforWork'>
                <botton>
                    หน้าสมัครงาน
                </botton>
            </Link>
            <h1> หน้าลงทะเบียน </h1>
            <Link to='/SignupPage'>
                <botton>
                    ลงทะเบียนเป็นสมาชิก
                </botton>
            </Link>
            <h1> แก้ไขหน่อยดีไหม </h1>
            <Link to='/EditProfilePage'>
                <botton>
                    แก้ไขข้อมูลนะจ๊ะ
                </botton>
            </Link>

           

           
        </div>
    )
}

export default Home