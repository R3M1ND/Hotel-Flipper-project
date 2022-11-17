import React from "react"
import "../css/Navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import imgmaintain1 from "../pic/maintain1.png"

const NavbarHotel = (props) => {
    return (
        <Navbar className="navbar-class" expand="lg" >
            <Navbar.Brand href="/" className="logo-margin">logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-nacbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                <Nav className="nav-class">
                    <Nav.Link href="#" className="me-5">สมัครเป็นผู้ให้บริการ</Nav.Link>
                    <Nav.Link href="/about" className="me-5">ฟีดแบ็ก</Nav.Link>
                    <Nav.Link href="/about" className="me-5">เกี่ยวกับเรา</Nav.Link>
                    {/* <Nav.Link to="#"><button as="input" type="button" className="btn-register me-5">ลงทะเบียน</button></Nav.Link> */}
                    <Nav.Link to="#"><div className="circle-user me-5"><img src={imgmaintain1} alt="#" className="img-user-navbar"/></div></Nav.Link>

                </Nav>
            </Navbar.Collapse>

        </Navbar>


    )

}
export default NavbarHotel