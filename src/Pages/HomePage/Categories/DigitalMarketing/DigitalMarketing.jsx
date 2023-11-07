import axios from "axios";
import { useEffect, useState } from "react";


const DigitalMarketing = () => {

    const [postedJobs, setPostedJobs] = useState([]);
      const url = `http://localhost:5000/jobs/Digital%20Marketing`;
      useEffect(() => {
        axios.get(url).then((res) => {
          setPostedJobs(res.data);
        });
      }, [url]);
    
    return (
        <div>
            <h1>Digital Marketing Job Posts{postedJobs.length}</h1>
        </div>
    );
};

export default DigitalMarketing;