import React from "react"
import "../css/serviceDetail.css"

const ServiceDetail =(props)=>{
    return(
            <div className="detailBox">
                <div className="service-name">
                    {props.s_type}
                </div>

                <div className="service-pic"><img width="970" height="400" src={props.s_imgPath} alt="#" className="img-detail"/>
                </div>

                <div className="service-Topic">ขอบเขตการทำงาน</div>
                <div className="service-detail-font">
                    <i class="fi fi-ss-bulb me-2"></i>
                    {props.s_bound}
                </div>

                <div className="service-Topic">เงื่อนไขบริการ</div>
                <div className="service-detail-font">
                    <i class="fi fi-sr-exclamation me-2"></i>
                    {props.s_cond}
                </div>

                <div className="service-Topic">รายการบริการ</div>
                <div className="service-detail-font">
                    <i class="fi fi-ss-circle me-2"></i>
                    {props.s_name}
                </div>
            
            </div> 
    )
}

export default ServiceDetail
