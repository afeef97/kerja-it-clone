import React from "react";
import { useLocation } from "react-router-dom";

const JobDetails = ({ jobTitle, company, location, type, date }) => {
    const routeLocation = useLocation();

    const renderTitle = () => {
        if (/^\/jobs\//.test(routeLocation.pathname)) {
            return <h1>{jobTitle}</h1>;
        } else {
            return (
                <h2 className="text-lg lg:text-2xl font-semibold">
                    {jobTitle}
                </h2>
            );
        }
    };

    return (
        <div>
            {renderTitle()}

            <p className="text-sm">{company}</p>

            <div className="my-2">
                <p className="text-sm">{location}</p>
                <p className="text-sm">{type}</p>
            </div>
            <p className="text-sm">{`Added on ${date}`}</p>
        </div>
    );
};

export default JobDetails;
