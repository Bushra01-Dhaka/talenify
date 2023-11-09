import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MyBidTableRow from "./MyBidTableRow";
import img from '../../assets/addJobs/addjobs.svg'
import Aos from "aos";
import "aos/dist/aos.css";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [myBid, setMyBid] = useState([]);
  const url = `http://localhost:5000/bids?email=${user?.email}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setMyBid(res.data);
    });
  }, [url]);


  useEffect(() => {
    Aos.init();
  }, []);

  console.log(myBid);

  return (
    <div>
      <div
      data-aos="zoom-in" data-aos-delay="200"
        className="hero min-h-[40vh] rounded mb-10"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">My Bid Collection </h1>
            <p className="mb-5"></p>
          </div>
        </div>
      </div>




      <div className="overflow-x-auto">
        <table className="table table-zebra-primary">
          {/* head */}
          <thead>
            <tr className="text-primary font-bold text-md">
              <th></th>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            myBid.map(bid => <MyBidTableRow 
                key={bid._id}
                myBid={myBid}
                setMyBid={setMyBid}
                bid={bid}
                ></MyBidTableRow>)
           }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
