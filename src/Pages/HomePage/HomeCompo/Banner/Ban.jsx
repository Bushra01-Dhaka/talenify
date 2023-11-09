
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
    
    >
      <div 
      data-aos="zoom-out" data-aos-delay="200" data-aos-anchor=".example-selector"
       className="flex flex-col md:flex-row justify-between items-center">
        <div 
                className="flex-1 my-auto p-8 space-y-4 ">
          <p>Looking for Jobs? Employee?</p>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Search <span className="text-primary">Every job</span>,{" "}
            <span className="text-primary">Everywhere</span>.
          </h1>
          <p>
            - with <span className="font-semibold">Talenify</span>
          </p>
          <a href="mailto:humayraanjum87@gmail.com" ><button className="btn btn-neutral text-white rounded my-4">Send US Mail</button></a>
        </div>

        <div
          className="flex-1"
        >
    

          <div className=" px-4">
            <div  className="mx-auto  bg-transparent">
              <figure>
                <img 
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
