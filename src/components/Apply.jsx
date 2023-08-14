import React from "react";

const Apply = ({ currentJob }) => {
    return (
        <div className="mt-10">
            <a
                href={currentJob.link}
                target="_blank"
                className="bg-blue-600 font-semibold text-white rounded-md px-12 py-3">
                Apply Now 🚀
            </a>
            <p className="mt-4 text-sm">
                Please mention that you found the job on Kerja-IT.com, this
                helps us get more companies to post here. Thanks.
            </p>
        </div>
    );
};

export default Apply;
