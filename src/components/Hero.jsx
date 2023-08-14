import React from "react";
import Button from "./shared/Buttons";

const Hero = () => {
    return (
        <section className="text-center mt-4">
            <div>
                <h1>Find Tech Jobs In Malaysia MY</h1>
                <p>Let employers find you. Or apply to companies directly.</p>
            </div>

            <div className="flex flex-col items-center mt-6 gap-2">
                {/* TODO: Add button handlers */}
                <Button variation="solid">
                    🎯 I want companies to find me
                </Button>
                <Button variation="outline">🔍 Search Jobs</Button>
            </div>
        </section>
    );
};

export default Hero;
