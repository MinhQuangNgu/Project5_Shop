import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
const Detail = () => {
    const { slug } = useParams();

    const [quantity, setQuantity] = useState(1);

    const [star, setStar] = useState(null);
    const [hover, setHover] = useState(null);

    const starArr = Array(5).fill(0);

    const [type, setType] = useState(1);

    const clipPath = {
        clipPath: "inset(0% 20% 0% 0%)",
    };

    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.innerHTML = "";
        }
    }, [slug, contentRef]);

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
                                    <h2>
                                        Bánh Gà Thần Thánh Bánh Gà Thần Thánh
                                    </h2>
                                </div>
                                <div className="detail_infor_likes">
                                    <div className="detail_infor_likes_like">
                                        <i
                                            style={{
                                                fontSize: "1.2rem",
                                                marginRight: "0.4rem",
                                            }}
                                            className="fa-solid fa-heart"
                                        ></i>
                                        Yêu thích
                                    </div>
                                    <div className="detail_infor_likes_star">
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <div
                                            style={clipPath}
                                            className="detail_infor_likes_star-color"
                                        >
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="detail_infor_likes_number">
                                        <i>12 lượt đánh giá</i>
                                    </div>
                                </div>
                                <div className="detail_infor_information">
                                    <span>
                                        Thực phẩm, cũng gọi là thức ăn là bất kỳ
                                        vật phẩm nào, bao gồm chủ yếu các chất:
                                        chất bột, chất béo, chất đạm, khoáng
                                        chất, hoặc nước, mà con người hay động
                                        vật có thể ăn hay uống được, với mục
                                        đích cơ bản là thu nạp các chất dinh
                                        dưỡng nhằm nuôi dưỡng cơ thể hay vì sở
                                        thích.
                                    </span>
                                </div>
                                {/* <div className="detail_infor_price">
                                    <i>120,000 đ</i>
                                </div> */}
                                <div className="detail_infor_price_2">
                                    <i className="detail_infor_price_2_1">
                                        120,000 đ
                                    </i>
                                    <i className="detail_infor_price_2_2">
                                        200,000 đ
                                    </i>
                                </div>
                                <div className="detail_infor_serves">
                                    <div
                                        onClick={() => {
                                            setQuantity(1);
                                        }}
                                        className={
                                            quantity === 1
                                                ? "detail_infor_serves_items active"
                                                : "detail_infor_serves_items"
                                        }
                                    >
                                        1
                                    </div>
                                    <div
                                        onClick={() => {
                                            setQuantity(2);
                                        }}
                                        className={
                                            quantity === 2
                                                ? "detail_infor_serves_items active"
                                                : "detail_infor_serves_items"
                                        }
                                    >
                                        2
                                    </div>
                                    <div
                                        onClick={() => {
                                            setQuantity(3);
                                        }}
                                        className={
                                            quantity === 3
                                                ? "detail_infor_serves_items active"
                                                : "detail_infor_serves_items"
                                        }
                                    >
                                        3
                                    </div>
                                    <div
                                        onClick={() => {
                                            setQuantity(4);
                                        }}
                                        className={
                                            quantity === 4
                                                ? "detail_infor_serves_items active"
                                                : "detail_infor_serves_items"
                                        }
                                    >
                                        4
                                    </div>
                                    <div
                                        onClick={() => {
                                            setQuantity(5);
                                        }}
                                        className={
                                            quantity === 5
                                                ? "detail_infor_serves_items active"
                                                : "detail_infor_serves_items"
                                        }
                                    >
                                        5+
                                    </div>
                                </div>
                                <div className="detail_infor_button">
                                    <button>Thêm Vào Giỏ Hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail_body">
                    <div className="detail_body_navbar">
                        <div className="detail_body_navbar_items">
                            <div
                                onClick={() => {
                                    setType(1);
                                }}
                                className={
                                    type === 1
                                        ? "detail_body_navbar_items_item active"
                                        : "detail_body_navbar_items_item"
                                }
                            >
                                Cách Làm
                            </div>
                            <div
                                onClick={() => {
                                    setType(2);
                                }}
                                className={
                                    type === 2
                                        ? "detail_body_navbar_items_item active"
                                        : "detail_body_navbar_items_item"
                                }
                            >
                                Đánh Giá
                            </div>
                        </div>
                    </div>
                    <div className="detail_body_infor">
                        {type === 1 && (
                            <div
                                ref={contentRef}
                                className="detail_body_infor_content_1"
                            ></div>
                        )}
                        <div className="detail_body_infor_content_2">
                            <div className="detail_body_infor_content_title">
                                <div>
                                    <i
                                        style={{
                                            marginRight: "0.5rem",
                                            marginTop: "0.5rem",
                                        }}
                                        className="fa-solid fa-comment"
                                    ></i>
                                    <h2>Đánh Giá</h2>
                                </div>
                                <div>
                                    {starArr.map((_, index) => (
                                        <i
                                            onMouseOver={() => {
                                                setHover(index + 1);
                                            }}
                                            onMouseLeave={() => {
                                                setHover(null);
                                            }}
                                            onClick={() => {
                                                setStar(index + 1);
                                            }}
                                            key={index + "star"}
                                            className={
                                                hover
                                                    ? hover > index
                                                        ? "fa-solid fa-star"
                                                        : "fa-regular fa-star"
                                                    : star > index
                                                    ? "fa-solid fa-star"
                                                    : "fa-regular fa-star"
                                            }
                                        ></i>
                                    ))}
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
