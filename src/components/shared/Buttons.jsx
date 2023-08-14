import React from "react";

const Button = ({ variation, customStyle, children, ...buttonHandlers }) => {
    let buttonStyle;
    switch (variation) {
        case "solid":
            buttonStyle =
                customStyle +
                " bg-black text-base text-white leading-9 font-bold rounded-md w-[277px]";
            break;
        case "outline":
            buttonStyle =
                customStyle +
                " text-base text-black leading-9 font-bold border rounded-md w-[277px]";
            break;
        case "ghost":
            buttonStyle =
                customStyle +
                " text-base text-black leading-9 font-bold rounded w-[277px]";
            break;
        default:
            buttonStyle =
                customStyle +
                " text-base text-black leading-9 font-bold rounded w-[277px]";
    }

    // TODO: Add button handlers
    return <button className={buttonStyle}>{children}</button>;
};

export default Button;
