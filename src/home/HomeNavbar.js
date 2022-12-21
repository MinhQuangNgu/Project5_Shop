import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import "./style.scss";
const HomeNavbar = ({ name }) => {
    return (
        <div className="home_items_wrap">
            <div className="home_items_title">
                <h2>{name}</h2>
            </div>
            <div className="home_items_card">
                <div className="row">
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                    <div className="col c-6 m-4 l-2">
                        <Card />
                    </div>
                </div>
            </div>
            <div className="home_items_more">
                <Link className="home_items_more_detail" to="/">
                    <i>
                        Xem tất cả{" "}
                        <i
                            style={{ fontSize: "1.5rem" }}
                            className="fa-solid fa-angle-right"
                        ></i>
                    </i>
                </Link>
            </div>
        </div>
    );
};

export default HomeNavbar;
