import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const HeaderNavbarItems = ({ items }) => {
    return (
        <ul className="header_navbar_item_detail">
            {items.map((item, index) => (
                <Link
                    key={item?.name}
                    className="header_navbar_item_detail_link"
                    to={item?.slug}
                >
                    <li>{item?.name}</li>
                </Link>
            ))}
        </ul>
    );
};

export default HeaderNavbarItems;
