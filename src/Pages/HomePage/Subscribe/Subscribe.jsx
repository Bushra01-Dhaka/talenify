import subs_bg from "../../../assets/banner/subs-bg.svg";
import sub_cover from "../../../assets/addJobs/addjobs.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
    const {user} = useContext(AuthContext);

    useEffect(() => {
        Aos.init();
      }, []);

    const handleSubscribe = () => {
        toast.success('Thanks for you subscription.', {
            style: {
              border: '1px solid #82CD47',
              padding: '16px',
              color: '#82CD47',
              background: 'white',
            },
            iconTheme: {
              primary: '#82CD47',
              secondary: '#fff',
            },
          });
    }
  return (
    <div
     className="min-h-[40vh] flex flex-col md:flex-row items-center"
      style={{
        backgroundImage: `url(${subs_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor=".example-selector" className="lg:flex-1 hero pt-8">
        <div  className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl lg:text-5xl font-bold">{`Don't`} Wanna miss any job posts?</h1>
            <p className="py-6">
            Press the Subscribe button to get notified always.
            </p>
            <div>
            <input type="email" defaultValue={user?.email}  placeholder="your email" className="input input-bordered w-full max-w-xs" />
         <button onClick={handleSubscribe} className="btn btn-primary rounded ml-2 btn-md mt-4 lg:mt-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800"className="lg:flex-1">
         <img
         className="md:h-[500px] mx-auto" 
         src={sub_cover} alt="" />
      </div>
       

    </div>
  );
};

export default Subscribe;
