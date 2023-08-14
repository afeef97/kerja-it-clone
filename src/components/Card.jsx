import React from "react";
import JobDetails from "./JobDetails";

const Card = ({ id, jobTitle, company, location, type, date }) => {
    return (
        <a
            href={`/jobs/${id}-${jobTitle
                .replaceAll(" ", "-")
                .toLowerCase()}-${company.toLowerCase()}`}
            className="bg-white border border-gray-300 rounded-md p-4 truncate sm:basis-[49%]">
            <JobDetails
                jobTitle={jobTitle}
                company={company}
                location={location}
                type={type}
                date={date}
            />
        </a>
    );
};

export default Card;
