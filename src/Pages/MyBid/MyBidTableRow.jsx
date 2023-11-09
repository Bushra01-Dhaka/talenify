import { FaBullseye } from "react-icons/fa";
import PropTypes from 'prop-types';

const MyBidTableRow = ({ bid, myBid, setMyBid }) => {
    const {
        bidJobTitle,
        // bidPrice,
        bidDeadline,
        bidEmail,
        // jobPosterEmail,
        jobPost_Id,
        status,
    } = bid;


    //update state for complete button

    const handleComplete = (id) => {
      fetch(`http://localhost:5000/bids/single/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "complete" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            //update state
            const remaining = myBid.filter(
              (item) => item.jobPost_Id !== jobPost_Id
            );
            const updated = myBid.find(
              (item) => item.jobPost_Id === jobPost_Id
            );
            updated.status = "complete";
            const newFiltersJobBids = [updated, ...remaining];
            setMyBid(newFiltersJobBids);
          }
        });
    };



  return (
    <tr className="text-black">
      <th><FaBullseye className="text-primary text-lg"></FaBullseye></th>
      <td>{bidJobTitle}</td>
      <td>{bidEmail}</td>
      <td>{bidDeadline}</td>
      {
        status ?  <td className="text-primary font-bold">{status}</td>
        :
        <td>pending</td>
      }
      {
        status && status !== 'complete' && status !== 'rejected' ? (<td><button onClick={() => handleComplete(jobPost_Id)}  className="btn btn-sm btn-primary rounded">Complete</button></td>) 
        : status === 'complete'? ('')
        : status === 'rejected' ? ('')
        :
        (<td><button className="btn btn-sm btn-primary rounded" disabled>Complete</button></td>)
      }
     
    </tr>
  );
};

MyBidTableRow.propTypes = {
    bid: PropTypes.object.isRequired,
    myBid: PropTypes.array,
    setMyBid: PropTypes.func
}

export default MyBidTableRow;
