/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import JobsCard from '../Jobs/JobsCard';

const JobsByCategory = ({ category }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-psi-one.vercel.app/jobs/category/${encodeURIComponent(category)}`)
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error(error));
    }, [category]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobsCard key={job._id} job={job} />
                ))
            ) : (
                <p className='text-center'>No jobs found for this category!</p>
            )}
        </div>
    );
};

export default JobsByCategory;
