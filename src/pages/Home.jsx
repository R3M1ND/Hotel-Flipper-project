import React from "react"
import Header from "../components/Header";
import NavbarHotel from "../components/Navbar";
import "../css/Home.css";
import CardServiceHit from "../components/CardServiceHit";
import imgService1 from "../pic/homekeepper.jpg";
import imgService2 from "../pic/secure.jpg";
import imgService3 from "../pic/air.jpg";

const Home = () => {
    return (
        <div>
            <NavbarHotel />
            <Header />

            <div className="box-service-hit">
                <div className="font-service-hit">บริการยอดฮิตของเรา</div>
                <div className="box-card-hit">
                    <CardServiceHit
                        to = "#"
                        imgHit={imgService1}
                        text="ทำความสะอาดทั่วไป (แม่บ้าน)"
                    />

                    <CardServiceHit
                        to = "#"
                        imgHit={imgService2}
                        text="พนักงานรักษาความปลอดภัย"
                    />
                    <CardServiceHit
                        to = "#"
                        imgHit={imgService3}
                        text="ทำความสะอาดเครื่องปรับอากาศ"
                    />
                </div>
            </div>



            <footer></footer>
        </div>
    )
}
export default Home