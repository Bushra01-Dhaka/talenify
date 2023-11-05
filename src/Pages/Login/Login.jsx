import green_img from "../../assets/banner/green-bg.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

defineElement(lottie.loadAnimation);

const Login = () => {
  const { createUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    createUser(email,password)
    .then(result => {
      console.log(result.user);
      toast.success('Logged In Successfully', {
          style: {
            border: '1px solid #82CD47',
            padding: '16px',
            color: '#82CD47',
            background: 'black',
          },
          iconTheme: {
            primary: '#82CD47',
            secondary: '#fff',
          },
        });

        // navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
          console.error(error);
          
      })

  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center ">
      <div
        className=" h-screen my-auto"
        style={{
          backgroundImage: `url(${green_img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex-1  mt-[200px] bg-black mx-4">
          <div className="text-primary space-y-4 p-6 my-auto">
            <h1 className="text-4xl font-bold">New Here?</h1>
            <p className="text-white">
              Sign Up and discover a great amount of new opportunities!
            </p>
            <Link to="/register">
              <button className="btn btn-primary my-4 text-white rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 ">
        <div>
          <h1 className="text-4xl font-bold text-center">
            Login{" "}
            <span>
              <lord-icon
                src="https://cdn.lordicon.com/pdwpcpva.json"
                trigger="hover"
                style={{
                  width: "50px",
                  height: "60px",
                }}
              ></lord-icon>
            </span>
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">Login</button>
            </div>

            {/* google */}

            <div className="py-6">
              <p className="text-center"> Or</p>

              <button className="btn btn-primary text-white w-full my-2">
                <FcGoogle className="text-xl"></FcGoogle> Sign Up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
