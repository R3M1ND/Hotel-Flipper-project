import axios from "axios"
import React from "react"
import { useEffect,useState } from "react"
import '../css/feedbackBox.css'

const FeedbackBox =() =>{
    const[comment,setComment] = useState({pic:'',name:'',rate:'',ment:''})

    //รับจาก back ตรงนี้
    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
            setComment(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    return(
    <div>
        <div className="feedbackBox-Box">
            <div className="feedbackBox-grid feedbackBox-font">
                <div>
                    <img width="150" height="150" src="" alt=""/>
                </div>
                <div>
                    เกรซ
                    {/* {comment.name} */}
                {/* <div className="feedbackBox-commentPos">RatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRating</div> */}
                </div>
                <div>Rate
                    {/* {comment.rate} */}
                </div>
                
            </div>
            <div className="feedbackBox-comment">
                <div className="gracefont">
                    {comment.ment}
                    {/* gracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegrace */}
                </div>
            </div>
        </div>

    </div>
    )
}
export default FeedbackBox