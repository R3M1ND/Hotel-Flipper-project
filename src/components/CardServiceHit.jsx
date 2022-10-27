import React from "react";
import "../css/CardServiceHit.css"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const CardServiceHit = (props) => {
    return (
        <Row >
            <Col>
                <Card.Link href={props.to} >
                    <Card className="box-card">
                        <Card.Img variant="top" src={props.imgHit} className="card-img" />
                        <Card.Body>
                            <Card.Text className="card-text">
                                {props.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Card.Link>
            </Col>
        </Row>
    )
}
export default CardServiceHit