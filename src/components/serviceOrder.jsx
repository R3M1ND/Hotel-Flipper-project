import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import "../css/serviceOrder.css"

const ServiceOrder = (order_props) =>{
    
    const {item} = order_props
    const[listOrder,setListOrder] = useState({service:item.service,price:item.price})
    
    useEffect(() => {
        axios
        .get('')
        .then(res=>{
            setListOrder(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(
    
        <div className="orderBox">
            
            <div className="order-ID">รหัส {order_props.number} </div>
                
            <div className="order-gridcolumn">
                <div className="order-detail">{listOrder.service}</div>
                <div className="order-price">{listOrder.price}</div>
            </div>
            <div className="order-gridcolumn">
                <div className="order-total">รวมทั้งสิ้น</div>
                <div className="order-totalprice">{listOrder.total}บาท</div>
            </div>
        </div>
    )
}

export default ServiceOrder