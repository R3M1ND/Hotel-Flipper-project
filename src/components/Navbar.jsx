import React from "react"
import "../css/Navbar.css"
import Navbar from "react-bootstrap/Navbar"
import { Nav } from "react-bootstrap";
import usericon from "../pic/user-icon.png"


const NavbarHotel = (props) => {
    return (
        <Navbar className="navbar-class" expand="lg" >
            <Navbar.Brand href="/" className="logo-margin" >
                <img src="/LOGO-hotelflipper.png"
                    width="45"
                    height="45"
                    className="d-inline-block "
                    alt="Hotel-Flipper" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-nacbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                <Nav className="nav-class">
                    <Nav.Link href="/ApplyforWork" className="me-5">สมัครเป็นผู้ให้บริการ</Nav.Link>
                    <Nav.Link href="/feedbackpage" className="me-5">ฟีดแบ็ก</Nav.Link>
                    <Nav.Link href="/about" className="me-5">เกี่ยวกับเรา</Nav.Link>
                    {localStorage.getItem('h_id') === undefined ? <Nav.Link href="/SignupPage"><button as="input" type="button" className="btn-register me-5">ลงทะเบียน</button></Nav.Link>
                    : <Nav.Link href="/ProfilePage"><div className="me-5"><img src={usericon} alt="#" className="img-user-navbar" /></div></Nav.Link>}
                </Nav>
            </Navbar.Collapse>

        </Navbar>


    )

}
export default NavbarHotel