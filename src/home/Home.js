import React from "react";
import clsx from "clsx";
import "./style.scss";
import SwiperJS from "../swiper/SwiperJS";
import Card from "../card/Card";
const Home = () => {
    return (
        <div className="home_container">
            <div className="home_searching_container">
                <div className="home_searching_title">
                    Đặt món nào cũng <span>mất tiền ship</span>
                </div>
                <div className="home_searching_input_container">
                    <div className="home_searching_input_wrap">
                        <div className="home_searching_icons">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input type="text" placeholder="Tìm đồ ăn yêu thích" />
                    </div>
                </div>
            </div>
            <div className="grid wide">
                <div className="home_wrap">
                    <div className="home_swiper_container">
                        <div className="row">
                            <div className="col c-0 m-0 l-12">
                                <SwiperJS num={3} />
                            </div>
                            <div className="col c-12 m-12 l-0">
                                <SwiperJS num={1} />
                            </div>
                        </div>
                    </div>
                    <div className="home_items_wrap">
                        <div className="home_items_title">
                            <h2>Khám phá món mới</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
