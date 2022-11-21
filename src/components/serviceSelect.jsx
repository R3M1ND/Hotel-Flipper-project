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
import { Link } from "react-router-dom";



const ServiceSelect = (props) => {

    // เดี๋ยวมาเขียนเพิ่มoptionแบบmapเอา
    // const {detail} = props
    // const[defaultService,setDefaultService] = useState({option:detail.defaultService})

    // const {select} = props
    // const[currentSelect,setCurrentSelect] = useState({name:select.name})
    const [selectService, setSelectservice] = useState('')
    const [selectDate, setSelectDate] = useState('')
    // const [selectTime,setSelectTime] = useState(setHours(setMinutes(new Date(), 30), 17))
    const [isSubmit, setIsSubmit] = useState(false)

    // const[details,setDetails] = useState({service:'',date:'',time:''})

    // const handleChange = (e) =>{
    //     const{name,value} = e.target.value
    //     setDetails({...details,[name]:value})
    // }

    const handleSelectService = e => {
        setSelectservice(e.target.value)
        console.log(selectService)
        // onChange={e=>setSelects(e.target.value)}
    }
    const handleSelectDate = e => {
        setSelectDate(e)
        console.log(selectDate)
    }
    // const handleSelectTime = e =>{
    //     setSelectTime(e)
    //     console.log(selectTime)
    // }

    //ส่งให้ back ตรงนี้
    const sendToCart = e => {
        e.preventDefault();
        setIsSubmit(true)
        // console.log(isSubmit)
    }

    useEffect(() => {
        if (selectDate && selectService && isSubmit === true) {
            console.log(isSubmit)
            console.log(selectService)
            console.log(selectDate)
        }
    }, [])

    //dropdown get data internal
    const labelList = listdata.Dropdown

    return (
        <div>
            <div className="detailBoxSelect">
                <div className="service-TopicSelect">บริการที่ต้องการ</div>
                {/* {selects} */}
                
                <select className="service-DropDown"
                    value={selectService}
                    onChange={handleSelectService}>
                        {
                            props.object.map(item=>{
                                return <option value={item.s_id}>{item.s_name}</option>
                            })
                        }
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


                {/* <div className="service-TopicSelect">วันที่ที่ต้องการรับบริการ</div>
            <DatePicker
                className="service-DatePicker"
                selected={selectDate}
                // selected={details.date}
                onChange={handleSelectDate}
                dateFormat='yyyy/MM/dd'
                minDate={new Date()}
                showMonthDropdown
                useShortMonthInDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select your date"
            />
            <div className="service-TopicSelect">ระยะเวลา</div>
            <DatePicker
                className="service-DatePicker"
                selected={selectTime}
                // selected={details.time}
                onChange={handleSelectTime}
                showTimeSelect
                showTimeSelectOnly
                
                // minTime={setHours(setMinutes(new Date(), 0), 8)}
                // maxTime={setHours(setMinutes(new Date(), 0), 18)}
                dateFormat="h:mm aa"
                placeholderText="Select your time"
            /> */}
                <Link to="/qapage" className="link-btn-detail">
                    <div className="AddService-button">
                        <div
                            className="AddService-font"
                            onClick={sendToCart}
                        >ดำเนินการต่อ</div>
                    </div></Link>
            </div>

        </div>
    )
}

export default ServiceSelect