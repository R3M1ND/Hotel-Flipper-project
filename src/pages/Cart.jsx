import React from "react";
import "../css/Cart.css";
import Navbar from "../components/Navbar";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { set } from "date-fns";


const Cart = () => {
    const initialValue = 0
    const cartId = String(window.location.search.replace('?cart=',''))
    const h_id = '170' // localStorage.getItem('h_id')
    const [serviceOrder, setServiceOrder] = useState([])
    const [imgOrder, setImgOrder] = useState([])
    const [serviceList, setServiceList] = useState([])
    var serviceListTemp = []
    const unique = (_list)  => [...new set(_list)]
    
    // Cart
    const fetchCartservice = async() => {
        const res = await axios.get(`http://localhost:3002/api/cartservice/cart=${cartId}`)
        .then(res=>{
            console.log("hello")
            setServiceList(res.data.cartservice)
            
        })
    }

    // Service
    const fetchServiceList = async () => {
        const res = await axios.get(`http://localhost:3001/api/service`)
        .then(res=>{
            setServiceOrder(res.data)
        })
    }
    const fetchImg = async () => {
        const res = await axios.get(`http://localhost:3001/api/servicetype`)
        setImgOrder(res.data)
    }

    // Cart
    const removeFromCart = async(serviceId) => {
        console.log('s_id: ', serviceId)
        const res = await axios.delete(`http://localhost:3002/api/cartservice/remove/cart=${cartId}/service=${serviceId}`)
        if(res.data.cartservice ===  203) {
            console.log('Remove from cart: ', res.data.cartservice)
        }
        else{
            console.log('error')
        }
    }


    // Order
    const requestOrderCartservice = async() => {
        const res = await axios.post(`http://localhost:3002/api/cartservice/order/cart=${cartId}`)
        console.log('requestOrderCartservice: ', res.data.cartservice)
        if(res.data.statusCode === 202) {
            console.log('request OrderCartservice !!!')
        }
    }
    const requestOrderCartuser = async() => {
        const data = {
            'total' : totalPrice
        }
        const res = await axios.post(`http://localhost:3002/api/cartuser/update/${cartId}`, data)
        console.log('requestOrderCartuser: ', res.data.cartuser)
        if(res.data.statusCode === 202) {
            console.log('request OrderCartuser !!!')
        }
    }
    const createOrder = async() => {
        const data = {
            'OId' : cartId,
            'HId' : h_id,
            'Hname' : 'KMITL Hotel',
            'addr' : '1 ฉลองกรุง 1 ลาดกระบัง กรุงเทพฯ' ,
            'cost' : totalPrice,
            'service' : 'serviceOrderList',
            'startTime' : '2022-11-15T20:44:16.580+00:00'
        }
        const res = await axios.post(`http://localhost:3003/api/order/create`, data)
        console.log(res.data)
    }

    useEffect(() => {
        fetchCartservice()
        fetchServiceList()
        fetchImg()
        console.log('serviceListTemp: ', serviceListTemp)
    }, [])
    
    var y = []
    var id = []
    var t = 0
    const filterOrder = serviceList.map(s => {
        console.log('s',s)
        var yy = serviceOrder.filter(a => s.s_id === a.s_id)
        console.log(yy)
        y.push(...yy)
        console.log("เหม็นแบ๊วมากๆ",y[t++].s_type)//yy[0].s_type
    })
    
    const totalPrice = serviceOrder.reduce((total, current) => total += current.s_price, initialValue)

    const removeServiceList = (event) => {
        }
    var i_id = 0
    const cList = y.map(item => {
        console.log("ขิมขิม",item,id)
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
                <Link to="/paymentpagecart">
                    <button 
                    className="btn-payment" 
                    onClick={(e) => { 
                        requestOrderCartuser();
                        requestOrderCartservice();
                        createOrder();
                    }}>ชำระเงิน</button></Link>
            </div>


            <footer></footer>
        </div>
    )
}

export default Cart