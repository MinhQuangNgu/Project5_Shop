import React from "react";

const HeaderMobileA = ({ type, setType }) => {
    return (
        <div className={type ? "header_mobileA" : "header_mobileA_dis"}>
            <div className="header_mobile_times">
                <i
                    onClick={() => {
                        setType(false);
                    }}
                    style={{ cursor: "pointer" }}
                    className="fa-regular fa-circle-xmark"
                ></i>
            </div>
            <ul className="header_mobile_auth"></ul>
        </div>
    );
};

export default HeaderMobileA;
