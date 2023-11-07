import axios from "axios";
import { useEffect, useState } from "react";



const WebDevelopment = () => {

   
  const [postedJobs, setPostedJobs] = useState([]);
//   const url = `http://localhost:5000/jobs?value=web_development`;
  const url = `http://localhost:5000/jobs/Web%20Development`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setPostedJobs(res.data);
    });
  }, [url]);

  



    return (
        <div>
             <h1>Web Development Job Posts{postedJobs.length}</h1>
        </div>
    );
};

export default WebDevelopment;