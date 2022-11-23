import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/StickyCart.css"
import imgcart from "../pic/cart.png";

const StickyCart = (props) => {
    const h_id = '170' // localStorage.getItem('h_id')
    const navigate = useNavigate()

    const linkCart = (e, getId) => {
        var _test = getId.then(getId => { 
            e.preventDefault()
            navigate(String('/cart?cart=' + getId))

        })
    }
    const fetchUser = async() => {
        const res = await axios.get(`http://localhost:3002/api/cartuser/user=${h_id}`)

        //check cart new member : useCreatCart
        if(res.data.cartuser === null) {
            const data ={
                "u_id": h_id
            }
            const create = await axios.post(`http://localhost:3002/api/cartuser/create`, data)
            return create.data.cartuser.cart_id
        }
        else{
            return res.data.cartuser.cart_id
        }
    }

    return (
        <Link to='/cart' onClick={(e) => { linkCart(e, fetchUser().then(res => { return res }));}}>
            <div className="box-cart">
                <img src={imgcart} alt="cart" className="box-img-cart" />
            </div>
        </Link>
    )
}
export default StickyCart