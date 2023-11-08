import Marquee from "react-fast-marquee";

const CompanySlide = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center rounded-box items-center mx-auto">
      <Marquee className="bg-gray-100" pauseOnHover= {true} speed={100}>
        <div className="">
          <img
            className="h-[50px] w-[150px]  m-4"
            src="https://i.ibb.co/dkCV6m2/uber.png"
            alt="Uber"
          />
        </div>
        <div className="">
          <img
           className="h-[50px] w-[150px]  m-4"
            src="https://i.ibb.co/f89gSJP/slack.png"
            alt="Pizza"
          />
        </div>
        <div className="">
          <img
           className="h-[30px] w-[150px]  m-4"
            src="https://i.ibb.co/34ffxbJ/envato.png "
            alt="Pizza"
          />
        </div>
        <div className="">
          <img
           className="h-[30px] w-[150px]  m-4"
            src="https://i.ibb.co/LdGMh0r/zoom.png"
            alt="Pizza"
          />
        </div>
        <div className="">
          <img
           className="h-[30px] w-[150px]  m-4"
            src="https://i.ibb.co/ChGZxrk/spotify.png"
            alt="Pizza"
          />
        </div>
      </Marquee>
      </div>
    </div>
  );
};

export default CompanySlide;
