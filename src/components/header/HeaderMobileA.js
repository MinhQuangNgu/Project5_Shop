import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileItems from "./MobileItems";

const HeaderMobileA = ({ type, setType }) => {
    const [fastFood, setfastFood] = useState(false);
    const [slowFood, setSlowFood] = useState(false);
    const [water, setWater] = useState(false);

    return (
        <div className={type ? "header_mobileA" : "header_mobileA_dis"}>
            <div className="header_mobile_main">
                <div className="header_mobile_times">
                    <i
                        onClick={() => {
                            setType(false);
                        }}
                        style={{ cursor: "pointer" }}
                        className="fa-regular fa-circle-xmark"
                    ></i>
                </div>
                <ul className="header_mobile_auth">
                    <Link className="header_mobile_auth_link" to="/">
                        <li>Đăng Nhập</li>
                    </Link>
                    <Link className="header_mobile_auth_link" to="/">
                        <li>Đăng Ký</li>
                    </Link>
                    <li
                        onClick={() => {
                            setfastFood(!fastFood);
                        }}
                        className="header_mobile_auth_items"
                    >
                        Đồ Ăn Nhanh
                        <i
                            style={{ fontSize: "1.4rem" }}
                            className={
                                fastFood
                                    ? "fa-solid fa-angle-up"
                                    : "fa-solid fa-angle-down"
                            }
                        ></i>
                    </li>
                    {fastFood && (
                        <MobileItems
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
                    )}
                    <li
                        onClick={() => {
                            setSlowFood(!slowFood);
                        }}
                        className="header_mobile_auth_items"
                    >
                        Đồ Ăn Chậm
                        <i
                            style={{ fontSize: "1.4rem" }}
                            className={
                                slowFood
                                    ? "fa-solid fa-angle-up"
                                    : "fa-solid fa-angle-down"
                            }
                        ></i>
                    </li>
                    {slowFood && (
                        <MobileItems
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
                    )}
                    <li
                        onClick={() => {
                            setWater(!water);
                        }}
                        className="header_mobile_auth_items"
                    >
                        Nước Uống
                        <i
                            style={{ fontSize: "1.4rem" }}
                            className={
                                water
                                    ? "fa-solid fa-angle-up"
                                    : "fa-solid fa-angle-down"
                            }
                        ></i>
                    </li>
                    {water && (
                        <MobileItems
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
                    )}
                </ul>
            </div>
        </div>
    );
};

export default HeaderMobileA;
