import React from "react"
import '../css/paymentModal.css'

const PaymentModal=({closeModal})=>{
    return(
        <div className="overlay">
        <div className="payment-ModalBox">
            <button className="payment-ModalButton" onClick={()=>closeModal(false)}>X</button>
            <i class="fi fi-rs-receipt"></i>
            <div className="payment-ModalFont payment-ModalFontPos">ทำรายการสำเร็จ</div>
            <div className="payment-ModalFont payment-ModalFont2">order no. 12345678</div>
        </div>
        </div>
    )
}
export default PaymentModal