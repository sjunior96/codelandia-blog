import React from "react";
import SerachIcon from "../../assets/icons/SearchIcon";
import "./Input.css";

const Input = () => {
    return (
        <div className="input">
            <button className="input-button">
                <SerachIcon />
            </button>
            <input placeholder="Pesquisar no blog" />
        </div>
    );
};

export default Input;