import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin } from 'react-icons/ai';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out Successfully',
                    text: 'You have been successfully logged out.',
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#164863] rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/addjob"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Add Job
                        </NavLink>

                        <NavLink
                            to="/mypostedjobs"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            My Posted Jobs
                        </NavLink>
                        <NavLink
                            to="/mybids"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            My Bids
                        </NavLink>
                        <NavLink
                            to="/bidrequests"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Bid Requests
                        </NavLink>
                        </ul>
                    </div>
                    <Link className="flex justify-center items-center gap-2" to={'/'}>
                        <img src="https://i.ibb.co/7b0WpWz/pngwing-com-26.png" className="w-8 lg:w-1/12" alt="" />
                        <a className="normal-case text-sm lg:text-xl font-bold">CareerConnect</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/addjob"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Add Job
                        </NavLink>

                        <NavLink
                            to="/mypostedjobs"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            My Posted Jobs
                        </NavLink>
                        <NavLink
                            to="/mybids"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            My Bids
                        </NavLink>
                        <NavLink
                            to="/bidrequests"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Bid Requests
                        </NavLink>



                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="justify-end md:flex lg:flex items-center mr-3">
                            <div className="w-full text-center mr-2 rounded-full">
                                <div className="hidden md:flex lg:flex justify-center items-center text-lg font-semibold text-center">
                                    {user?.displayName}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="left-6 w-9 lg:w-11 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/cJjvjgj/user.png"} alt="User" onError={(e) => e.target.src = "https://i.ibb.co/cJjvjgj/user.png"} />
                                </div>
                            </div>
                        </div>
                    ) : null}


                    {user ? (
                        <Link className="btn bg-[#164863] h-2 text-white" onClick={handleSignOut}><RiLogoutCircleLine></RiLogoutCircleLine>LogOut</Link>
                    ) : (
                        <Link
                            to="/login"
                            className="btn bg-[#164863] h-2 text-white"
                        >
                            <AiOutlineLogin></AiOutlineLogin>Login
                        </Link>
                    )}



                </div>
                <label className=" swap swap-rotate ml-2">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={handleToggle} />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Navbar;