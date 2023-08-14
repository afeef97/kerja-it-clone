import React from "react";
import JOB_DATA from "../assets/job-directory-data.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Apply from "../components/Apply";
import JobDetails from "../components/JobDetails";

const Job = () => {
    const jobSlug = useParams();
    const jobId = jobSlug.slug.split("-")[0];
    const currentJob = JOB_DATA[jobId - 1];

    return (
        <>
            <Header></Header>
            <div className="p-4 bg-slate-100">
                <div className="max-w-2xl mx-auto my-4">
                    <a href="/">
                        <span className="hover:underline">Jobs</span>
                    </a>
                    <p className="inline text-black ">
                        {" "}
                        /{" "}
                        <span className="hover:underline hover:cursor-pointer">
                            {currentJob.job}
                        </span>
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg border border-gray-300">
                    <div>
                        <JobDetails
                            jobTitle={currentJob.job}
                            company={currentJob.company}
                            location={
                                currentJob.company_state +
                                ", " +
                                currentJob.company_country
                            }
                            type={currentJob.work_type}
                            date={currentJob.post_date}
                        />
                    </div>

                    <Apply currentJob={currentJob} />

                    <div>
                        <h3 className="my-7">✍️ Job Description</h3>

                        <div className="w-10/12 mx-auto">
                            <h3 className="mt-2">Job Details</h3>
                            <ul>
                                {currentJob.details.job_description.map(
                                    (element, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="list-disc">
                                                {element}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>

                            <h3 className="mt-2">Job Requirements</h3>
                            <ul>
                                {currentJob.details.qualification.map(
                                    (element, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="list-disc">
                                                {element}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                    </div>

                    <Apply currentJob={currentJob} />
                </div>
            </div>
        </>
    );
};

export default Job;
