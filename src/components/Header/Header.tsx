import React from "react";
import Input from "../Input/Input";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <p className="nav-item">Condelândia</p>
                <p className="nav-item">blog</p>
            </div>
            <div className="header-search">
                <Input />
            </div>
        </div>
    );
};

export default Header;