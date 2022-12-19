import React from "react";
import { Link } from "react-router-dom";

const MobileItems = ({ items }) => {
    return (
        <ul className="header_mobile_auth_items_container">
            {items?.map((item, index) => (
                <Link
                    key={item?.name + index + "mobile"}
                    className="header_mobile_auth_items_link_container"
                    to={item?.slug}
                >
                    <li>{item?.name}</li>
                </Link>
            ))}
        </ul>
    );
};

export default MobileItems;
