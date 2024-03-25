import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localStorage";

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    return (
        <div>
            <h2 className="text-4xl my-20 md:my-40 text-center">Jobs I applied: {appliedJobs.length}</h2>

            <div className="flex justify-end">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>On site</a></li>
                    </ul>
                </div>
            </div>

            <div>
                {
                    displayJobs.map(job => <div key={job.id}>
                        <h2>{job.job_title}</h2>
                        <p>{job.company_name}</p>
                        <p>{job.remote_or_onsite}</p>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Appliedjobs;
