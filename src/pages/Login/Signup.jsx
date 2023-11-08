/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password, name, photo)
    .then((result) => {
      setPhotoURL(photo);
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful',
        text: 'You have successfully signed up.',
      });
      console.log(result.user);
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: 'error',
          title: 'Email Already in Use',
          text: 'The email you provided is already in use. Please use a different email.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: error.message,
        });
      }
      console.error(error);
    });
};

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#164863]">Sign Up</button>
            </div>
          </form>

          <p className="mx-auto mb-4 font-medium">
            Already have an account?
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
