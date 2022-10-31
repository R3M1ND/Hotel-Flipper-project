import React from "react";
import "../css/CardServiceGeneral.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceGeneral = (props) => {
    return (
        <Row >
            <Col>
                <Card className="box-card-general">
                    <Card.Link  href={props.to} className = "card-link-general" >
                        <Card.Img variant="top" src={props.general.img} className="card-img-general" />
                        <Card.Body className="card-body-general">
                            <Card.Title className="card-text-general">
                                {props.general.text}
                            </Card.Title>
                            <Card.Text className="card-text-describe-general">
                                เริ่มต้น {props.general.describe} บาท
                            </Card.Text>
                        </Card.Body>
                    </Card.Link>
                </Card>
            </Col>
        </Row>
    )
}
export default CardServiceGeneral