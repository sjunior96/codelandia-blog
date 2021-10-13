import React from "react";
import "./BoxContainer.css";

type BoxContainerProps = {
    children?: React.ReactNode;
};

const BoxContainer = (props: BoxContainerProps) => {
    const { children } = props;
    return (
        <div className="box-container">
            {children}
        </div>
    );
};

export default BoxContainer;