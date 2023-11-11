import Banner from "./Banner";
import BrowseByCategory from "./BrowseByCategory";
import TopCompanies from "./TopCompanies";
import HowItWorks from "./HowItWorks";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>
            <TopCompanies></TopCompanies>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;