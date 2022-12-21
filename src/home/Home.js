import React from "react";
import "./style.scss";
import SwiperJS from "../swiper/SwiperJS";
import HomeNavbar from "./HomeNavbar";
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
                    <HomeNavbar name="Khám phá món mới" />
                    <HomeNavbar name="Món yêu thích" />
                </div>
            </div>
        </div>
    );
};

export default Home;
