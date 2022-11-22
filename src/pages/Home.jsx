import React from "react"
import axios from "axios";
import { useState,useEffect } from "react";



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
import StickyCart from "../components/StickyCart";
import Footer from "../components/Footer";

import imgService1 from "../pic/homekeepper.jpg";
import imgService2 from "../pic/secure.jpg";
import imgService3 from "../pic/air.jpg";
import imgcovid1 from "../pic/covid1.jpg"
import imgcovid2 from "../pic/covid2.jpg"
import imgmaintain1 from "../pic/maintain1.png"
import imgmaintain2 from "../pic/maintain2.png"
import imgsecure1 from "../pic/secure.jpg";
import imgsecure2 from "../pic/secure1.jpg";
import imgdust1 from "../pic/dust1.jpg";
import imggeneral1 from "../pic/general1.png";
import imggeneral2 from "../pic/general2.png";




const Home = () => {
    // const {item} = service_props
    // const[listService,setListService] = useState({img:item.img,text:item.text,describe:item.describe})
    
    const data_default_service = []
    const [dataService,setDataService] = useState(data_default_service)

    function filterType(item,target){
        return item.s_cat === target
    }
    


    const fetchData = async() =>{
        const res = await axios.get('http://localhost:3001/api/servicetype')
        .then(function (res) {
            setDataService(res.data)
        })
        
        .catch(err=>{
            console.log(err)
        })
        
    }
    const fetchDetail = async() =>{
        const res = await axios.get('http://localhost:3001/api/service')
        .then(function (res) {
            console.log("service ",res)
        })
        
        .catch(err=>{
            console.log(err)
        })
        
    }
    useEffect(() => {
        fetchData()
        fetchDetail()
    },[])

    const sendDataToDetail = (e) => {
        console.log("data detail >>" ,e)
    }


    return (
        <div>
            
            <NavbarHotel />
            <StickyCart />
            <Header />
            <div className="box-service-hit">
                <div className="font-service-hit">บริการยอดฮิตของเรา</div>
                <div className="box-card-hit">
                {dataService.filter(item=>item.s_type === "บริการทำความสะอาดห้องพัก").map(item => 
                        {  
                            return <CardServiceHit  s_imgPath = {item.s_imgPath} s_type = {item.s_type} t_id = {item.t_id}/>
                        }
                )}
                {dataService.filter(item=>item.s_type === "พนักงานรักษาความปลอดภัย").map(item => 
                        {  
                            // console.log(imgsecure1,item.s_imgPath)
                            return <CardServiceHit  s_imgPath = {item.s_imgPath} s_type = {item.s_type} t_id = {item.t_id}/>
                        }
                )} 
                {dataService.filter(item=>item.s_type === "บริการทำความสะอาดห้องรับรอง").map(item => 
                        {  
                            return <CardServiceHit  s_imgPath = {item.s_imgPath} s_type = {item.s_type} t_id = {item.t_id}/>
                        }
                )}  
                </div>
            </div>
            <div className="box-service-covid">
                <div className="font-service-covid">บริการแนะนำในช่วง COVID-19</div>
                <div className="box-card-covid">
                    {dataService.filter(item=>item.s_cat === "ช่วงโควิด").map(item => 
                        {  
                            return <CardServiceCovid  s_imgPath = {item.s_imgPath} s_type = {item.s_type} s_price = {item.s_price} t_id = {item.t_id} />
                        }
                    )} 
                </div>
            </div>
            <div className="box-service-general">
                <div className="font-service-general">บริการทำความสะอาดทั่วไป</div>
                <div className="box-card-general">
                {dataService.filter(item=>item.s_cat === "ทั่วไป").map(item => 
                        {  
                            return <CardServiceGeneral  s_imgPath = {item.s_imgPath} s_type = {item.s_type} s_price = {item.s_price} t_id = {item.t_id}/>
                        }
                    )} 
                </div>
            </div>
            <div className="box-service-maintain">
                <div className="font-service-maintain">บริการซ่อมบำรุงและอื่น ๆ</div>
                <div className="box-card-maintain">
                {dataService.filter(item=>item.s_cat === "ซ่อม").map(item => 
                        {  
                            return <CardServiceMaintain  s_imgPath = {item.s_imgPath} s_type = {item.s_type} s_price = {item.s_price} t_id = {item.t_id}/>
                        }
                    )} 
                </div>
            </div>
            <div className="box-service-dust">
                <div className="font-service-dust">บริการกำจัดไรฝุ่น</div>
                <div className="box-card-dust">
                {dataService.filter(item=>item.s_cat === "กำจัดไรฝุ่น").map(item => 
                        {  
                            return <CardServiceDust  s_imgPath = {item.s_imgPath} s_type = {item.s_type} s_price = {item.s_price} t_id = {item.t_id}/>
                        }
                    )} 
                </div>
            </div>
            <div className="box-service-secure">
                <div className="font-service-secure">บริการรักษาความปลอดภัย</div>
                <div className="box-card-secure">
                {dataService.filter(item=>item.s_cat === "ความปลอดภัย").map(item => 
                        {  
                            return <CardServiceSecure  s_imgPath = {item.s_imgPath} s_type = {item.s_type} s_price = {item.s_price} t_id = {item.t_id}/>
                        }
                    )} 
                </div>
            </div>
            
            <EmployeeBox />
            <Footer />
        </div>
    )
}
export default Home