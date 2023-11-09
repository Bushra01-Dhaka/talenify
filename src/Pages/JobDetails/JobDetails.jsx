import { useLoaderData, useNavigate } from "react-router-dom";
import details_bg from "../../assets/banner/update-banner.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Subscribe from "../HomePage/Subscribe/Subscribe";
import toast from "react-hot-toast";

const JobDetails = () => {
    const {user} =useContext(AuthContext);
  const jobs = useLoaderData();
  const {
    _id,
    jobPosterEmail,
    job_title,
    deadline,
    description,
    category,
    minPrice,
    maxPrice,
  } = jobs;

  const isDisable = user?.email === jobPosterEmail;

  const navigate = useNavigate();

  const handleBidPost = e => {
         e.preventDefault();
         const form = e.target;
         const bidPrice = form.bidPrice.value;
         const bidDeadline = form.bidDate.value;
         const bidEmail = form.bidEmail.value;
         const jobPosterEmail = form.jobPosterEmail.value;

         const bid = {
          bidJobTitle: job_title,
          bidPrice,
          bidDeadline,
          bidEmail,
          jobPosterEmail,
          jobPost_Id: _id
      }

      console.log("bidInfo: ",bid);

      fetch('https://talenify-server.vercel.app/bids', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body:JSON.stringify(bid)

      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId)
      {
        toast
        .success("Bid on the project Successfully", {
          position: "top-right",
        });
        
        navigate("/myBids");

      }
        


      })


  }

  
 

  return (
    <div className="rounded">
      <div
        className="hero min-h-[60vh] rounded"
        style={{ backgroundImage: `url(${details_bg})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-3">
        <div className="details lg:col-span-2 p-6">
          <div className="py-4">
            <h1 className="text-4xl font-bold">{job_title}</h1>
            <p>{category}</p>
            <small>{jobPosterEmail}</small>
          </div>

          <hr />
          <div className="my-6">
            <h2 className="text-2xl font-bold">About the job</h2>
            <p className="lg:max-w-5xl mb-6">{description}</p>

            <h2 className="text-2xl font-bold">Responsibilities</h2>
            <ul className="py-4">
              <li>- Highly dedicated to work</li>
              <li>- HAve a mind set to deliver project in time if needed</li>
              <li>- Maintain high team and customer satisfaction levels.</li>
              <li>
                - Effective communication and collaboration are essential for IT
                employees.{" "}
              </li>
              <li>- Continuous Learning and Innovation </li>
            </ul>
          </div>
        </div>

        <div className="form-container lg:col-span-1">
          <div className="card bg-primary text-primary-content rounded">
            <div className="card-body">
              <h2 className="card-title text-black">{job_title}</h2>
              <p className="mb-4">{category}</p>

              <p>
                <span className="text-black font-bold">Salary:</span> $
                {minPrice}~${maxPrice}
              </p>
              <small className="mb-4">Salary is negotiable</small>

              <p>
                <span className="text-black font-bold">Deadline:</span>{" "}
                {deadline}
              </p>

              <p>
                <span className="text-black font-bold">Contact:</span>{" "}
                {jobPosterEmail}
              </p>

              <div className="card-actions justify-end">
                {/* <button className="btn">Buy Now</button> */}

                {/* modal starts */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Place Your Bid
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="myModal">
                      <form onSubmit={handleBidPost} className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Bidding Price(${minPrice}~${maxPrice})</span>
                          </label>
                          <input
                            type="number"
                            placeholder="expected price"
                            name="bidPrice"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Deadline {deadline}</span>
                          </label>
                          <input
                            type="date"
                            placeholder="date"
                            name="bidDate"
                            className="input input-bordered"
                            required
                          />
                         
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input
                            type="email"
                            placeholder=""
                            defaultValue= {user?.email}
                            name="bidEmail"
                            className="input input-bordered"
                            required
                            readOnly
                          />
                         
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Buyer Email</span>
                          </label>
                          <input
                            type="email"
                            placeholder="buyer email"
                            defaultValue= {jobPosterEmail}
                            name="jobPosterEmail"
                            className="input input-bordered"
                            required
                            readOnly
                          />
                         
                        </div>



                        <div className="form-control mt-6">
                            {
                                isDisable? <button disabled className="btn">Bid on the project</button>
                                :
                                <button
                                type="submit"
                                className="btn btn-primary text-white"
                              >
                                Bid on the project
                              </button>
                            }
                         
                        </div>

                      </form>
                    </div>
                  </div>
                </dialog>

                {/* modal ends */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Subscribe></Subscribe>
    </div>
  );
};

export default JobDetails;
