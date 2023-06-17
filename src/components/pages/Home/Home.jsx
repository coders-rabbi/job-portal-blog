import ClientReviews from "./ClientReviews";
import HomeBanner from "./HomeBanner/HomeBanner";
import LatestFeatured from "./LatestFeatured";
import TrendingJobs from "./TrendingJobs/TrendingJobs";

const Home = () => {
    return (
        <div >
           <HomeBanner></HomeBanner>
           <TrendingJobs></TrendingJobs>
           <LatestFeatured></LatestFeatured>
           <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;