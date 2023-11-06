import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const MyPostedJobs = () => {
    const {user} = useContext(AuthContext);
    const [postedJobs, setPostedJobs] = useState([]);
  const url = `http://localhost:5000/jobs?email=${user?.email}`
  useEffect(() => {

    axios.get(url, {withCredentials: true})
    .then(res => {
      setPostedJobs(res.data)
    })

  }, [url]);
    return (
        <div>
            
        </div>
    );
};

export default MyPostedJobs;