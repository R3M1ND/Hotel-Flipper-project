import React from "react";
import "../css/CardServiceSecure.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceSecure = (props) => {
    return (
        <Row >
            <Col>
                <Card className="box-card-secure">
                    <Card.Link  href={props.to} className = "card-link-secure" >
                        <Card.Img variant="top" src={props.secure.img} className="card-img-secure" />
                        <Card.Body className="card-body-secure">
                            <Card.Title className="card-text-secure">
                                {props.secure.text}
                            </Card.Title>
                            <Card.Text className="card-text-describe-secure">
                                เริ่มต้น {props.secure.describe} บาท
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceSecure