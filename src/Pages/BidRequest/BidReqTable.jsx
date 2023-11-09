import { FaBullseye } from "react-icons/fa";
import PropTypes from 'prop-types';

const BidReqTable = ({ bid }) => {
  const {
    bidJobTitle,
    bidPrice,
    bidDeadline,
    bidEmail,
    jobPosterEmail,
    jobPost_Id,
  } = bid;

  

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bids/single/${id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify({status: 'in_progress'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0)
        {
            //update state
             
        }
    })
  };

  return (
    <tr className="text-black">
      <th>
        <FaBullseye className="text-secondary text-lg"></FaBullseye>
      </th>
      <td>{bidJobTitle}</td>
      <td>{bidEmail}</td>
      <td>{bidDeadline}</td>
      <td>${bidPrice}</td>
      <td>Pending</td>
      <td>
        <button onClick={() => handleConfirm({jobPost_Id})} className="btn btn-sm btn-secondary text-white rounded">
          Accept
        </button>
      </td>
      <td>
        <button className="btn btn-sm bg-red-500 text-white hover:bg-red-400 rounded">
          Reject
        </button>
      </td>
    </tr>
  );
};

BidReqTable.propTypes = {
  bid: PropTypes.object.isRequired
}

export default BidReqTable;
