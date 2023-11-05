import { useContext } from "react";
import addJobs_img from "../../assets/addJobs/addjobs.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AddJobs = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log("Add Product: ", email)

  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.title.value;
    const deadline = form.deadline.value;
    console.log(email,job_title,deadline)
  }

  return (
    <div className=" my-10">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="lg:flex-1 items-center">
          <img
            className="w-full"
            src={addJobs_img}
            alt=""
          />
          
        </div>

        <div className="lg:flex-1 ">
        <h1 className="text-4xl font-bold my-4 text-primary px-4">Add Jobs</h1>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-4 " onSubmit={handleAddProduct}>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-4 "> */}
            {/* 1 */}
            <div className="">
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

            <div className="">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="Job Title"
                name="title"
                className="input input-bordered rounded"
                required
              />
            </div>

            <div className="">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                placeholder="Deadline"
                name="deadline"
                className="input input-bordered rounded"
                required
              />
            </div>

            <div className="">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered rounded"
                required
              />
            </div>

            <div className="">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered w-full max-w-xs rounded">
                <option>Web Development</option>
                <option>Digital Marketing</option>
                <option>Graphics Design</option>
              </select>
            </div>

            
            <div className="">
              <label className="label">
                <span className="label-text">Minimum Price</span>
              </label>
              <input
                type="number"
                placeholder="Minimum Price"
                name="min-price"
                className="input input-bordered rounded"
                required
              />
            </div>

            <div className="">
              <label className="label">
                <span className="label-text">Maximum Price</span>
              </label>
              <input
                type="number"
                placeholder="Maximum Price"
                name="max-price"
                className="input input-bordered rounded"
                required
              />
            </div>
 

          {/* </div> */}

          <Link>
          <button type="submit" className="btn btn-primary rounded my-8 w-[200px] mx-4 text-white">Add Job</button>  
        </Link>
        </form>
        
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
