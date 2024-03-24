import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="p-4 md:p-0">
            <h2>Job Details of {job_title}</h2>
            <div className="grid md:grid-cols-4 gap-2 md:gap-16 my-10 md:my-20">
                <div className="md:col-span-3">
                    <p className="mb-10 text-justify"><b>Job Description</b>: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
                    <p className="mb-10 text-justify"><b>Job Responsibility:</b> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
                    <p className="mb-10 text-justify"><b>Educational Requirements:</b> <br />
                        Bachelor degree to complete any reputational university.</p>
                    <p className="mb-10 text-justify"><b>Experiences:</b> <br />
                        2-3 Years in this field.</p>
                </div>
                <div className="border p-4">
                    <h3 className="text-lg mb-4 font-semibold">Job Details</h3>
                    <hr />
                    <button className="btn">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;