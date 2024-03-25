import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_title, company_name, remote_or_onsite, location, salary, contact_information } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('Job Applied Successfully !!')
    }

    return (
        <div className="p-4 md:p-0">
            <h2 className="text-4xl my-20 md:my-40 text-center">Job Details of {job_title}</h2>
            <div className="grid md:grid-cols-5 gap-2 md:gap-16 my-10 md:my-20">
                <div className="md:col-span-3">
                    <p className="mb-4 md:mb-10 text-justify"><b>Job Description</b>: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p className="mb-4 md:mb-10 text-justify"><b>Job Responsibility:</b> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <p className="mb-4 md:mb-10 text-justify"><b>Educational Requirements:</b> <br />
                        Bachelor degree to complete any reputational university.</p>
                    <p className="mb-10 text-justify"><b>Experiences:</b> <br />
                        2-3 Years in this field.</p>
                </div>
                <div className="border p-4 rounded-lg md:col-span-2">
                    <h3 className="text-lg mb-4 font-semibold">Job Details</h3>
                    <hr />
                    <div className="mt-4 mb-4 flex flex-col gap-4">
                        <p><b>Title:</b> {job_title}</p>
                        <p><b>Company:</b> {company_name}</p>
                        <p><b>Job Type:</b> {remote_or_onsite}</p>
                        <p><b>Location:</b> {location}</p>
                        <p><b>Salary:</b> {salary}</p>
                    </div>
                    <hr />
                    <div className="mt-4 mb-4 flex flex-col gap-4">
                        <p><b>Address:</b> {contact_information.address}</p>
                        <p><b>Cell:</b> {contact_information.phone}</p>
                        <p><b>Email</b> {contact_information.email}</p>
                    </div>
                    <hr />
                    <div className="w-fit mx-auto mt-4">
                        <button onClick={handleApplyJob} className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;