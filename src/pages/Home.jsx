import React from "react";
import Hero from "../components/Hero";
import JobCards from "../components/JobCards";

const Home = () => {
    return (
        <div>
            <div className="p-4">
                <Hero />
                <section className="my-14">
                    <a
                        href="/jobs"
                        className="text-xl font-bold">
                        ⏳ Latest Jobs →
                    </a>
                    <JobCards />
                </section>
            </div>
        </div>
    );
};

export default Home;
