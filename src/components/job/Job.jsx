import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-lg p-4">
            <figure><img className="w-60 h-24 p-4" src={logo} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-semibold mt-2">{job_title}</h2>
                <p className="text-lg">{company_name}</p>
                <div className="flex gap-2 mt-2">
                    <button className="px-4 py-2 border border-blue-800 rounded-xl text-blue-600">{remote_or_onsite}</button>
                    <button className="px-4 py-2 border border-blue-800 rounded-xl text-blue-600">{job_type}</button>
                </div>
                <div className="flex items-center mt-2">
                    <p className="flex items-center gap-1"><CiLocationOn />{location}</p>
                    <p className="flex items-center gap-1"><AiOutlineDollar />{salary}</p>
                </div>
                <div className="card-actions mt-2">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;