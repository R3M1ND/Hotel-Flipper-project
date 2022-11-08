import React from "react";
import "../css/BoxServiceList.css"
import imgcovid1 from "../pic/covid1.jpg"





const BoxServiceList = (list_props) => {
    // console.log("List", list_props)
    

    const removeList = (event) => {
        event.preventDefault()
        list_props.serviceRemove(list_props.item)
        console.log("send noti remove : ",list_props.item)

    }
    return (
        <div className="container-list">
            <div className="card-service-list">
                <div className="box-img-list">
                    <img src={list_props.item.img} alt="#" className="img-list" />
                </div>
                <div className="font-service-list">
                    <div className="font-title-list">รหัส {list_props.item.number}</div>
                    <div className="font-text-list">{list_props.item.service}</div>
                    <div className="font-text-list">รายการ {list_props.item.list}</div>
                    <div className="font-text-list">วันที่ {list_props.item.day} พ.ศ. {list_props.item.year}</div>
                    <div className="font-text-list">เวลา {list_props.item.time} น.</div>
                </div>
                <div className="font-price-list">{list_props.item.price}</div>
            </div>
            <button className="btn-remove-list" onClick={removeList}><div className="line-btn"></div></button>

        </div>
    )
}
export default BoxServiceList