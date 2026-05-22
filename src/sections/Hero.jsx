import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id="home" className="p-10 text-center">
      <p className="text-green-300 font-bold">GROWING WITH DATA ANALYTICS</p>
      <h1 className="text-white font-bold sm:text-6xl text-4xl py-3">
        Grow with data.
      </h1>
      <h2 className="text-white font-bold sm:text-4xl text-2xl">
        Fast, flexible financing for{" "}
        <span>
          <ReactTyped
            strings={["B2B", "SaaS", "D2C"]}
            loop
            typeSpeed={40}
            backSpeed={50}
          />
        </span>
      </h2>
      <p className="sm:text-lg text-md my-1 text-gray-600 font-bold py-1">
        Monitor your analytics to increase revenue for B2B, B2C, and SaaS
        platforms.
      </p>
      <button className="bg-green-300 my-3 px-10 py-2 rounded-md font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
