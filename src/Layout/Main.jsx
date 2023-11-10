import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../pages/Home/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;