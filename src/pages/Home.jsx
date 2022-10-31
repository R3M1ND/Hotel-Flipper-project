import React from "react"
import Header from "../components/Header";
import NavbarHotel from "../components/Navbar";
import "../css/Home.css";
import CardServiceHit from "../components/CardServiceHit";
import CardServiceCovid from "../components/CardServiceCovid";
import CardServiceMaintain from "../components/CardServiceMaintain";
import CardServiceSecure from "../components/CardServiceSecure";
import CardServiceGeneral from "../components/CardServiceGeneral";
import CardServiceDust from "../components/CardServiceDust";
import EmployeeBox from "../components/EmployeeBox";
import Footer from "../components/Footer";
import imgService1 from "../pic/homekeepper.jpg";
import imgService2 from "../pic/secure.jpg";
import imgService3 from "../pic/air.jpg";
import imgcovid1 from "../pic/covid1.jpg"
import imgcovid2 from "../pic/covid2.jpg"
import imgmaintain1 from "../pic/maintain1.png"
import imgmaintain2 from "../pic/maintain2.png"
import imgsecure1 from "../pic/secure1.jpg";
import imgdust1 from "../pic/dust1.jpg";
import imggeneral1 from "../pic/general1.png";
import imggeneral2 from "../pic/general2.png";

let Service = {
    covidCard: [
        {
            img: { imgcovid1 },
            text: "บริการทำความสะอาดห้องรับรอง (Lounge)",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "บริการพ่นฆ่าเชื้อ (แบบสเปรย์)",
            describe: "-"
        }
    ],
    generalCard: [
        {
            img: { imgcovid1 },
            text: "บริการทำความสะอาดห้องพัก (แม่บ้าน)",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "บริการซักชุดเครื่องนอน",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "บริการรีดชุดเครื่องนอน",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "บริการทำความสะอาดเครื่องปรับอากาศ",
            describe: "-"
        },
    ],
    maintainCard: [
        {
            img: { imgcovid1 },
            text: "บริการซ่อมเครื่องปรับอากาศ",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "บริการทำสวน ตกแต่งสวนและจัดสวน",
            describe: "-"
        },
    ],
    dustCard: [
        {
            img: { imgcovid1 },
            text: "บริการกำจัดไรฝุ่น",
            describe: "-"
        }
    ],
    secureCard: [
        {
            img: { imgcovid1 },
            text: "พนักงานรักษาความปลอดภัย",
            describe: "-"
        },
        {
            img: { imgcovid1 },
            text: "พนักงาน Lifeguard",
            describe: "-"
        }
    ]
}

let CovidService = Service.covidCard.map(covid => {
    return (
        <CardServiceCovid to="#" covid={covid} />
    )
})
let GeneralService = Service.generalCard.map(general => {
    return (
        <CardServiceGeneral to="#" general={general} />
    )
})
let MaintainService = Service.maintainCard.map(maintain => {
    return (
        <CardServiceMaintain to="#" maintain={maintain} />
    )
})
let DustService = Service.dustCard.map(dust => {
    return (
        <CardServiceDust to="#" dust={dust} />
    )
})
let SecureService = Service.secureCard.map(secure => {
    return (
        <CardServiceSecure to="#" secure={secure} />
    )
})

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
                        text="ทำความสะอาดห้องพัก (แม่บ้าน)"
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
                    {CovidService}
                </div>
            </div>
            <div className="box-service-general">
                <div className="font-service-general">บริการทำความสะอาดทั่วไป</div>
                <div className="box-card-general">
                    {GeneralService}
                </div>
            </div>
            <div className="box-service-maintain">
                <div className="font-service-maintain">บริการซ่อมบำรุงและอื่น ๆ</div>
                <div className="box-card-maintain">
                    {MaintainService}
                </div>
            </div>
            <div className="box-service-dust">
                <div className="font-service-dust">บริการกำจัดไรฝุ่น</div>
                <div className="box-card-dust">
                    {DustService}
                </div>
            </div>
            <div className="box-service-secure">
                <div className="font-service-secure">บริการรักษาความปลอดภัย</div>
                <div className="box-card-secure">
                    {SecureService}
                </div>
            </div>

            <EmployeeBox />
            <Footer />
        </div>
    )
}
export default Home