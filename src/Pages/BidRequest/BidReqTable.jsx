import { FaBullseye } from "react-icons/fa";
import PropTypes from "prop-types";

const BidReqTable = ({ bid, filterJobBids, setFilterJobBids }) => {
  const {
    bidJobTitle,
    bidPrice,
    bidDeadline,
    bidEmail,
    // jobPosterEmail,
    jobPost_Id,
    status,
  } = bid;

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bids/single/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "in_progress" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state
          const remaining = filterJobBids.filter(
            (item) => item.jobPost_Id !== jobPost_Id
          );
          const updated = filterJobBids.find(
            (item) => item.jobPost_Id === jobPost_Id
          );
          updated.status = "in_progress";
          const newFiltersJobBids = [updated, ...remaining];
          setFilterJobBids(newFiltersJobBids);
        }
      });
  };

  //for reject
  const handleRejected = (id) => {
    fetch(`http://localhost:5000/bids/single/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "rejected" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state
          const remaining = filterJobBids.filter(
            (item) => item.jobPost_Id !== jobPost_Id
          );
          const updated = filterJobBids.find(
            (item) => item.jobPost_Id === jobPost_Id
          );
          updated.status = "rejected";
          const newFiltersJobBids = [updated, ...remaining];
          setFilterJobBids(newFiltersJobBids);
        }
      });
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

      {status === "in_progress" && status !== "rejected" ? (
        <td>
          <button className="btn-sm btn-secondary text-white rounded">
            In progress
          </button>
        </td>
      ) : status === "rejected" ? (
        <td>
          <button className="btn-sm btn-primary bg-red-600 hover:bg-red-500 text-white rounded">
            Rejected
          </button>
        </td>
      ) : (
        <td>Pending</td>
      )}

      <td>
        {status === "in_progress" || status === "rejected" ? (
          ""
        ) : (
          <button
            onClick={() => handleConfirm(jobPost_Id)}
            className="btn btn-sm btn-secondary text-white rounded"
          >
            Accept
          </button>
        )}
      </td>
      <td>
        {status === "in_progress" || status === "rejected" ? (
          ""
        ) : (
          <button
            onClick={() => handleRejected(jobPost_Id)}
            className="btn btn-sm bg-red-500 text-white hover:bg-red-400 rounded"
          >
            Reject
          </button>
        )}
      </td>
    </tr>
  );
};

BidReqTable.propTypes = {
  bid: PropTypes.object.isRequired,
  filterJobBids: PropTypes.array,
  setFilterJobBids: PropTypes.func,
};

export default BidReqTable;
