import React from "react";
import  "../css/Cart.css";
import Navbar from "../components/Navbar";
import BoxService from "../components/BoxServiceList";
import axios from 'axios'
import serviceList from "./Service.json"


const Cart = () => {  
    const cartlist = serviceList.maintainList
    const initialValue = 0
    
    const totalPrice = cartlist.reduce((total,current) => total += current.price , initialValue)
    // const totalList = cartlist.reduce((total,current) => total += current ,initialValue)


    const removeServiceList = (event) => {

        console.log("remove : ",event)
    }
    

    return(
        <div>
            <Navbar />
            <div className="box-head-cart">
                <div className="font-head-cart">รายการทั้งหมดของคุณ</div>
            </div>
            <div className="box-service-list">
                {cartlist.map(item => {
                    return (
                        <BoxService key={item.id} item = {item} serviceRemove = {removeServiceList} />
                    )
                })}
            </div>
            <div className="box-payment-fixed">
                <div className="font-list-amount">
                    <div className="font-l1">รายการทั้งหมด</div>
                    <div className="font-l2">-</div>
                    <div className="font-l1">รายการ</div>
                </div>
                <div className="font-list-payment">
                    <div className="font-l1">รวมทั้งสิ้น</div>
                    <div className="font-p2">{totalPrice}</div>
                    <div className="font-l1">บาท</div>
                </div>
                <button className="btn-payment" >ชำระเงิน</button>
            </div>
        
        
        <footer></footer>
        </div>

        

    )
}

export default Cart