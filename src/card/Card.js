import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Card = () => {
    return (
        <div className="card">
            <Link style={{ textDecoration: "none" }} to="/">
                <div className="card_img">
                    <img src="https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-chi%C3%AAn-tr%E1%BB%A9ng-ngon-mi%E1%BB%87ng-cho-b%E1%BB%AFa-s%C3%A1ng.jpg" />
                </div>
                <div className="card_infor">
                    <div className="card_infor_title">
                        Bánh Tráng Minh Quang
                    </div>
                    <div className="card_infor_price">
                        <div className="card_infor_price_old">120.000 đ</div>
                        <div className="card_infor_price_new">200.000 đ</div>
                    </div>
                    <div className="card_infor_button">
                        <button>Chọn mua</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
