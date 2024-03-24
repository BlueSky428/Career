import Banner from "../Banner/Banner";
import Categorylist from "../category-list/Categorylist";
import FeaturedJobs from './../featured_jobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categorylist></Categorylist>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;