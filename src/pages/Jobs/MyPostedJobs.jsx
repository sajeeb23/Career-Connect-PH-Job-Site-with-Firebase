import { useLoaderData } from "react-router-dom";
import JobsCard from "./JobsCard";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const jobsData = useLoaderData();

    useEffect(() => {
        setJobs(jobsData);
    }, [jobsData]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this job!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF6C22',
            cancelButtonColor: '#427D9D',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                            const remaining = jobs.filter((job) => job._id !== id);
                            setJobs(remaining);
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting job:', error);
                    });
            }
        });
    };

    return (
        <div className='mt-20'>
            <h1 className="font-bold text-[#164863] text-6xl text-center my-4">
                My Posted Jobs ({jobs.length})
            </h1>
            <div className="grid grid-cols-3 gap-8">
                {jobs.map((job) => (
                    <JobsCard key={job._id} job={job} handleDelete={handleDelete}></JobsCard>
                ))}
            </div>
        </div>
    );
};

export default MyPostedJobs;
