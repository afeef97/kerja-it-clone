import React from "react";

const Button = ({ variation = "solid", children, ...buttonHandlers }) => {
    let buttonStyle;
    switch (variation) {
        case "solid":
            buttonStyle =
                "bg-black text-base text-white leading-9 font-medium rounded-md w-[277px] px-4";
            break;
        case "outline":
            buttonStyle =
                "text-base text-black leading-9 font-medium border rounded-md w-[277px] px-4";
            break;
        case "ghost":
            buttonStyle =
                "text-base text-black leading-9 font-medium rounded w-[277px] px-4";
            break;
    }

    // TODO: Add button handlers
    return <button className={buttonStyle}>{children}</button>;
};

export default Button;
