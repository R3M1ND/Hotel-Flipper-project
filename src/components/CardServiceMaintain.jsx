import React from "react";
import "../css/CardServiceMaintain.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceMaintain = (props) => {
    return (
        <Row >
            <Col>
                <Card className="box-card-maintain">
                    <Card.Link  href={props.to} className = "card-link-maintain" >
                        <Card.Img variant="top" src={props.maintain.img} className="card-img-maintain" />
                        <Card.Body className="card-body-maintain">
                            <Card.Title className="card-text-maintain">
                                {props.maintain.text}
                            </Card.Title>
                            <Card.Text className="card-text-describe-maintain">
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