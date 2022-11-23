import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import "../css/serviceSelect.css"
import listdata from "../pages/ServiceDetail.json";
import { Link, useNavigate } from "react-router-dom";



const ServiceSelect = (props) => {
    const h_id = '170' // localStorage.getItem('h_id')

    const [selectService, setSelectservice] = useState('')
    const [selectDate, setSelectDate] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    
    const linkCart = (e, getId) => {
        var _test = getId.then(getId => { 
            e.preventDefault()
            navigate(String('/cart?cart=' + getId))

        })
    }
    

    const handleSelectService = e => {
        setSelectservice(e.target.value)
    }
    const handleSelectDate = e => {
        setSelectDate(e)
    }

    //ส่งให้ back ตรงนี้
    const sendToCart = (e) => {
        setIsSubmit(true)
    }
    

    const fetchUser = async() => {
        const res = await axios.get(`http://localhost:3002/api/cartuser/user=${h_id}`)

        //check cart new member : useCreatCart
        if(res.data.cartuser === null) {
            const data ={
                "u_id": h_id // 
            }
            const create = await axios.post(`http://localhost:3002/api/cartuser/create`, data)
            return create.data.cartuser.cart_id
        }
        else{
            return res.data.cartuser.cart_id
        }
    }
    
    const fetchAdd = async(cart_id, s_id, time_start) => {
        const cartId = await cart_id
        const data = {
            'cart_id' : cartId,
            's_id' : s_id,
            'time_start' : time_start,
        }
        const addToCart = await axios.post(`http://localhost:3002/api/cartservice/add/`, data)
        .then(res => {
            console.log('Add to Cart Success!!')
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        
    },[])

    //dropdown get data internal
    const labelList = listdata.Dropdown
    return (
        <div>
            <div className="detailBoxSelect">
                <div className="service-TopicSelect">บริการที่ต้องการ</div>
                <select className="service-DropDown"
                    onChange={handleSelectService}
                    selected={selectService}
                >
                    {props.object.map(item => {
                        return <option value={item.s_id}>{item.s_name}</option>
                    })}
                </select>

                <div className="service-TopicSelect">วันที่และเวลาที่ต้องการรับบริการ</div>
                <DatePicker
                    className="service-DatePicker"
                    selected={selectDate}
                    onChange={handleSelectDate}
                    dateFormat='yyyy/MM/dd h:mm aa'
                    minDate={new Date()}
                    showMonthDropdown
                    useShortMonthInDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Select your date and time"
                    showTimeSelect
                />
                <button className="AddService-button" onClick={(e) => { 
                    sendToCart(e); 
                    linkCart(e, fetchUser().then(res => { return res }));
                    fetchAdd(fetchUser().then(res => { return res }), selectService, selectDate);
                    }}>
                    <div
                        className="AddService-font"
                    >เพิ่มเข้าตะกร้า</div>
                </button>

            </div>

        </div>
    )
}

export default ServiceSelect