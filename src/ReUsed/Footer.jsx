import { Link } from "react-router-dom";
import logo from "../assets/logo/mainLogo.svg";

const Footer = () => {
  return (
    <div className="mt-8 bg-base-200">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
           <Link to='/'>
           <img className="h-[70px] object-cover" src={logo} alt="" />{" "}
              <span className="text-primary font-bold">job_hub</span>
           </Link>
        </nav>

        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a href="https://storyset.com/business">Illustrations by Storyset</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a href="https://lordicon.com/">Lordicon.com</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 "
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="text-center py-4">
         <small className="text-center text-primary py-4">Copyright © 2023 - All right reserved by Talenify</small>
         </div>
    </div>
  );
};

export default Footer;
