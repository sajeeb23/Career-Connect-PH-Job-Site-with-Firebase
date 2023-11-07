import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className="flex gap-2" to={'/'}>
                        <img src="https://i.ibb.co/7b0WpWz/pngwing-com-26.png" className="w-1/12" alt="" />
                        <a className=" normal-case text-xl font-bold">CareerConnect</a>
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
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
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
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
                            }
                        >
                            Add Job
                        </NavLink>

                        <NavLink
                            to="/mycart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
                            }
                        >
                            My Posted Jobs
                        </NavLink>
                        <NavLink
                            to="/mycart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
                            }
                        >
                            My Bids
                        </NavLink>
                        <NavLink
                            to="/mycart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
                            }
                        >
                            Bid Requests
                        </NavLink>
                        <NavLink
                            to="/mycart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#427D9D] text-white py-2 px-3"
                                        : "bg-[#164863] hover:text-gray-500 text-white py-2 px-3"
                            }
                        >
                            Login
                        </NavLink>


                    </ul>
                </div>
                <div className="navbar-end">
                    <img src="https://i.ibb.co/cJjvjgj/user.png" className="w-10" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;