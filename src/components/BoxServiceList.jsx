import React from "react";
import "../css/BoxServiceList.css"
import imgcovid1 from "../pic/covid1.jpg"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const BoxServiceList = (list_props) => {
    const {item} = list_props

    const removeList = (event) => {
        event.preventDefault()
        list_props.serviceRemove(list_props.item)
        console.log("send noti remove : ",list_props.item)
    }

    // Cart
    const removeFromCart = async(serviceId) => {
        console.log('s_id: ', serviceId)
        const res = await axios.delete(`http://localhost:3002/api/cartservice/remove/cart=${cartId}/service=${serviceId}`)
        if(res.data.cartservice ===  203) {
            console.log('Remove from cart: ', res.data.cartservice)
        }
    }

    return (
        <div className="container-list">
            <div className="card-service-list">
                <div className="box-img-list">
                    <img src={list_props.s_imgPath} alt="#" className="img-list" />
                </div>
                <div className="font-service-list">
                    <div className="font-title-list">{list_props.s_type}</div>
                    <div className="font-text-list">รายการ {list_props.s_name}</div>
                </div>
                <div className="font-price-list">{list_props.s_price}</div>
            </div>
            <button className="btn-remove-list" onClick={e => {removeFromCart(list_props.s_id)}}><div className="line-btn"></div></button>

        </div>
    )
}
export default BoxServiceList