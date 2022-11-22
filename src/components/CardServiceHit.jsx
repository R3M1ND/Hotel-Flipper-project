import React from "react";
import "../css/CardServiceHit.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CardServiceHit = (props) => {
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
                <Card.Link onClick={(e) => {sendDetail(e,props.t_id)}} >
                    <Card className="box-card">
                        <Card.Img variant="top" src={props.s_imgPath} className="card-img" />
                        <Card.Body>
                            <Card.Text className="card-text">
                                {props.s_type}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Link>
            </Col>
        </Row>
    )
}
export default CardServiceHit