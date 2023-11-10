/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BiSolidCategory } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import { GrUpdate } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JobsCard = ({ job, handleDelete }) => {
    const { email, job_title, category, deadline, description, minimum_price, maximum_price, _id } = job;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='mb-12' data-aos="fade-up" data-aos-duration="1000">
            {loading ? (
                <div className="flex justify-center items-center">
                    <span className="mt-12 loading text-[#164863] loading-dots loading-lg"></span>
                </div>
            ) : (
                <div className="card mx-auto w-5/6 md:w-11/12 lg:w-full h-80 bg-[#164863] text-white mt-4 hover:-translate-y-3 hover:duration-200 hover:cursor-pointer">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">{job_title}</h2>
                        <p className='flex justify-center items-center gap-1'><HiOutlineMail />{email}</p>
                        <p className='flex justify-center items-center gap-1'><BiSolidCategory />{category}</p>
                        <p>{description}</p>
                        <p className='flex justify-center items-center gap-1'><BsCalendarDate />{deadline}</p>
                        <div className="flex gap-2">
                            <p className='flex justify-center items-center gap-1'><ImPriceTag />Minimum Price: {minimum_price}</p>
                            <p>Maximum Price: {maximum_price}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-ghost bg-[#427D9D] text-white">
                                <Link to={`/updatejobs/${_id}`} className='flex gap-2'><GrUpdate />Edit</Link>
                            </button>
                            <button className="btn btn-ghost bg-[#FF6C22] text-white" onClick={() => handleDelete(_id)}>
                                <RiDeleteBin6Line />Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobsCard;
