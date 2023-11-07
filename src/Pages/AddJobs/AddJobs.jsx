import { useContext } from "react";
import addJobs_img from "../../assets/addJobs/addjobs.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import { useLocation, useNavigate } from "react-router-dom";


const AddJobs = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log("Add Product: ", email);

  useEffect(() => {
    Aos.init();
  }, []);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location)

  const handleAddProduct = e => {
    e.preventDefault();
    const form = e.target;
    const job_title = form.title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const category = form.category.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;

    console.log(email,job_title,deadline, description,category,minPrice,maxPrice);

    const job = {
      jobPosterEmail : email,
      job_title,
      deadline,
      description,
      category,
      minPrice,
      maxPrice
    }


    fetch(`http://localhost:5000/jobs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId)
      {
        toast.success("Job Added Successfully", {
          position: "top-right",
        });
        
        navigate("/postedJobs");

      }
    })

  }

  return (
    <div className=" my-10">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <div className="lg:flex-1 items-center">
          <img
            className="w-full"
            src={addJobs_img}
            alt="img"
          />
          
        </div>

        <div className="lg:flex-1 ">
        <h1 className="text-4xl font-bold my-4 text-primary px-4">Add Jobs</h1>

        <form data-aos="fade-left" data-aos-delay="200" data-aos-anchor=".example-selector" className="px-4" onSubmit={handleAddProduct}>
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
              <select type='text' name="category"
               className="select select-bordered w-full max-w-xs rounded">
                <option>web_development</option>
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
                placeholder="Maximum Price"
                name="maxPrice"
                className="input input-bordered rounded"
                required
              />
            </div>
 
          </div>

          <div className="form-control mt-6">
          
          <input
            className="btn btn-primary btn-block rounded my-8  mx-4 text-white"
            type="submit"
            value="Add Jobs"
          />
          
        </div>

        </form>
        
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
