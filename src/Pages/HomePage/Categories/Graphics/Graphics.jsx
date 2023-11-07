import axios from "axios";
import { useEffect, useState } from "react";


const Graphics = () => {
    const [postedJobs, setPostedJobs] = useState([]);
    const url = `http://localhost:5000/jobs/Graphics%20Design`;
    useEffect(() => {
      axios.get(url).then((res) => {
        setPostedJobs(res.data);
      });
    }, [url]);
    return (
        <div>
             <h1>Graphics Design Job Posts{postedJobs.length}</h1>
        </div>
    );
};

export default Graphics;