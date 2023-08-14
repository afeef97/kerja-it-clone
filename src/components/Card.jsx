import React from "react";

const Card = ({ jobTitle, company, location, type, date }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-md p-4 truncate sm:basis-[49%]">
            <a className="text-lg font-semibold">{jobTitle}</a>
            <p className="text-sm">{company}</p>

            <div className="my-2">
                <p className="text-sm">{location}</p>
                <p className="text-sm">{type}</p>
            </div>
            <p className="text-sm">{`Added on ${date}`}</p>
        </div>
    );
};

export default Card;
