import React from "react";
import NavbarHotel from "../components/Navbar";
import "../css/Aboutpage.css"



const Aboutpage = () => {
    return (
        <div className="contain-page" >
            <NavbarHotel />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="contain-about" >
                <div className="font-about">เกี่ยวกับเรา</div>
                <div className="box-about">
                    <div className="font-about-h1">ที่มาของ Hotel Flipper</div>
                    <div className="box-font-a1">
                        <div>&emsp;เนื่องจากในปัจจุบันประเทศไทยเป็นประเทศแห่งการท่องเที่ยว ธุรกิจการท่องเที่ยวสามารถ
                            ทำรายได้ให้กับประเทศไทยเป็นอันดันหนึ่งตลอดหลายสิบปีที่ผ่านมา สามารถทำให้เกิดการกระจาย
                            รายได้ให้แก่คนไทยในทุกภาคส่วน ทุกภูมิภาค
                        </div>
                        <div>&emsp;อุตสาหกรรมโรงแรมและที่พักมีความสำคัญต่อเศรษฐกิจไทยมาก เพราะสนับสนุน
                            การจ้างงานเป็นจำนวนกว่า 1.5 ล้านตำแหน่ง ภาคบริการเป็นหนึ่งในส่วนที่ใหญ่ที่สุดที่สามารถ
                            พัฒนาได้ และธุรกิจบริการรับทำความสะอาดครบวงจรเป็นหนึ่งในธุรกิจที่บริการที่ใหญ่ที่สุด
                            ในประเทศไทย
                        </div>
                        <div>&emsp;เราจึงรวบรวมบริการทำความสะอาดครบวงจรไว้ที่นี่มีการเทรนและฝึกฝนพนักงานทั้ง
                            ด้านกายและด้านใจ ความคิด ให้มีมาตรฐานที่เท่ากันและเสมอต้นเสมอปลาย ใช้เทคโนโลยี
                            เครื่องมือที่ทันสมัย เพื่อแก้ไขทุกปัญหาให้คุณ
                        </div>
                    </div>
                    <div className="font-about-h1">ทำไมต้อง Hotel Flipper</div>
                    <div className="box-font-a2">
                        <div>Hotel (n.) แปลว่าโรงแรม </div>
                        <div>Flip (v.) แปลว่าพลิก</div>
                        <div className="font-a-t1">
                            <div className="circle-3"></div>
                            <div>
                                ชื่อบริษัทของเรานั้นจึงหมายถึงการพลิกโรงแรมจากที่เป็นอยู่
                                ให้ดีกว่าเดิมนั่นเอง !
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutpage