import React from "react";
import { Link } from "react-router-dom";
import "../css/StickyCart.css"
import imgcart from "../pic/cart.png";

const StickyCart = (props) => {
    return (
        <Link to='/cart'>
            <div className="box-cart">
                <img src={imgcart} alt="cart" className="box-img-cart" />
            </div>
        </Link>
    )
}
export default StickyCart