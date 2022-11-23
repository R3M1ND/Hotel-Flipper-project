import React from "react"
import "../css/PaymentPage.css"
import ServicePayment from "../components/servicePayment"
import StepBox from '../components/stepBox'
import serviceList from "./Service.json"
import { useEffect } from "react"


const PaymentPage = () =>{
    const cartlist = serviceList.maintainList
    
    const initialValue = 0
    const totalPrice = cartlist.reduce((total, current) => total += current.price, initialValue)
    const orderService = cartlist.map(item => {
        return (item.service+'\n')
    })
    const orderPrice = cartlist.map(item => {
        return (item.price +'\n')
    })
    useEffect(() => {
        document.title = "Hotel Flipper"
        
    },[])
    return(
        <div>
            
            <div className="PaymentPage-container">
                <StepBox />
                <div className="orderBox">
                        <div className="order-ID">รหัส </div>
                        <div className="order-gridcolumn">
                            <div className="order-detail">{orderService}</div>
                            <div className="order-price">{orderPrice}</div>
                        </div>
                        <div className="order-total-font">
                            <div className="order-total">รวมทั้งสิ้น</div>
                            <div className="order-totalprice">{totalPrice}&emsp;บาท</div>
                        </div>
                </div>
                <ServicePayment total={totalPrice}/>
            </div>
        </div>
    )
}

export default PaymentPage