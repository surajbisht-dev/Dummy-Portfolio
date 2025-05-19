import React from "react";
import heroImage from "../assets/hero.png"; // You’ll need to place the hero image here

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-[#0d1117] text-white">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-[#ff3cac]">FRONTEND</span>
          <br />
          <span className="text-[#784ba0]">DEVELOPER</span>
        </h1>

        <p className="text-lightText text-lg">
          I am Tatiana –{" "}
          <span className="text-link underline">web-developer</span> with a
          passion for creating beautiful and responsive websites.
        </p>

        <button className="bg-gradient-to-r from-[#ff3cac] to-[#784ba0] px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition transform">
          VIEW MY WORK
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Tatiana"
          className="w-[300px] md:w-[400px] rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
