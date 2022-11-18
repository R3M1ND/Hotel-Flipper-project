import React from "react"
import "../css/stepBox.css"
import progressnotdone from '../pic/gray.png'

const StepBox1 =()=>{
    return(
        <div className="stepBox">
            <img src={progressnotdone} width="520" height="130" className="threePos"></img>

            {/* <div>
            <i class="fi fi-rs-circle">
                <i class="fi fi-br-shopping-cart-check"></i>            
                <div className="linestepBox"></div>
            </i>
            <p className="stepBox-font stepBox-font2">บริการที่เลือก</p>
            </div>
            <div>
            <i class="fi fi-rs-circle">
                <i class="fi fi-bs-menu-dots"></i>
                <div className="linestepBoxGray"></div>
            </i>
            <p className="stepBox-font stepBox-font3">เพิ่มเติม</p>
            </div>
            <div>
            <i class="fi fi-rs-circle gray">
                <i class="fi fi-rs-money bill wave gray"></i>            
            </i>
            <p className="stepBox-font stepBox-font4 gray">ชำระเงิน</p>
            </div> */}
        </div>
    )
}
export default StepBox1