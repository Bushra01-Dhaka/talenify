import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import bg_cover from "../../assets/banner/wave-bg.svg";
import PostedJob from "./PostedJob";
import arrow_img from "../../assets/banner/arrow-green.png"

import Aos from "aos";
import "aos/dist/aos.css";



const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [postedJobs, setPostedJobs] = useState([]);
  const url = `http://localhost:5000/jobs?email=${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setPostedJobs(res.data);
    });
  }, [url]);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg_cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="hero min-h-screen bg-base-200"
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-neutral">My Posted Jobs</h1>
            <div data-aos="fade-down" data-aos-delay="300" data-aos-anchor=".example-selector"  className="mx-auto">
              <img className="h-[100px] w-[100px] mx-auto my-4" src={arrow_img} alt="" />
            </div>
            {/* <Link to="/addJobs">
              <button className="btn btn-primary text-white my-6">
                Add More Jobs
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800" className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 lg:px-0 my-20">
        {postedJobs.map((job) => (
          <PostedJob 
          key={job._id} 
          job={job}
          postedJobs={postedJobs}
          setPostedJobs={setPostedJobs}

          ></PostedJob>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
