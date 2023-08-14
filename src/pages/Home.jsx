import React from "react";
import Hero from "../components/Hero";
import JobCards from "../components/JobCards";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="p-4 bg-slate-100">
                <Hero />
                <section className="my-14 lg:w-2/3 lg:mx-auto max-w-4xl">
                    <div className="mb-2">
                        <a
                            href="/jobs"
                            className="text-xl font-bold">
                            ⏳ Latest Jobs →
                        </a>
                    </div>
                    <JobCards />
                </section>
            </div>
        </div>
    );
};

export default Home;
