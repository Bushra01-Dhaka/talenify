import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nav_bg from "../../assets/logo/black-bg-banner.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser,  googleLogin } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  console.log("In login page location", location);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    // register validate

    if (password.length < 6) {
      setRegisterError("Password should  be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("You should have at least one Uppercase character.");
      return;
    } else if (!/[@#$%^&*]/.test(password)) {
      setRegisterError("You should have at least one special character.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError("You should have at least one number.");
      return;
    }

    //reset error
    setRegisterError("");
    setSuccess("");

    //

    createUser(email,password)
    .then((result) => {
        console.log(result.user);
        toast.success("Logged In Successfully", {
          style: {
            border: "1px solid #82CD47",
            padding: "16px",
            color: "black",
          },
          iconTheme: {
            primary: "#82CD47",
            secondary: "#fff",
          },
        });
          //after login jekhane jabo
          navigate(location?.state ? location.state : "/");

          setSuccess("Logged In Successfully.");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError("Failed to Login!");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      console.log(result.user);
      toast.error("Logged In Successfully", {
        style: {
          border: "1px solid #82CD47",
          padding: "16px",
          color: "#82CD47",
          background: "black",
        },
        iconTheme: {
          primary: "#82CD47",
          secondary: "#fff",
        },
      });
        //after login jekhane jabo
        navigate(location?.state ? location.state : "/");

        setSuccess("Logged In Successfully.");
    })
    .catch((error) => {
      console.error(error);
      setRegisterError("Failed to Login!");
    });
  };

  
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${nav_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-full md:max-w-3xl mx-auto py-10 px-4 lg:px-0">
        <div className="border-2 border-primary rounded">
          <form onSubmit={handleRegister} className="card-body p-6">
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
              <button type='submit' className="btn btn-primary text-white">Login</button>
            </div>

            {registerError && (
              <p className=" my-2 text-sm text-center font-semibold text-red-700">
                {registerError}
              </p>
            )}
            {success && (
              <p className="my-2 text-sm font-semibold text-center text-green-600 t-4">
                {success}
              </p>
            )}

            {/* google */}

            <div className="py-6">
              <p className="text-center"> Or</p>

              <button onClick={handleGoogleLogin} className="btn btn-primary text-white w-full my-2">
                <FcGoogle className="text-xl"></FcGoogle> Sign Up with Google
              </button>
            </div>
          </form>
          <div className="pb-6 text-center">
            <p>
              Already have an account?{" "}
              <span className="text-primary font-bold underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
