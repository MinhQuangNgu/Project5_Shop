import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import HeaderMobileA from "./HeaderMobileA";
import HeaderMobileD from "./HeaderMobileD";
const HeaderMobile = () => {
    const [type, setType] = useState(false);

    return (
        <div className="header_mobile">
            <div className="header_mobile_bars">
                <div
                    onClick={() => {
                        setType(true);
                    }}
                    className="header_mobile_bars_container"
                >
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="header_mobile_brand">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                    <h1>
                        <i>ST SHOP</i>
                    </h1>
                    <span>Bảo hành đến miếng cuối cùng</span>
                </Link>
            </div>
            <div className="header_mobile_cart">
                <div className="header_mobile_cart_container">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
            <HeaderMobileA type={type} setType={setType} />
            <HeaderMobileD setType={setType} type={type} />
        </div>
    );
};

export default HeaderMobile;
