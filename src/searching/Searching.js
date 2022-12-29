import React, { useState } from "react";
import "./style.scss";
import Select from "react-select";
import Card from "../card/Card";
const Searching = () => {
    const options = [
        { value: "ha-noi", label: "Hà Nội" },
        { value: "strawberry", label: "TP Hồ Chí Minh" },
        { value: "vanilla", label: "Vũng Tàu" },
        { value: "vanilla", label: "Huế" },
        { value: "vanilla", label: "Cần Thơ" },
        { value: "vanilla", label: "Tân Xã" },
    ];

    const optionsKind = [
        { value: "ha-noi", label: "Nước Uống" },
        { value: "strawberry", label: "Đồ Ăn Nhanh" },
        { value: "vanilla", label: "Đồ Ăn Chậm" },
    ];

    const optionsSort = [
        { value: "ha-noi", label: "Yêu Thích Tăng" },
        { value: "strawberry", label: "Yêu Thích Giảm" },
        { value: "vanilla", label: "Số Sao Tăng" },
        { value: "vanilla", label: "Số Sao Giảm" },
        { value: "vanilla", label: "Số Người Đánh Giá Tăng" },
        { value: "vanilla", label: "Số Người Đánh Giá Giảm" },
        { value: "vanilla", label: "Mới Nhất" },
        { value: "vanilla", label: "Cũ Nhất" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="search">
            <div className="grid wide">
                <div className="search_wrap">
                    <div className="search_wrap_search">
                        <Select
                            className="search_wrap_select"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            placeholder="Chọn vị trí"
                        />
                        <Select
                            className="search_wrap_select"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={optionsKind}
                            placeholder="Chọn loại"
                        />
                        <Select
                            className="search_wrap_select"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={optionsSort}
                            placeholder="Sắp xếp"
                        />
                        <button>Tìm Kiếm</button>
                    </div>
                    <div className="search_wrap_card">
                        <div className="row">
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                            <div className="col c-6 m-4 l-2">
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searching;
