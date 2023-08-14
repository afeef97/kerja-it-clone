import React from "react";
import Button from "./shared/Buttons";

const Navigation = () => {
    const linkClass =
        "transition duration-300 whitespace-nowrap hover:bg-gray-200 px-3 py-2 rounded-md";

    return (
        <div className="w-full">
            {/* TODO: Add navigation functionality */}
            <Button
                variation="ghost"
                customStyle="w-full text-3xl md:hidden py-1 px-2">
                <i className="bi bi-list"></i>
            </Button>

            <div className="hidden md:flex md:gap-2">
                <a
                    href=""
                    className={linkClass}>
                    📊 Stats
                </a>
                <a
                    href=""
                    className={linkClass}>
                    🏹 Talents
                </a>
                <a
                    href=""
                    className={linkClass}>
                    📢 Post Jobs
                </a>
                <a
                    href=""
                    className={linkClass}>
                    💌 Get Job Alerts
                </a>
                <a
                    href=""
                    className={linkClass}>
                    ☁️ Login
                </a>
                <a
                    href=""
                    className={
                        linkClass +
                        " " +
                        "bg-black text-white hover:bg-slate-800 dura"
                    }>
                    ✨ Register
                </a>
            </div>
        </div>
    );
};

export default Navigation;
