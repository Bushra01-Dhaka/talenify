
import light_banner_img from "../../../../assets/banner/subs-bg.svg"
import { Link } from "react-router-dom";
import banner from "../../../../assets/banner/mainBanner.svg"

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Ban = () => {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
    className=" rounded"
    style={{
      backgroundImage: `url(${light_banner_img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div data-aos="fade-up" data-aos-delay="200" data-aos-anchor=".example-selector" 
                className="flex-1 my-auto p-8 space-y-4 ">
          <p>Looking for Jobs? Employee?</p>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Search <span className="text-accent">Every job</span>,{" "}
            <span className="text-accent">Everywhere</span>.
          </h1>
          <p>
            - with <span className="font-semibold">Talenify</span>
          </p>
          <Link><button className="btn btn-neutral text-white rounded my-4">Send US Mail</button></Link>
        </div>

        <div
          className="flex-1"
        >
    

          <div className=" px-4">
            <div  className="mx-auto  bg-transparent">
              <figure>
                <img
                data-aos="fade-right" data-aos-delay="200" data-aos-anchor=".example-selector" 
                className="p-8 rounded-lg"
                  src={banner}
                  alt="Shoes"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ban;
