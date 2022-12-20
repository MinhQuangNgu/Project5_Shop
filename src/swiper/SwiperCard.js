import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const SwiperCard = () => {
    return (
        <div className="swiper_card_container">
            <Link to="">
                <img
                    className="swiper_card_img"
                    src="https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg"
                />
            </Link>
        </div>
    );
};

export default SwiperCard;
