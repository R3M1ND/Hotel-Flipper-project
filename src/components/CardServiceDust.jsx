import React from "react";
import "../css/CardServiceDust.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceDust = (props) => {
    return (
        <Row >
            <Col>
                <Card className="box-card-dust">
                    <Card.Link  href={props.to} className = "card-link-dust" >
                        <Card.Img variant="top" src={props.dust.img} className="card-img-dust" />
                        <Card.Body className="card-body-dust">
                            <Card.Title className="card-text-dust">
                                {props.dust.text}
                            </Card.Title>
                            <Card.Text className="card-text-describe-dust">
                                เริ่มต้น {props.dust.describe} บาท
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceDust