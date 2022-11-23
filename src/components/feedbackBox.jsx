import axios from "axios"
import React from "react"
import { useEffect,useState } from "react"
import '../css/feedbackBox.css'
import person from '../pic/person.png'
const FeedbackBox =(props) =>{
    const[comment,setComment] = useState({name:'',rate:'',ment:''})

    return(
    <div>
        <div className="feedbackBox-Box">
            <div className="feedbackBox-grid feedbackBox-font">
                <div>
                    <img src={person} width="100" height="100" alt="" className="personPos"/>
                    
                </div>
                <div>
                    ชื่อ :
                    {props.name}
                </div>
                <div>Rate: 
                    {props.rate}
                </div>
                
            </div>
            <div className="feedbackBox-comment feedbackBox-commentPos">
                <div className="gracefont">
                    {props.ment}
                </div>
            </div>
        </div>

    </div>
    )
}
export default FeedbackBox