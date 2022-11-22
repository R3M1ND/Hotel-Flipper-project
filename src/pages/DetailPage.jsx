import React from "react";
import "../css/DetailPage.css"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
import demoService from "./demoService";
import listdropdown from "./ServiceDetail.json";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DetailPage=()=>{
    const[currentService,setCurrentService] = useState([])
    const[currentList,setCurrentList] = useState([])
    const [isOk,setIsOk] = useState(false)
    const getId = String(window.location.search.replace('?Id=',''))
    // const getS_type = String(window.location.search.replace('?s_type=',''))

    

    const fetchList = async() => {
        const res  = await axios.get(`http://localhost:3001/api/service`)
        .then(res => {
            // get s_name
            setCurrentList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const fetchDetail = async () => {
        const res  = await axios.get(`http://localhost:3001/api/servicetype/${getId}`)
        .then(res => {
            setCurrentService(res.data)
            setIsOk(true)
        })
        .catch(err => {
            console.log(err)
        })
    } 
    useEffect(()=>{
        fetchDetail()
        fetchList()
    },[])
    
    const filterList = currentList.filter(item => item.s_type === currentService.s_type)

    return(
        <div >
        <div className="DetailPage-container">
            {<ServiceDetail 
                id = {currentService.t_id}
                s_type = {currentService.s_type}
                s_bound = {currentService.s_bound}
                s_cond = {currentService.s_cond}
                s_imgPath = {currentService.s_imgPath}
                s_name = {filterList.map(r => r.s_name).join('\n')}
            /> }
                <ServiceSelect 
                object = {filterList}
                s_id = {filterList.map(r => r.s_id)}
                s_name = {filterList.map(r => r.s_name)}
            />
            
            
        </div>
        </div>
    )

}
export default DetailPage