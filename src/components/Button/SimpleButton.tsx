import React from "react";
import { TButtonProps } from "../../types";
import './SimpleButton.css';

const SimpleButton = (props: TButtonProps) => {
    return (
        <button className="simple-btn">{props.children}</button>
    );
};

export default SimpleButton;