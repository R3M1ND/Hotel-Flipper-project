import React from "react";
import "../css/CardServiceMaintain.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceMaintain = (props) => {
    return (
        <Row >
            <Col>
                <Card className="box-card-covid">
                    <Card.Link  href={props.to} className = "card-link-covid" >
                        <Card.Img variant="top" src={props.maintain.img} className="card-img-covid" />
                        <Card.Body className="card-body-covid">
                            <Card.Title className="card-text-covid">
                                {props.maintain.text}
                            </Card.Title>
                            <Card.Text className="card-text-describe-covid">
                                เริ่มต้น {props.maintain.describe} บาท
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceMaintain