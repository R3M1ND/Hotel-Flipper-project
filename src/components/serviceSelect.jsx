import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'
import DatePicker from "react-datepicker";
// import setHours from "date-fns/setHours";
// import setMinutes from "date-fns/setMinutes";
import 'react-datepicker/dist/react-datepicker.css'
import "../css/serviceSelect.css"
import listdata from "../pages/ServiceDetail.json";
import { Link, useNavigate } from "react-router-dom";



const ServiceSelect = (props) => {

    const [selectService, setSelectservice] = useState()
    const [selectDate, setSelectDate] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const linkCart = () => navigate("/cart")

    const handleSelectService = e => {
        setSelectservice(e.target.value)
    }
    const handleSelectDate = e => {
        setSelectDate(e)
    }
    //ส่งให้ back ตรงนี้
    const sendToCart = (e) => {
        // e.preventDefault();
        setIsSubmit(true)
    }

    const fetchCreat = async() => {
        const data ={
            "u_id": "125"
        }
        const creat = await axios.post(`http://localhost:3002/api/cartuser/create`,data)
        .then(function(creat) {
            console.log("creat cart for new member : " ,creat.data.cartuser.cart_id)
            return  creat.data.cartuser.cart_id
            
        })
    }
    const fetchUser = async(e,getId) => {
        const res = await axios.get("http://localhost:3002/api/cartuser/user=125")
        .then(function(res) {
            //check cart new member : useCreatCart
            if(res.data == ""){
                fetchCreat()
                // navigate(String('/detailpage?Id=' + getId),res.data)
            }
            else{
                console.log("creat cart already : " ,res.data.cart_id)
                return res.data.cart_id
                
            }
            // console.log("creat cart already : ",res)
            // console.log('cart_id :',res.data.cart_id)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const fetchOrder = async() => {
        const res = await axios.get("http://localhost:3002/api/cartservice/cart=63738c7635bd41ca85b256a7")
        .then(function(res) {
            // console.log('getCart :',res.data.cartservice)
        })
        .catch(err => {
            console.log(err)
        })
    }
    // const fetchOrder = async() => {

    // }
    useEffect(() => {
        fetchUser()
        fetchOrder()
    },[])

    //dropdown get data internal
    const labelList = listdata.Dropdown

    return (
        <div>
            <div className="detailBoxSelect">
                <div className="service-TopicSelect">บริการที่ต้องการ</div>
                <select className="service-DropDown"
                    onChange={handleSelectService}
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
                <button className="AddService-button" onClick={(e) => { sendToCart(e); linkCart() }}>
                    <div
                        className="AddService-font"
                    >ดำเนินการต่อ</div>
                </button>

            </div>

        </div>
    )
}

export default ServiceSelect