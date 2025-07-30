import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to TechTide</h1>
            <p className="py-6">
              Bridging complex technology with curious minds — one clear
              explanation at a time.
            </p>
            <button className="btn btn-primary">Read Blogs</button>
            <button className="btn btn-primary">Bookmarks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
