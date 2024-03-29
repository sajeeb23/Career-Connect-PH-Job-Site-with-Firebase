import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'You have successfully logged in.',

                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Wrong email or password. Please try again.',
                });
            })


    }
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
    
            updateProfile(user, {
              photoURL: user.photoURL,
            })
              .then(() => {
                // Profile updated successfully
              })
              .catch((error) => {
                console.error('Error updating profile:', error);
              });
          })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen mt-4 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full md:w-screen lg:w-screen max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#164863]">Login</button>
                            </div>
                        </form>

                        <button onClick={handleGoogleSignIn} className="mx-8 mb-2 btn btn-google">
                            <FcGoogle></FcGoogle>Login with Google
                        </button>
                        <p className="font-medium mx-auto mb-4">Do not have an account? <Link to="/signup" className="text-blue-700">Sign Up</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;