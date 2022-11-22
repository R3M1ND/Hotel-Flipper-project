import React from "react";
import "../css/CardServiceCovid.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const CardServiceCovid = (props) => {
    const [isClick, setIsClick] = useState(false)
    const navigate = useNavigate()
  
    const sendDetail = async(e,getId) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3001/api/servicetype/${getId}`)
        .then(function (res){
            if(res.status == 200){
                console.log('data card : ',res)
                
                navigate(String('/detailpage?Id=' + getId),res.data)
            }
        })
        .catch(err => console.log('err ${err}'))
        setIsClick(true) 
    }
    useEffect(() => {
        console.log("send data -> ",isClick)
    },[])

    return (
        <Row >
            <Col>
                <Card className="box-card-covid">
                    <Card.Link  className = "card-link-covid" onClick={(e) => {sendDetail(e,props.t_id)}} >
                        <Card.Img variant="top" src={props.s_imgPath} className="card-img-covid" />
                        <Card.Body className="card-body-covid">
                            <Card.Title className="card-text-covid">
                                {props.s_type}
                            </Card.Title>
                            <Card.Text className="card-text-describe-covid">
                                เริ่มต้น {props.s_price} บาท
                            </Card.Text>
                            
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceCovid