import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <div className="default_container">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;
