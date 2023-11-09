import { useLoaderData } from "react-router-dom";
import JobsCard from "./JobsCard";

const MyPostedJobs = () => {

    const jobs = useLoaderData();
    return (
        <div className='mt-20'>
            <h1 className="font-bold text-[#164863] text-6xl text-center my-6">My Posted Jobs ({jobs.length})</h1>
            <div className="grid grid-cols-3 gap-8">
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;