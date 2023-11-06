import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';



const PostedJob = ({ job }) => {
  const {
    _id,
    jobPosterEmail,
    job_title,
    deadline,
    description,
    category,
    minPrice,
    maxPrice,
  } = job;

 

  return (
    <div className="card  bg-base-100 shadow-xl border-2 border-primary mx-4 mb-10">
      <div className="card-body">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="">
            <h2 className="text-2xl font-bold text-accent">{job_title}</h2>
            {description.length > 120 ? (
              <p className="text-sm py-2">
                {description.slice(0, 120)}
                <Link
                  className="
                text-primary font-bold"
                >
                  ...see details
                </Link>
              </p>
            ) : (
              <p className="text-sm py-2">{description}</p>
            )}
            {/* // <p className="text-sm py-2">${description.slice(0,100)}</p> */}
          </div>
          <div className=" ">
            <p className=" text-white font-bold bg-primary  lg:relative lg:left-[50px] lg:top-[-80px]  px-4 py-3 rounded-lg my-6 lg:my-0 lg:border-r-2 lg:border-b-2 lg:border-accent  shadow-2xl hover:bg-accent">
              {category}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-20 items-center">
          <div className="">
            <p>Category: <span className="text-primary font-semibold">{category}</span></p>
            <p>Contact Email: <span className="text-primary font-semibold">{jobPosterEmail}</span></p>
            <p>Minimum Price: <span className="text-primary font-semibold">${minPrice}</span></p>
            <p>Maximum Price: <span className="text-primary font-semibold">${maxPrice}</span></p>
            <p>Deadline: <span className="text-primary font-semibold">{deadline}</span></p>
          </div>

          <div className="flex flex-row lg:flex-col gap-4">
           <Link to={`/updatePostedJobs/${_id}`}><FaEdit className="text-3xl text-primary"></FaEdit></Link>
           
            <AiTwotoneDelete className="text-3xl text-accent"></AiTwotoneDelete>

          </div>
        </div>
      </div>
    </div>
  );
};

PostedJob.propTypes = {
    job: PropTypes.object.isRequired
}

export default PostedJob;
