import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechTide</title>
      </Helmet>
      <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
        <Hero></Hero>

        <img className="absolute bottom-0 w-full -z-10" src={wave} alt="" />
      </div>
    </>
  );
};

export default Home;
