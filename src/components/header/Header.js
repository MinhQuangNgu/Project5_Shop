import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import HeaderNavbarItems from "./HeaderNavbarItems";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
    return (
        <div className="header">
            <div className="header_wrap">
                <div className="grid wide">
                    <div className="header_container">
                        <div className="row">
                            <div className="col c-0 m-0 l-3">
                                <div className="header_search_container">
                                    <div className="header_search_wrap">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm"
                                        />
                                        <div className="header_search_icon">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col c-12 m-12 l-6-2">
                                <div className="header_slogan">
                                    <p>
                                        CAM KẾT CHÍNH HÃNG - HOÀN TIỀN 500% GIÁ
                                        TRỊ SẢN PHẨM NẾU PHÁT HIỆN HÀNG FAKE
                                    </p>
                                </div>
                            </div>
                            <div className="col c-0 m-0 l-2-4">
                                <div className="header_auth">
                                    <Link className="header_auth_link" to="/">
                                        Đăng Ký
                                    </Link>
                                    <Link className="header_auth_link" to="/">
                                        Đăng Nhập
                                    </Link>
                                    <Link
                                        className="header_auth_link"
                                        to="/cart"
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <div className="header_auth_link_number">
                                            0
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_navbar">
                <div className="grid wide">
                    <div className="row">
                        <div className="col c-0 m-0 l-12">
                            <div className="header_navbar_container">
                                <Link to="/">
                                    <div className="header_navbar_brand">
                                        <img src="https://res.cloudinary.com/sttruyen/image/upload/v1660379654/295631243_1022629278418391_936904009150532582_n_rdsnbh.png" />
                                    </div>
                                </Link>
                                <ul className="header_navbar_items">
                                    <li>
                                        Vị trí{" "}
                                        <i className="fa-solid fa-angle-down fa_items"></i>
                                        <HeaderNavbarItems
                                            items={[
                                                {
                                                    name: "Hà Nội",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "TP Hồ Chí Minh",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Vũng Tàu",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Huế",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Cần Thơ",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Tân Xã",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        Đồ ăn nhanh{" "}
                                        <i className="fa-solid fa-angle-down fa_items"></i>
                                        <HeaderNavbarItems
                                            items={[
                                                {
                                                    name: "Bánh Mỳ",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Salad Rau Trộn",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Sữa Chua",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Trứng Luộc Với Rau",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Gà Rán",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Pizza",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        Đồ ăn chậm{" "}
                                        <i className="fa-solid fa-angle-down fa_items"></i>
                                        <HeaderNavbarItems
                                            items={[
                                                {
                                                    name: "Phở",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Nem Nướng",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Bún Bò",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Cơm Chiên Gà",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Bún Thịt Nướng",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Bánh Mỳ Chảo",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        Nước uống{" "}
                                        <i className="fa-solid fa-angle-down fa_items"></i>
                                        <HeaderNavbarItems
                                            items={[
                                                {
                                                    name: "Nước Cam",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Cà Phê",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Trà Tắc",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Trà Đào",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Nước Mía",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                                {
                                                    name: "Nước Sôi",
                                                    slug: "/tim-kiem?location=ha-noi",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                            to="/"
                                        >
                                            Đồ ăn yêu thích
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            style={{
                                                textDecoration: "none",
                                                color: "black",
                                            }}
                                            to="/"
                                        >
                                            Nước uống yêu thích
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col c-12 m-12 l-0">
                            <HeaderMobile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
