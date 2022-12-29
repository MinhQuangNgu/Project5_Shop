import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartCard = () => {
    const [love, setLove] = useState(false);
    return (
        <div className="cart_wrap_card">
            <div className="cart_wrap_card_icons">
                <i className="fa-solid fa-xmark"></i>
                <i
                    onClick={() => {
                        setLove(!love);
                    }}
                    style={love ? { color: "red" } : {}}
                    className="fa-solid fa-heart"
                ></i>
            </div>
            <div className="cart_wrap_card_image">
                <Link className="cart_wrap_card_image_wrap" to="/">
                    <img
                        className="card_wrap_card_image_detail"
                        src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_esfjeee/2019_03_15/top32quananngonodanang_1.jpg"
                        alt="Giỏ hàng"
                    />
                </Link>
            </div>
            <div className="cart_wrap_card_title">
                <div>
                    <div>
                        <Link
                            style={{
                                textDecoration: "none",
                                color: "rgba(0,0,0,0.6)",
                            }}
                            to="/"
                        >
                            <h2>Bánh tráng trộn không đường không nhân</h2>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="https://cdn.tgdd.vn/Files/2021/09/29/1386493/cach-lam-banh-trang-tron-gion-ngon-doc-la-mon-an-vat-cuc-de-lam-202109291231250246.jpg"
                            alt="Giỏ hàng"
                        />
                        <img
                            src="https://cdn.tgdd.vn/Files/2021/09/29/1386493/cach-lam-banh-trang-tron-gion-ngon-doc-la-mon-an-vat-cuc-de-lam-202109291231250246.jpg"
                            alt="Giỏ hàng"
                        />
                        <img
                            src="https://cdn.tgdd.vn/Files/2021/09/29/1386493/cach-lam-banh-trang-tron-gion-ngon-doc-la-mon-an-vat-cuc-de-lam-202109291231250246.jpg"
                            alt="Giỏ hàng"
                        />
                    </div>
                </div>
            </div>
            <div className="cart_wrap_card_number">
                <div>
                    <div>-</div>
                    <span>20</span>
                    <div>+</div>
                </div>
            </div>
            <div className="cart_wrap_card_price">
                <i>200.000 đ</i>
            </div>
        </div>
    );
};

export default CartCard;
