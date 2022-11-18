import React from "react";
import "../css/BoxServiceList.css"
import imgcovid1 from "../pic/covid1.jpg"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const BoxServiceList = (list_props) => {
    // console.log("List", list_props)
    const {item} = list_props
    const[listService,setListService] = useState({img:item.img,number:item.name,service:item.service,list:item.list,day:item.day,year:item.year,time:item.time,price:item.price})
    
    useEffect(() => {
        axios
        .get('')
        .then(res=>{
            setListService(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const removeList = (event) => {
        event.preventDefault()
        list_props.serviceRemove(list_props.item)
        console.log("send noti remove : ",list_props.item)

    }
    return (
        <div className="container-list">
            <div className="card-service-list">
                <div className="box-img-list">
                    <img src={listService.img} alt="#" className="img-list" />
                </div>
                <div className="font-service-list">
                    <div className="font-title-list">รหัส {listService.number}</div>
                    <div className="font-text-list">{listService.service}</div>
                    <div className="font-text-list">รายการ {listService.list}</div>
                    <div className="font-text-list">วันที่ {listService.day} พ.ศ. {listService.year}</div>
                    <div className="font-text-list">เวลา {listService.time} น.</div>
                </div>
                <div className="font-price-list">{listService.price}</div>
            </div>
            <button className="btn-remove-list" onClick={removeList}><div className="line-btn"></div></button>

        </div>
    )
}
export default BoxServiceList