import { useEffect, useState } from "react";
import Job from './../job/Job';


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    // this is the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="my-20">
            <div className="text-center">
                <h2 className="text-4xl mb-6">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength == jobs.length ? 'hidden' : 'text-center mt-12' }  >
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">See All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;