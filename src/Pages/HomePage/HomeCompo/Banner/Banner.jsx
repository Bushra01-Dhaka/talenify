
import banner_img from "../../../../assets/banner/bannerImg.webp";
import light_banner_img from "../../../../assets/banner/lightColor-bg.svg"
import { Link } from "react-router-dom";


import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {

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
          className="relative flex-1 h-[500px] "
          style={{
            backgroundImage: `url(${banner_img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-50"></div>

          <div  data-aos="fade-right" data-aos-delay="200" data-aos-anchor=".example-selector" className="my-[80px] px-4">
            <div  className="mx-auto  card  bg-transparent shadow-xl rounded-lg">
              <figure>
                <img
                
                className="p-8 rounded-lg"
                  src={banner_img}
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

export default Banner;
