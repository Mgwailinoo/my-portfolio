import React from "react";
import { TypeAnimation } from "react-type-animation";
import code from "../assets/code.gif";
import cv from "../assets/cv/WaiLinOo-CV.pdf";
const Hero = () => {
  return (
    <div id="main" className="relative ">
      <div className="w-full h-screen  top-0 left-0  ">
        <div className="max-w-[700px] m-auto h-full w-full sm:mb-20 flex flex-col justify-center  items-center">
          <div className="p-5 bg-[#F0ECE6]">
            <h1 className="sm:text-5xl text-black  md:text-6xl text-4xl font-bold ">
              I'm Wai Lin Oo
            </h1>
            <h2 className="flex sm:text-3xl md:text-4xl text-3xl pt-4 text-gray-800">
              <TypeAnimation
                sequence={[
                  " Self-Taught Developer", // Types 'One'
                  1000, // Waits 1s
                  " Junior Web Developer", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "30px",
                  paddingLeft: "5px",

                  color: "#72EF36",
                }}
              />
            </h2>
            <div className="flex md:justify-start justify-center items-center gap-4">
              <a
                href={cv}
                download
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
              >
                <span>Download CV</span>
              </a>
              <a
                href="https://github.com/Mgwailinoo"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
              >
                <span>My Github</span>
              </a>
            </div>
          </div>

          <img
            src={code}
            className=" absolute top-0 left-0 align-self w-full h-full object-cover z-[-5] bg-white/90 filter"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
