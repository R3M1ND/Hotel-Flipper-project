import React from "react"
import "../css/stepBox.css"
import progressnotdone from '../pic/gray.png'

const StepBox1 =()=>{
    return(
        <div className="stepBox">
            <img src={progressnotdone} width="520" height="130" className="threePos"></img>
        </div>
    )
}
export default StepBox1