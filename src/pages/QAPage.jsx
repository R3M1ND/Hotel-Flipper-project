import React from "react";
import { useState, useEffect } from "react"
import "../css/QAPage.css"
import StepBox1 from "../components/stepBox1"
import axios from "axios";
import NavbarHotel from "../components/Navbar";

const QAPage = () => {
    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: ''
    })

    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const sendAnsToDB = async (e) => {
        e.preventDefault();
        setIsSubmit(true)
        const q1 = {
            QId: '1',
            OId: '1',
            ans: formData.q1
        }
        const q2 = {
            QId: '2',
            OId: '1',
            ans: formData.q2
        }
        const q3 = {
            QId: '3',
            OId: '1',
            ans: formData.q3
        }
        const q4 = {
            QId: '4',
            OId: '1',
            ans: formData.q4
        }

        const post1 = await axios.post(`http://localhost:3003/api/QA/create`, q1)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })

        const post2 = await axios.post(`http://localhost:3003/api/QA/create`, q2)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })

        const post3 = await axios.post(`http://localhost:3003/api/QA/create`, q3)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })

        const post4 = await axios.post(`http://localhost:3003/api/QA/create`, q4)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (isSubmit === true) {
            console.log(formData)
        }
        document.title = "Hotel Flipper"
    })

    return (
        <div>
            <NavbarHotel />
            <div className="QAPage-container">
                <StepBox1 />
                <div className="QAPage-box">
                    <div className="QAPage-Topicfont">คำถามเพิ่มเติม</div>

                    <div className="QAPage-Qfont">1. สถานที่หน้างานมีความสุ่มเสี่ยงจากโควิด-19 หรือไม่</div>
                    <div className="radio-pos">
                        <input type="radio" name="q1" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>
                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q1" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">2. สถานที่หน้างานมีมาตรการคัดกรองคนเข้า-ออกหรือไม่</div>
                    <div className="radio-pos">
                        <input type="radio" name="q2" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>

                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q2" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">3. สถานที่หน้างานมี หรือเคยมีการทำความสะอาดฆ่าเชื้อหรือไม่</div>
                    <div className="radio-pos">
                        <input type="radio" name="q3" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>

                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q3" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">4. ลักษณะของสถานที่หน้างานเป็นรูปแบบใด</div>
                    <div className="radio-pos">
                        <input type="radio" name="q4" value="hotel" onChange={handleChange}></input>
                        <div className="radio-font">โรงแรม</div>

                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q4" value="resort" onChange={handleChange}></input>

                        <div className="radio-font">รีสอร์ท</div>
                    </div>
                    <div className="QAPage-buttonPos ">
                        <button className="QAPage-button" onClick={sendAnsToDB}>
                            <div className="QAPage-buttonFont">ชำระเงิน</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QAPage