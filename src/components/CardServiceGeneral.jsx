import React from "react";
import "../css/CardServiceGeneral.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CardServiceGeneral = (props) => {
    const [isClick, setIsClick] = useState(false)
    const navigate = useNavigate()
  
    const sendDetail = async(e,getId) => {
        e.preventDefault()
        const res = await axios.get(`http://localhost:3000/api/servicetype/${getId}`)
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
                <Card className="box-card-general">
                    <Card.Link  className = "card-link-general" onClick={(e) => {sendDetail(e,props.t_id)}}>
                        <Card.Img variant="top" src={props.s_imgPath} className="card-img-general" />
                        <Card.Body className="card-body-general">
                            <Card.Title className="card-text-general">
                                {props.s_type}
                            </Card.Title>
                            <Card.Text className="card-text-describe-general">
                                เริ่มต้น {props.s_price} บาท
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceGeneral