import AddSection from "@/components/sites/home/AddSection";
import Banner from "@/components/sites/home/Banner";
import BrandArea from "@/components/sites/home/BrandArea";
import Categories from "@/components/sites/home/Categories";
import FeatureJobs from "@/components/sites/home/FeatureJobs";
import LatestJob from "@/components/sites/home/LatestJob";

const Home = () => {
  return (
    <div className=" flex flex-col lg:gap-[72px] gap-10">
      <Banner />
      <BrandArea />
      <Categories />
      <AddSection />
      <FeatureJobs />
      <LatestJob />
    </div>
  );
};

export default Home;
