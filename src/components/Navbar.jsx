import React from "react"
import "../css/Navbar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";


const NavbarHotel = () => {
    return (
        <Navbar className="navbar-class" expand = "lg" >
            <Container>         
                <Navbar.Brand href="#home" className="ms-5">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-nacbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav className="nav-class">
                        <Nav.Link href="#" className="me-5" >บริการ</Nav.Link>
                        <Nav.Link href="#" className="me-5">สมัครเป็นผู้ให้บริการ</Nav.Link>
                        <Nav.Link href="#" className="me-5">เกี่ยวกับเรา</Nav.Link>
                        <Nav.Link href="#" className="me-5">ติดต่อเรา</Nav.Link>
                        <Nav.Link to="#"><button as="input" type="button" className="btn-register ">ลงทะเบียน</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>   
        </Navbar>


    )

}
export default NavbarHotel