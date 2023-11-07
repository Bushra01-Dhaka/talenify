import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import { BsArrowRepeat } from "react-icons/bs";
import logo from '../assets/logo/mainLogo.svg'



class Card extends Component {
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
    const { webJobs } = this.props;
    const {job_title, _id, deadline, maxPrice, minPrice, description} = webJob;
    
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          <div className="card w-96 bg-lime-200 shadow-xl border-2 rounded p-6">
            <h1 className="bg-accent text-white py-4 px-6 text-xl text-center rounded">
              Front-End Developer
            </h1>
             <div className="my-4 space-y-2">
             <p>Deadline: <span className="font-semibold text-accent"> 30/11/23</span></p>
            <p>Salary Range: <span className="font-semibold text-accent"> $2000 - $3000</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, veniam!</p>
             </div>
            <Link><button className="btn btn-block btn-primary text-white">Bid Now</button></Link>

            <div className="card-actions justify-end mt-4">
             <BsArrowRepeat onClick={this.handleClick} className="text-3xl text-accent font-bold"></BsArrowRepeat>
          </div>
          </div>
    
        </div>

        <div>
          <div  className="card w-96 bg-lime-200 shadow-xl">
            <figure>
              {/* <img
                className="h-[200px] p-4"
                src="https://i.ibb.co/ThzhqTG/img-1.jpg"
                alt="Shoes"
              /> */}
            </figure>
            <div>
                <img className="h-[200px] w-[200px] mx-auto" src={logo} alt="" />
                <h3 className="text-xl text-center text-accent font-bold">Looking for <span className="text-accent">Jobs?</span></h3>
                <p className="text-center my-2">Search Your dream jon with <span className="text-accent font-bold">Talenify</span></p>
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

export default Card;
