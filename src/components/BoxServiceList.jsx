import React from "react";
import "../css/BoxServiceList.css"
import imgcovid1 from "../pic/covid1.jpg"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const BoxServiceList = (list_props) => {
    // console.log("List", list_props)
    const {item} = list_props
    // const[listService,setListService] = useState({img:item.img,number:item.name,service:item.service,list:item.list,day:item.day,year:item.year,time:item.time,price:item.price})
    
    // useEffect(() => {
    //     axios
    //     .get('')
    //     .then(res=>{
    //         setListService(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])

    const removeList = (event) => {
        event.preventDefault()
        list_props.serviceRemove(list_props.item)
        console.log("send noti remove : ",list_props.item)

    }
    return (
        <div className="container-list">
            <div className="card-service-list">
                <div className="box-img-list">
                    <img src={list_props.s_imgPath} alt="#" className="img-list" />
                </div>
                <div className="font-service-list">
                    <div className="font-title-list">รหัส {list_props.number}</div>
                    <div className="font-text-list">{list_props.s_type}</div>
                    <div className="font-text-list">รายการ {list_props.s_name}</div>
                    <div className="font-text-list">วันที่ {list_props.day} พ.ศ. {list_props.year}</div>
                    <div className="font-text-list">เวลา {list_props.time} น.</div>
                </div>
                <div className="font-price-list">{list_props.s_price}</div>
            </div>
            <button className="btn-remove-list" onClick={removeList}><div className="line-btn"></div></button>

        </div>
    )
}
export default BoxServiceList