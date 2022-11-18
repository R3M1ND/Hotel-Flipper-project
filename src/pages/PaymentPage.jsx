import React from "react"
import "../css/PaymentPage.css"
import ServiceOrder from "../components/serviceOrder"
import ServicePayment from "../components/servicePayment"
import StepBox from '../components/stepBox'
import demoOrder from'./demoOrder'
import serviceList from "./Service.json"

const PaymentPage = () =>{
    console.log(demoOrder)
    //ลอง demo order แล้วไม่ขึ้นอ่า T-T
    const cartlist = serviceList.maintainList
    
    const initialValue = 0
    const totalPrice = cartlist.reduce((total, current) => total += current.price, initialValue)
    const orderService = cartlist.map(item => {
        return (item.service+'\n')
    })
    const orderPrice = cartlist.map(item => {
        return (item.price +'\n')
    })

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
                {/* <ServiceOrder /> */}
                {/* { serviceList.map((item) => (
                <div ><ServiceOrder item={item} number = ""/></div>
                ))} */}
                <ServicePayment />
            </div>
        </div>
    )
}

export default PaymentPage