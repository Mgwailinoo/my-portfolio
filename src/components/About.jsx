import React from "react";

const About = () => {
  return (
    <div id="about" className="container">
      <div>
        <h1 className="text-4xl dark:text-[#72EF36] text-center font-bold md:text-left  text-[#001b5e]">
          A little about me
        </h1>
        <p className="font-poppins md:text-2xl text-xl font-light leading-relaxed text-[18px]  mt-4">
          As a fresh junior developer, my objective is to gain hands-on
          experience in web development, while developing my skills in
          programming languages such as HTML, CSS, JavaScript and react. I am
          eager to learn, have a strong work ethic, and am excited to contribute
          to a team-oriented work environment.
        </p>
        <h1 className="text-4xl  dark:text-[#72EF36] font-bold text-center md:text-left mt-8 text-[#001b5e]">
          Education
        </h1>
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200 mt-6">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -left-1.5 border-white" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <span className="inline-block px-2 py-1 font-semibold text-white bg-gray-900 rounded-md">
                Final Year Student
              </span>
              <span className="text-lg font-semibold  text-[#001b5e]">
                University of Computer Studies (Thaton)
              </span>
              <span className="my-1 text-sm font-normal leading-none text-stone-400">
                (2016-2020)
              </span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default About;
