import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Card = () => {
    return (
        <div className="card">
            <Link to="/">
                <div className="card_img">
                    <img src="https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-chi%C3%AAn-tr%E1%BB%A9ng-ngon-mi%E1%BB%87ng-cho-b%E1%BB%AFa-s%C3%A1ng.jpg" />
                </div>
            </Link>
        </div>
    );
};

export default Card;
