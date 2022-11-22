import React from "react";
import "../css/Cart.css";
import Navbar from "../components/Navbar";
import BoxService from "../components/BoxServiceList";
import axios from 'axios'
import serviceList from "./Service.json"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Cart = () => {
    const initialValue = 0
    const [serviceOrder, setServiceOrder] = useState([])
    const [imgOrder, setImgOrder] = useState([])

    const fetchOrder = async () => {
        const res = await axios.get('http://localhost:3001/api/service')
            .then(function (res) {
                setServiceOrder(res.data)
                console.log("service >> ", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const fetchImg = async () => {
        const res = await axios.get('http://localhost:3001/api/servicetype')
            .then(function (res) {
                setImgOrder(res.data)
                console.log("Img >> ", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchOrder()
        fetchImg()
    }, [])

    const filterOrder = serviceOrder.map(s => {
        let x = imgOrder.filter( i => i.s_type === s.s_type)
        return [x[0].s_imgPath,s.s_name]
    })
  
    const totalPrice = serviceOrder.reduce((total, current) => total += current.s_price, initialValue)
    const removeServiceList = (event) => {
            console.log("remove : ", event)
        }
        
    const cList = serviceOrder.map(item => {
        return (
            <BoxService key={item.id} s_type={item.s_type} s_name={item.s_name} s_price={item.s_price} s_imgPath = {filterOrder.filter(f => f[1] === item.s_name)[0][0]}  serviceRemove={removeServiceList} />
        )
    })
    
    return (
        <div>
            <Navbar />
            <div className="box-head-cart">
                <div className="font-head-cart">รายการทั้งหมดของคุณ</div>
            </div>
            <div className="box-service-list">
                {cList.length === 0 ? <div className="font-no-cart">ไม่มีรายการบริการอยู่ในตะกร้าของคุณ</div> : cList}
            </div>
            <div className="box-payment-fixed">
                <div className="font-list-amount">
                    <div className="font-l1">รายการทั้งหมด</div>
                    <div className="font-l2">{cList.length}</div>
                    <div className="font-l1">รายการ</div>
                </div>
                <div className="font-list-payment">
                    <div className="font-l1">รวมทั้งสิ้น</div>
                    <div className="font-p2">{totalPrice}</div>
                    <div className="font-l1">บาท</div>
                </div>
                <Link to="/paymentpagecart"><button className="btn-payment">ชำระเงิน</button></Link>
            </div>


            <footer></footer>
        </div>



    )
}

export default Cart