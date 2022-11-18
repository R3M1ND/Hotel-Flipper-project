import React from "react"
import "../css/stepBox.css"
import progressdone from '../pic/new.png'

const StepBox =()=>{
    return(
        <div className="stepBox">
            <img src={progressdone} width="520" height="130" className="threePos"></img>
        </div>
    )
}
export default StepBox
