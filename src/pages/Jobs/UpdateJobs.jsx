import { useLoaderData } from "react-router-dom";
import { GrUpdate } from 'react-icons/gr';
import Swal from "sweetalert2";

const UpdateJobs = () => {
    const job = useLoaderData() || [];
    const { email, job_title, category, deadline, description, minimum_price, maximum_price, _id } = job;

    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const job_title = form.job_title.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const minimum_price = form.minimum_price.value;
        const maximum_price = form.maximum_price.value;

        const updatedJob = {
            email,
            job_title,
            category,
            deadline,
            description,
            minimum_price,
            maximum_price
        };
        console.log(updatedJob);

        fetch(`https://assignment-11-server-psi-one.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then((data) => {
            console.log(data);
            Swal.fire('Updated!', 'Your job has been updated.', 'success');
        })
        

    }
    return (
        <div>
            <div className="my-16">
                <p className="font-bold text-[#164863] text-6xl text-center my-6">Update Job!</p>

                <form onSubmit={handleUpdateJob}>
                    <div className="mx-10 md:mx-14 lg:mx-14 px-8 lg:px-80 gap-12 items-center justify-center shadow-2xl py-10">


                        <div className="form-control">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Email:</span>
                                <input type="email" required name="email" readOnly defaultValue={email} placeholder="Email of the employer:" className="input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Job Title:</span>
                                <input type="text" required name="job_title" defaultValue={job_title} placeholder="Job Title" className="input input-bordered" />
                            </label>
                        </div>

                        <select name="category" defaultValue={category} required className="my-4 text-[#164863] font-medium lg:mt-7 md:mt-7 select select-bordered max-w-xs">
                            <option disabled defaultValue={''}>Select Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>


                        <div className="form-control ">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Deadline:</span>
                                <input type="date" required name="deadline" defaultValue={deadline} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Description:</span>
                                <input type="text" required placeholder="Description" name="description" defaultValue={description} className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Minimum Price:</span>
                                <input type="number" required placeholder="Minimum Price" name="minimum_price" defaultValue={minimum_price} className="input input-bordered" />
                            </label>
                        </div>


                        <div className="form-control mt-4">
                            <label className="input-group input-group-vertical">
                                <span className="bg-[#164863] py-1 text-white">Maximum Price:</span>
                                <input type="number" required placeholder="Maximum Price" name="maximum_price" defaultValue={maximum_price} className="input input-bordered" />
                            </label>

                            <button className="btn mt-4 text-white bg-[#164863] py-2 hover-text-white"><GrUpdate></GrUpdate>Update</button>


                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateJobs;