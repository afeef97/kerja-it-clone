import React from "react";
import Button from "./shared/Buttons";

const Navigation = () => {
    return (
        <div className="w-full">
            {/* TODO: Add navigation functionality */}
            <Button
                variation="ghost"
                customStyle="w-full text-2xl md:hidden py-1 px-2">
                <i className="bi bi-list"></i>
            </Button>
        </div>
    );
};

export default Navigation;
