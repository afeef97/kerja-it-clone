import React from "react";
import JOB_DATA from "../assets/job-directory-data.json";
import Card from "./Card";

const JobCards = () => {
    return (
        <div>
            {JOB_DATA.map((element, index) => {
                return (
                    <Card
                        key={index}
                        jobTitle={element?.job}
                        company={element?.company}
                        location={`${element.company_state}, ${element?.company_country}`}
                        type={element?.work_type}
                        date={element?.post_date}
                    />
                );
            })}
        </div>
    );
};

export default JobCards;
