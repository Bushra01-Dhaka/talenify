import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import update_img from "../../assets/banner/update-img.svg";
import update_logo from "../../assets/banner/update-logo.png";
import update_bg from "../../assets/banner/lightColor-bg.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateJobs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location)

  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log("Update Product: ", email);


  const jobs = useLoaderData();
  console.log("updated: ", jobs);
  const { _id,job_title, deadline, description, category, minPrice, maxPrice } =
    jobs;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const job_title = form.title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
    
        console.log(email,job_title,deadline, description,category,minPrice,maxPrice);
    
        const UpdatedJob = {
          jobPosterEmail : email,
          job_title,
          deadline,
          description,
          category,
          minPrice,
          maxPrice
        }
    
    
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(UpdatedJob),
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0)
          {
            toast.success("Job Updated Successfully", {
              position: "top-right",
            });
            
            navigate("/postedJobs");
    
          }
        })
    
      }

  return (
    <div
      style={{
        backgroundImage: `url(${update_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" py-10 rounded"
    >
      <h1 className="text-5xl font-bold my-2 text-center text-secondary px-4">
        Update Jobs
      </h1>
      <span>
        <img className="mx-auto h-[100px] w-[100px]" src={update_logo} alt="" />
      </span>
      <div className="flex flex-col lg:flex-row-reverse gap-4 items-center">
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor=".example-selector"
          className="lg:flex-1 items-center"
        >
          <img className="w-full" src={update_img} alt="img" />
        </div>

        <div className="lg:flex-1 ">
          <form
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-anchor=".example-selector"
            className="px-4"
            onSubmit={handleUpdateProduct}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  defaultValue={user.email}
                  className="input input-bordered rounded"
                  required
                  readOnly
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  defaultValue={job_title}
                  placeholder="Job Title"
                  name="title"
                  className="input input-bordered rounded"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  defaultValue={deadline}
                  placeholder="Deadline"
                  name="deadline"
                  className="input input-bordered rounded"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  defaultValue={description}
                  placeholder="Description"
                  name="description"
                  className="input input-bordered rounded"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  type="text"
                  defaultValue={category}
                  name="category"
                  className="select select-bordered w-full max-w-xs rounded"
                >
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Graphics Design</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Minimum Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={minPrice}
                  placeholder="Minimum Price"
                  name="minPrice"
                  className="input input-bordered rounded"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Maximum Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={maxPrice}
                  placeholder="Maximum Price"
                  name="maxPrice"
                  className="input input-bordered rounded"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-secondary btn-block rounded my-8  mx-4 text-white"
                type="submit"
                value="Update Jobs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobs;
