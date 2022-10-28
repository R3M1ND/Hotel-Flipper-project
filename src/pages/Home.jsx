import React from "react"
import Header from "../components/Header";
import NavbarHotel from "../components/Navbar";
import "../css/Home.css";
import CardServiceHit from "../components/CardServiceHit";
import CardServiceCovid from "../components/CardServiceCovid";
import CardServiceMaintain from "../components/CardServiceMaintain";
import imgService1 from "../pic/homekeepper.jpg";
import imgService2 from "../pic/secure.jpg";
import imgService3 from "../pic/air.jpg";
import imgcovid1 from "../pic/covid1.jpg"
import imgcovid2 from "../pic/covid2.jpg"
import imgmaintain1 from "../pic/covid2.jpg"
import imgmaintain2 from "../pic/covid2.jpg"



const Home = () => {
    return (
        <div>
            <NavbarHotel />
            <Header />
            <div className="box-service-hit">
                <div className="font-service-hit">บริการยอดฮิตของเรา</div>
                <div className="box-card-hit">
                    <CardServiceHit
                        to="#"
                        imgHit={imgService1}
                        text="ทำความสะอาดทั่วไป (แม่บ้าน)"
                    />

                    <CardServiceHit
                        to="#"
                        imgHit={imgService2}
                        text="พนักงานรักษาความปลอดภัย"
                    />
                    <CardServiceHit
                        to="#"
                        imgHit={imgService3}
                        text="ทำความสะอาดเครื่องปรับอากาศ"
                    />
                </div>
            </div>
            <div className="box-service-covid">
                <div className="font-service-covid">บริการแนะนำในช่วง COVID-19</div>
                <div className="box-card-covid">
                    <CardServiceCovid
                        to="#"
                        imgCovid={imgcovid1}
                        text="บริการทำความสะอาดโซฟา"
                        describe="2,200"
                    />
                    <CardServiceCovid
                        to="#"
                        imgCovid={imgcovid2}
                        text="บริการพ่นฆ่าเชื้อ (แบบสเปรย์)"
                        describe="2,000"
                    />
                </div>
            </div>
            <div className="box-service-maintain">
                <div className="font-service-maintain">บริการซ่อมบำรุงและอื่น ๆ</div>
                <div className="box-card-maintain">
                    <CardServiceMaintain
                        to="#"
                        imgMaintain={imgmaintain1}
                        text="บริการซ่อมเครื่องปรับอากาศ"
                        describe="500"
                    />
                    <CardServiceMaintain
                        to="#"
                        imgMaintain={imgmaintain2}
                        text="บริการทำสวน ตกแต่งสวนและจัดสวน"
                        describe="750"
                    />
                </div>
            </div>

            <footer></footer>
        </div>
    )
}
export default Home