import register_img from "../../../assets/banner/lightColor-bg.svg";
import {
  PiNumberCircleOne,
  PiNumberCircleThree,
  PiNumberCircleTwo,
} from "react-icons/pi";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:flex-1 p-8 my-6">
          <h1 className="text-4xl text-neutral font-bold">
            How Does IT Works?
          </h1>
          <p className="py-6 lg:max-w-md">
            Talenify makes job searching and employee recruitment effortless
            with its user-friendly platform
          </p>

          <div className="">
            <div className="lg:max-w-md">
              <div className="flex items-center gap-2">
                <PiNumberCircleOne className="text-4xl text-primary font-bold"></PiNumberCircleOne>
                <p className="text-neutral font-bold text-2xl mb-2">
                  Create Your Account
                </p>
              </div>
              <p className="mb-4">
                Create your account in our site first to get access all
                features. Here you can find job and hire professional employees.
              </p>
            </div>

            <div className="lg:max-w-md">
              <div className="flex items-center gap-2">
                <PiNumberCircleTwo className="text-4xl text-primary font-bold"></PiNumberCircleTwo>
                <p className="text-neutral font-bold text-2xl mb-2">
                  Apply For Jobs
                </p>
              </div>
              <p className="mb-4">
                Explore 100+ daily job post from prestigious companies. Apply
                for your dream job. You are one step away from your dream job.
              </p>
            </div>

            <div className="lg:max-w-md">
              <div className="flex items-center gap-2">
                <PiNumberCircleThree className="text-4xl text-primary font-bold"></PiNumberCircleThree>
                <p className="text-neutral font-bold text-2xl mb-2">Hire Now</p>
              </div>
              <p className="mb-4">
                Looking for best professional employees? You are the right
                place. Hire professional employee now.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${register_img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="lg:flex-1 p-6"
        >
          <div className="grid grid-cols-3 gap-2">
            <div className=" col-span-2">
              <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor=".example-selector" className="card bg-base-100 shadow-xl rounded-lg">
                <div className="card-body">
                  <div className="flex items-center gap-4"> 
                    <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/7WysTJG/song3.jpg" />
                      </div>
                    </div>
                    <p className="text-primary font-bold">Jimmy Smith</p>
                  </div>
                  <p className="text-sm">
                    Talenify has completely transformed my job search
                    experience! Their user-friendly interface and personalized
                    job recommendations made the hunt for my dream job a
                    breeze.Highly recommended
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-span-1 rounded-lg"></div>

            <div className="col-span-1 rounded-lg"></div>

            <div className="col-span-2">
              <div className="bg-white grid-span-2 rounded-lg">
                <div data-aos="fade-right" data-aos-delay="200" data-aos-anchor=".example-selector" className="card bg-base-100 shadow-xl rounded-lg">
                  <div className="card-body rounded-lg">
                  <div className="flex items-center gap-4"> 
                    <div  className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://i.ibb.co/vmzMSLn/music.jpg" />
                      </div>
                    </div>
                    <p className="text-primary font-bold">Barry Allen</p>
                  </div>
                    <p className="text-sm">
                    As a hiring manager, I can not say enough good things about Talenify. It streamlines the hiring process, making it easier to find and connect with top talent. The candidate profiles are rich with information, and the communication tools simplify the entire recruitment process. Talenify is a must-have for any HR professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
