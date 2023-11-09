import { HiOutlineMail } from 'react-icons/hi';
import { BiSolidCategory } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import { GrUpdate } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

const JobsCard = ({job}) => {

    const {email, job_title, category, deadline, description, minimum_price, maximum_price} = job;

    return (
        <div>
            <div className="card w-full h-80 bg-[#164863] text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{job_title}</h2>
                    <p className='flex justify-center items-center gap-1'><HiOutlineMail></HiOutlineMail>{email}</p>
                    <p className='flex justify-center items-center gap-1'><BiSolidCategory></BiSolidCategory>{category}</p>
                    <p>{description}</p>
                    <p className='flex justify-center items-center gap-1'><BsCalendarDate></BsCalendarDate>{deadline}</p>
                    <div className="flex gap-2">
                        <p className='flex justify-center items-center gap-1'><ImPriceTag></ImPriceTag>Minimum Price: {minimum_price}</p>
                        <p>Maximum Price: {maximum_price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost bg-[#427D9D] text-white"><GrUpdate></GrUpdate>Update</button>
                        <button className="btn btn-ghost bg-[#FF6C22] text-white"><RiDeleteBin6Line></RiDeleteBin6Line>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;