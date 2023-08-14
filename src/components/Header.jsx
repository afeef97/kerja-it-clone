import React from "react";
import logo from "../assets/site-logo.webp";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div>
                <img
                    src={logo}
                    alt="Kerja IT logo"
                    className="w-[150px]"
                />
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
