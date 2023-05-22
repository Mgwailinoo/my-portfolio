import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Skill = () => {
  return (
    <div id="code" className="container md:mt-[40px] mt-[40px]">
      <h1 className="text-4xl dark:text-[#72EF36] text-center font-bold md:text-left   text-[#001b5e]">
        My Skill
      </h1>
      <div className="my-6 grid md:grid-cols-6 grid-cols-3 md:gap-1 gap-3 md:justify-start justify-center items-center">
        <div className="flex flex-col items-center my-5">
          <FaHtml5 color="#E34F26" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">HTML</p>
        </div>
        <div className="flex flex-col items-center my-5">
          <FaCss3Alt color="#1572B6" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">CSS</p>
        </div>

        <div className="flex flex-col items-center my-5">
          <FaJsSquare color="#F7DF1E" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">JavaScript</p>
        </div>

        <div className="flex flex-col items-center my-5">
          <FaBootstrap color="#563D7C" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center my-5">
          <FaReact color="#61dafb" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">React</p>
        </div>

        <div className="flex flex-col items-center my-5">
          <SiTailwindcss color="#06b6d4" className="icon" />
          <p className="text-center mt-2 md:text-2xl text-xl">Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
