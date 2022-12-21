import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
const Detail = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const [image, setImage] = useState(
        "https://znews-photo.zingcdn.me/w660/Uploaded/neg_esfjeee/2019_03_15/top32quananngonodanang_1.jpg"
    );

    return (
        <div className="detail">
            <div className="grid wide">
                <div className="detail_wrap">
                    <div className="row">
                        <div className="col c-12 m-6 l-6">
                            <div className="detail_img">
                                <img src={image} />
                            </div>
                            <div className="detail_imgs">
                                <div
                                    onClick={() => {
                                        setImage(
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW4Nak3Jl57ATa6HAJFYwJl0mWcL_qwb8OA&usqp=CAU"
                                        );
                                    }}
                                    className="detail_imgs-small"
                                >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrW4Nak3Jl57ATa6HAJFYwJl0mWcL_qwb8OA&usqp=CAU" />
                                </div>
                                <div
                                    onClick={() => {
                                        setImage(
                                            "https://znews-photo.zingcdn.me/w660/Uploaded/neg_esfjeee/2019_03_15/top32quananngonodanang_1.jpg"
                                        );
                                    }}
                                    className="detail_imgs-small"
                                >
                                    <img src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_esfjeee/2019_03_15/top32quananngonodanang_1.jpg" />
                                </div>
                                <div
                                    onClick={() => {
                                        setImage(
                                            "https://www.thatlangon.com/wp-content/uploads/2020/07/banh-trang-nuong1-e1595311266402.jpg"
                                        );
                                    }}
                                    className="detail_imgs-small"
                                >
                                    <img src="https://www.thatlangon.com/wp-content/uploads/2020/07/banh-trang-nuong1-e1595311266402.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col c-12 m-6 l-6">
                            <div className="detail_infor">
                                <div className="detail_infor_link">
                                    <i>
                                        <Link
                                            className="detail_infor_link_items"
                                            to="/"
                                        >
                                            Home
                                        </Link>
                                        <i
                                            style={{
                                                fontSize: "1rem",
                                                margin: "0 0.5rem",
                                                color: "#56CCF2",
                                            }}
                                            className="fa-solid fa-angles-right"
                                        ></i>
                                        <Link
                                            className="detail_infor_link_items"
                                            to="/asd"
                                        >
                                            Bánh gà thần thánh
                                        </Link>
                                    </i>
                                </div>
                                <div className="detail_infor_title">
                                    <h2>Bánh Gà Thần Thánh</h2>
                                </div>
                                <div className="detail_infor_likes">
                                    <div>
                                        <i
                                            style={{
                                                fontSize: "1.2rem",
                                                marginRight: "0.4rem",
                                            }}
                                            className="fa-solid fa-heart"
                                        ></i>
                                        Yêu thích
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
