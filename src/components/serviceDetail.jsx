import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import "../css/serviceDetail.css"
import axios from 'axios'
const ServiceDetail =(props)=>{
    const {detail} = props
    // const [serviceName,setServiceName] = useState("")
    // const [serviceScope,setServiceScope] = useState("")
    // const [serviceCondition,setServiceCondition] = useState("")
    // const [serviceList,setServiceList] = useState("")

    const[currentService,setCurrentService] = useState({name:detail.name,scope:detail.scope,condition:detail.condition,list:detail.list})

    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
            // setServiceName(res.data)
            // setServiceScope(res.data)
            // setServiceCondition(res.data)
            // setServiceList(res.data)
            setCurrentService(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    return(
            <div className="detailBox">
                <div className="service-name">
                    {/* {serviceName} */}
                    {currentService.name}
                </div>

                <div className="service-pic"><img width="970" height="400" src="" alt=""/>
                </div>

                <div className="service-Topic">ขอบเขตการทำงาน</div>
                <div className="service-detail-font">
                    <i class="fi fi-ss-bulb me-2"></i>
                    {/* {serviceScope} */}
                    {currentService.scope}
                </div>

                <div className="service-Topic">เงื่อนไขบริการ</div>
                <div className="service-detail-font">
                    <i class="fi fi-sr-exclamation me-2"></i>
                    {/* {serviceCondition} */}
                    {currentService.condition}
                </div>

                <div className="service-Topic">รายการบริการ</div>
                <div className="service-detail-font">
                    <i class="fi fi-ss-circle me-2"></i>
                    {/* {serviceList} */}
                    {currentService.list}
                </div>
            
            </div> 
    )
}

export default ServiceDetail
