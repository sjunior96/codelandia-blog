import React from "react";
import { TBoxContainerProps } from "../../types";
import "./BoxContainer.css";

const BoxContainer = (props: TBoxContainerProps) => {
    const { children } = props;
    return (
        <div className="box-container">
            {children}
        </div>
    );
};

export default BoxContainer;