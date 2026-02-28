import Banner from "@/components/sites/home/Banner";
import BrandArea from "@/components/sites/home/BrandArea";
import Categories from "@/components/sites/home/Categories";

const Home = () => {
  return (
    <div className=" flex flex-col lg:gap-[72px] gap-10">
      <Banner />
      <BrandArea />
      <Categories />
    </div>
  );
};

export default Home;
