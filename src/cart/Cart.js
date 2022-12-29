import React, { useState } from "react";
import CartCard from "./CartCard";
import "./style.scss";
const Cart = () => {
    return (
        <div className="cart">
            <div className="grid wide">
                <div className="cart_container">
                    <div className="row">
                        <div className="col c-10 m-10 l-8 l-o-2 c-o-1 m-o-1">
                            <div className="cart_wrap">
                                <div className="cart_wrap_title">
                                    <h2>Giỏ Hàng</h2>
                                </div>
                                <div className="cart_wrap_items">
                                    <CartCard />
                                    <CartCard />
                                    <CartCard />
                                    <CartCard />
                                    <CartCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
