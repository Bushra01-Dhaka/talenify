import axios from "axios";
import { useEffect, useState } from "react";
import Webdev from "../Webdev/Webdev";


const DigitalMarketing = () => {

    const [postedJobs, setPostedJobs] = useState([]);
      const url = `https://talenify-server.vercel.app/jobs/Digital%20Marketing`;
      useEffect(() => {
        axios.get(url).then((res) => {
          setPostedJobs(res.data);
        });
      }, [url]);
    
    return (
        <div className="container mx-auto py-16">
        {/* <h1>Web Development Job Posts{postedJobs.length}</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
           {
               postedJobs.map(jobs => <Webdev
               key={jobs._id}
               webJob={jobs}
               ></Webdev>)
           }
        </div>

   </div>
    );
};

export default DigitalMarketing;