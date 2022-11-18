import React from "react";
import "../css/DetailPage.css"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
import demoService from "./demoService";
import listdropdown from "./ServiceDetail.json";

const DetailPage=()=>{
    console.log(demoService)

    return(
        <div >
        <div className="DetailPage-container">
            { demoService.map((item) => (
                <div><ServiceDetail detail={item}/></div>
            ))}
            
            {/* <ServiceDetail /> */}
            <ServiceSelect />
        </div>
        </div>
    )

}
export default DetailPage