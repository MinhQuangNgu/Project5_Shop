import React from "react";

const HeaderMobileD = ({ setType, type }) => {
    return (
        <div
            onClick={() => {
                setType(false);
            }}
            className={type ? "header_mobileD" : "header_mobileD_dis"}
        ></div>
    );
};

export default HeaderMobileD;
