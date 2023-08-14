import React from "react";
import logo from "../assets/site-logo.webp";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="flex justify-between lg:justify-center items-center lg:gap-32 p-4">
            <div className="flex-shrink max-w-[150px]">
                <img
                    src={logo}
                    alt="Kerja IT logo"
                    className=""
                />
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
