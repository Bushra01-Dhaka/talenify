import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import logo from '../../../../assets/logo/mainLogo.svg'
import PropTypes from 'prop-types';



class Webdev extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }


  render() {
    const { webJob } = this.props;
    const {job_title, _id, deadline, maxPrice, minPrice, description} = webJob;
    
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          <div className="card h-[400px] shadow-xl border-2 rounded-lg text-neutral p-8">
            <h1 className="bg-neutral text-white py-4 px-6 text-xl text-center rounded">
             {job_title}
            </h1>
             <div className="my-4 space-y-2">
             <p>Deadline: <span className="font-semibold text-accent"> {deadline}</span></p>
            <p>Salary Range: <span className="font-semibold text-accent"> ${minPrice} ~ ${maxPrice}</span></p>
            {/* <p>{description}</p> */}

            {description.length > 120 ? (
              <p className="text-sm py-2">
                {description.slice(0, 120)}
                <Link to={`/jobDetails/${_id}`}
                  className="
                text-primary font-bold"
                >
                  ...see details
                </Link>
              </p>
            ) : (
              <p className="text-sm py-2">{description}</p>
            )}


             </div>
            <Link to={`/jobDetails/${_id}`}><button className="btn rounded btn-primary text-white">Bid Now</button></Link>

            <div className="card-actions justify-end mt-4">
             <BsArrowRepeat onClick={this.handleClick} className="text-3xl text-accent font-bold"></BsArrowRepeat>
          </div>
          </div>
    
        </div>

        <div>
          <div  className="card h-[400px] shadow-xl">
            <figure>
            </figure>
            <div>
                <img className="h-[200px] w-[200px] mx-auto" src={logo} alt="" />
                <h3 className="text-xl text-center text-primary font-bold">Looking for Jobs?</h3>
                <p className="text-center my-2">Search Your dream jon with <span className="text-primary font-bold">Talenify</span></p>
            </div>
            <div className="card-actions justify-end mt-4">
             <BsArrowRepeat onClick={this.handleClick} className="text-3xl text-accent font-bold mr-8 my-2"></BsArrowRepeat>
          </div>
          </div>
          {/* <button onClick={this.handleClick}>Click to flip</button> */}
        </div>
      </ReactCardFlip>
    );
  }
}

Webdev.propTypes = {
    webJob: PropTypes.object.isRequired
}

export default Webdev;
