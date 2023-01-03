import React from "react";
import "./style.scss";
const Pagination = () => {
    return (
        <div className="paging">
            <div className="paging_items">
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="paging_items active">1</div>
            <div className="paging_items">2</div>
            <div className="paging_items">
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    );
};

export default Pagination;
