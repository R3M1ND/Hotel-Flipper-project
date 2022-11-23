import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import '../css/servicePayment.css'
import mastercard from '../pic/visa.png'
import pp from '../pic/pp.jpg'
import pp2 from '../pic/pp2.png'
import QRCODE from 'qrcode'
import PaymentModal from '../components/paymentModal'
import axios from 'axios'
const ServicePayment = (props) =>{

    <ServicePayment text="hello" />
    const[state,setState]=useState('')
    const[isSubmit,setIsSubmit] = useState(false)
    const[details,setDetails] = useState({cardnum:"",name:"",expireddate:"",securecode:""})
    //set Qrcode
    const[src,setSrc] = useState('')
    const[srcP,setSrcP] = useState('')

    //st Modal
    const[openModal,setOpenModal]=useState(false)
    
    const handleChange =async (e)=>{    
        setState(e.target.value)
    }
    
    const handleChangePayment = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }

    //ส่งให้backตรงนี้
    const submitHandler=e=>{
        e.preventDefault();
        setIsSubmit(true)
        setOpenModal(true)
    }
    
    useEffect(()=>{
        qrcode()
    },[])

    const [qrcodeData,setQrcodeData] = useState("")

    const qrcode = async() =>{
        const data = {
            OId:"6370daaf7209bb6743349e23",
            bankID:"KBank",
            amount:Number(props.total)
        }
        const res = await axios.post('http://localhost:3003/api/payment/QRpayment',data)
        .then(res=>{
            
            QRCODE.toDataURL(res.data.qrCode).then((setSrc))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    const qrcodeP = async() =>{
        const data = {
            OId:"6370daaf7209bb6743349e23",
            bankID:"4QU",
            amount:Number(props.totalPrice)
        }

        const res = await axios.post('http://localhost:3003/api/payment/QRpayment',data)
        .then(res=>{
            
            QRCODE.toDataURL(res.data.qrcode).then((setSrcP))
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(res)
    }

    return(
        <div className="paymentBox">
            <div className="payment-Topic">ข้อมูลการชำระเงิน</div>
            
            
            <div className="payment-font">    
                <input type="radio" className="payment-radiopost" name="state" value="1" onChange={handleChange}></input>
                ชำระด้วย qr-code

                {state==='1' && (
                <div className="payment-radiopost">
                    <div className="payment-promptpayBox">
                        <div className="payment-promptpayHeader">
                            <div className="payment-promptpayPos">
                            <img src={pp} alt="Logo" width="150" height="60" className="payment-promptpaylogoPos" ></img>
                            <img src={pp2} alt="Logo" width="90" height="30" className="payment-promptpaylogoPos2" ></img>
                            <div><img src={src} width="250" height="250" className="payment-qrcodePos"></img></div>
                            <div className="payment-namePos">Hotel Flipper</div>
                            <div>บัญชี: บริษัทโฮเต็ลฟลิปเปอร์จำกัด</div>
                            </div>
                        </div>
                        
                    </div>
                
                </div>)}
            </div>

            <div className="payment-font">
                <input type="radio" className="payment-radiopost" name="state" value="2" onChange={handleChange}></input>
                ชำระด้วยบัตรเครดิต
                {state==='2' && (
                
                <div className="payment-creditcardBox">
                    <img src={mastercard} alt="Logo" width="280" height="50" className="mastercard" ></img>
                    <div className="payment-pos">Card Number</div>
                    <input type="text" name="cardnum" value={details.cardnum} onChange={handleChangePayment} className="payment-input" placeholder="1234 5678 9012 3456"></input>
                    <div className="payment-pos">Name on card</div>
                    <input type="text" name="name" value={details.name} onChange={handleChangePayment}className="payment-input" placeholder="Ex. Jesse Pinkman"></input>
                    <div className="payment-grid">
                        <div>Expiry date
                        <input type="text" name="expireddate" value={details.expireddate} onChange={handleChangePayment} className="payment-input2" placeholder="01/19"></input>
                        </div>
                        <div>Security code
                        <input type="password" name="securecode" value={details.securecode} onChange={handleChangePayment}className="payment-input2" placeholder="***"></input>
                        </div>
                    </div>
                </div>
                )}
            </div>

            <div className="payment-font">    
                <input type="radio" className="payment-radiopost" name="state" value="3" onChange={handleChange}></input>
                ชำระด้วยธนาคารอื่นๆ
                {state==='3' && (
                <div>
                    <div className="payment-radiopost">
                    <div className="payment-NewBankBox">
                            <div className="payment-promptpayPos">
                            <div><img src={srcP} width="250" height="250" className="payment-qrcodePos"></img></div>
                            <div className="payment-namePos">4QPLUS</div>
                            <div>บัญชี: 4QPLUS</div>
                            </div>
                        
                    </div>
                
                </div>
                </div>
                
                )}   
            </div>    

            <button type="submit" className="payment-button" onClick={submitHandler}>เสร็จสิ้น</button>
                {openModal===true && <PaymentModal closeModal={setOpenModal}/>}
        </div>
    )
}
export default ServicePayment