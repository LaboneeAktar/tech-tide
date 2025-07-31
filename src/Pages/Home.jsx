import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";

const Home = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center min-h-[calc(100vh-92px)]">
        <Hero></Hero>

        <img className="absolute bottom-0 w-full -z-10" src={wave} alt="" />
      </div>
    </>
  );
};

export default Home;
