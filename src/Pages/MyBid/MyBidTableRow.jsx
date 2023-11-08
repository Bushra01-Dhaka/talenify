import { FaBullseye } from "react-icons/fa";
import PropTypes from 'prop-types';

const MyBidTableRow = ({ bid }) => {
    const {
        bidJobTitle,
        bidPrice,
        bidDeadline,
        bidEmail,
        jobPosterEmail,
        jobPost_Id: _id
    } = bid;
  return (
    <tr className="text-black">
      <th><FaBullseye className="text-primary text-lg"></FaBullseye></th>
      <td>{bidJobTitle}</td>
      <td>{bidEmail}</td>
      <td>{bidDeadline}</td>
      <td>Pending</td>
      <td><button className="btn btn-sm btn-primary rounded" disabled>Complete</button></td>
    </tr>
  );
};

MyBidTableRow.propTypes = {
    bid: PropTypes.object.isRequired
}

export default MyBidTableRow;
