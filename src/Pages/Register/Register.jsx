import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import nav_bg from "../../assets/logo/black-bg-banner.svg"

const Register = () => {
  return (
    <div className=""  style={{
        backgroundImage: `url(${nav_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <div className="max-w-full md:max-w-3xl mx-auto py-10 px-4 md:px-0">
          <div className="border-2 border-primary rounded">
            <form className="card-body p-6">
            <h1 className="text-4xl font-bold text-center">
              Register{" "}
              <lord-icon
                src="https://cdn.lordicon.com/pdwpcpva.json"
                trigger="hover"
                style={{
                  width: "50px",
                  height: "60px",
                }}
              ></lord-icon>
            </h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>

              {/* google */}

              <div className="py-6">
                <p className="text-center"> Or</p>

                <button className="btn btn-primary text-white w-full my-2">
                  <FcGoogle className="text-xl"></FcGoogle> Sign Up with Google
                </button>
              </div>
            </form>
            <div className="pb-6 text-center">
                <p>Already have an account? <span className="text-primary font-bold underline"><Link to='/login'>Login</Link></span></p>

            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Register;
