import React, { useState } from "react";

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
                <img
                    src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_esfjeee/2019_03_15/top32quananngonodanang_1.jpg"
                    alt="Giỏ hàng"
                />
            </div>
            <div className="cart_wrap_card_title">
                <div>
                    <div>
                        <h2>Bánh tráng trộn không đường không nhân</h2>
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
