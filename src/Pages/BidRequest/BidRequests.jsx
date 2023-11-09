import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import bg_img from "../../assets/banner/update-img.svg";
import BidReqTable from "./BidReqTable";
import Aos from "aos";
import "aos/dist/aos.css";

const BidRequests = () => {
   const { user } = useContext(AuthContext);

   useEffect(() => {
    Aos.init();
  }, []);

  // const [myPost, setMyPost] = useState([]);
  // const jobUrl = `http://localhost:5000/jobs?email=${user?.email}`;
  // useEffect(() => {
  //   axios.get(jobUrl).then((res) => {
  //     setMyPost(res.data);
  //   });

  // },[jobUrl]);
  // console.log(myPost)

  const [filterJobBids, setFilterJobBids] = useState([]);


  const [allBids, setAllBids] = useState([]);
  const url = `http://localhost:5000/bids`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setAllBids(res.data);

      const myPostedJobBids = allBids.filter(
        (data) => data.jobPosterEmail === user?.email);
        
        setFilterJobBids(myPostedJobBids);



    });
  }, [url, user?.email]);

  

  // const myPostedJobBids = allBids.filter(
  //   (data) => data.jobPosterEmail === user?.email);
    
  //   setFilterJobBids(myPostedJobBids);




  

  // console.log(myPostedJobBids);

  console.log(filterJobBids);


  

  

  return (
    <div className="pb-10">
      {/* <h1>My Bid Request Page {myPostedJobBids.length} </h1> */}
      <div
        data-aos="slide-up" data-aos-delay="200"
        className="hero min-h-[60vh] rounded mb-10"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
             Bid Requests control panel{" "}
            </h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra-primary">
          {/* head */}
          <thead>
            <tr className="text-secondary font-bold text-md">
              <th></th>
              <th>Job Title</th>
              <th>Email(Bidder)</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filterJobBids.map((bid,index) => (
              <BidReqTable 
              filterJobBids={filterJobBids}
              setFilterJobBids={setFilterJobBids}
              key={index} 
              bid={bid}
              ></BidReqTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
