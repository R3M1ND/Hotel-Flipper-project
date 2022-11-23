import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import FeedbackBox from "../components/feedbackBox"
import '../css/FeedbackPage.css'
import axios from 'axios'
import NavbarHotel from "../components/Navbar";

const FeedbackPage =()=>{
    const[feedback,setFeedback] = useState('')
    const[reviews,setReviews] = useState([])
    const[score,setScore] = useState()
    const[isSubmit,setIsSubmit] = useState(false)


    const handleChange =e=>{
        setFeedback(e.target.value)
    }
    const handleScore=e=>{
        setScore(e.target.value)
    }

    //ส่งให้backตรงนี้
    const submitHandler= async(e) => {
        e.preventDefault();
        setIsSubmit(true)
        const data ={
            HId : "637b5c5ffa8815f3a1d71a2a",
            desc:feedback,
            star:Number(score),
            service : "1234"
        }
        
        const post = await axios.post(`http://localhost:3003/api/review/create`,data)
        .then(res=>{
            if (localStorage.getItem('h_id') == undefined){
                alert('คุณต้องเข้าสู่ระบบก่อนรีวิวบริการ')
            }else alert('เราได้รับรีวิวของคุณแล้ว')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        review()
        document.title = "Hotel Flipper"
    },[])

    const review = async() =>{
        const res = await axios.get('http://localhost:3003/api/review')
                    .then(res=>{
                        setReviews(res.data)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
        console.log(">>>",reviews)

    }
    return(
        <div>
            <NavbarHotel />
            <div className="FeedbackPage-Circle1"></div>
            <div className="FeedbackPage-Circle2"></div> 
            <div className="FeedbackPage-container">
                <div className="FeedbackPage-fontTopic mt-5">ทำไมต้อง</div>
                <div className="FeedbackPage-fontTopic" >Hotel Flipper</div>
                
                {
                    reviews.map((item)=>{
                        console.log('>',item)
                        return <FeedbackBox name={"เกรซ"} rate={item.star} ment={item.desc}/>
                    })
                }
                <div className="FeedbackPage-line"></div>
                <div className="FeedbackPage-fontTopic2">ส่งฟีดแบ็กให้เราเพื่อปรับปรุงคุณภาพให้ดีขึ้น</div>
                <div className="FeedbackPage-fontTopic3">ข้อเสนอแนะของคุณ</div>
 
                <textarea className="FeedbackPage-input" name="feedback" value={feedback} onChange={handleChange}></textarea>
                
                <div className="FeedbackPage-fontTopic4">คะแนนการบริการ</div>
                
                <div className="FeedbackPage-radio-grid">
                    <div>
                        <input type="radio"  name="score" value={1} onChange={handleScore} className="me-2"></input>
                        1
                    </div>

                    <div>
                        <input type="radio" name="score" value={2} onChange={handleScore} className="me-2"></input>
                        2
                    </div>

                    <div>
                        <input type="radio"  name="score" value={3} onChange={handleScore} className="me-2"></input>
                        3
                    </div>

                    <div>
                        <input type="radio"  name="score" value={4} onChange={handleScore} className="me-2"></input>
                        4
                    </div>

                    <div>
                        <input type="radio"  name="score" value={5} onChange={handleScore} className="me-2"></input>
                        5
                    </div>
                </div>
                <button className="FeedbackPage-button" type="Submit" onClick={submitHandler}>ส่งฟีดแบ็กเลย ! </button>
            </div>
        </div>
    )
}
export default FeedbackPage