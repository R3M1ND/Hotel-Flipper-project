import React from "react";
import { Link } from "react-router-dom";
import "../css/EmployeeBox.css"


const EmployeeBox = (props) => {
    return (
        <div className="box-bg">
            <div className="box-employee-register">
                <div className="font-employee-title">ร่วมเป็นผู้ให้บริการกับเรา</div>
                <div className="font-employee-text">เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม</div>
                <Link to= "/ApplyforWork"><button className="btn-employee-register" type="button" as="input" >สมัครเลย !</button></Link>
            </div>
        </div>


    )
}
export default EmployeeBox