import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="grid wide">
                <div className="header_container">
                    <div className="row">
                        <div className="col c-0 m-0 l-3">
                            <div className="header_search_container">
                                <div className="header_search_wrap">
                                    <input type="text" placeholder="Tìm kiếm" />
                                    <div className="header_search_icon">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col c-12 m-12 l-6-2">
                            <div className="header_slogan">
                                <p>
                                    CAM KẾT CHÍNH HÃNG - HOÀN TIỀN 500% GIÁ TRỊ
                                    SẢN PHẨM NẾU PHÁT HIỆN HÀNG FAKE
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
                                <Link className="header_auth_link" to="/">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <div className="header_auth_link_number">
                                        0
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_navbar"></div>
            </div>
        </div>
    );
};

export default Header;
