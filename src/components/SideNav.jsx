import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import myphoto from "../assets/my-photo.jpg";

const SideNav = ({ handleThemeSwitch, theme }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="container">
      <div className="w-[50px] h-[50px] rounded-full mt-2 ">
        <img
          className=" w-full h-full my-2 rounded-full object-cover"
          src={myphoto}
          alt=""
        />
      </div>
      {/* <div onClick={handleThemeSwitch}>
        {theme ? (
          <MdOutlineDarkMode className="absolute top-4 right-20 md:right-[110px] z-[99]  text-3xl cursor-pointer" />
        ) : null}
      </div> */}

      {!nav ? (
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden text-3xl cursor-pointer"
        />
      ) : (
        <AiOutlineClose
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden text-3xl cursor-pointer"
        />
      )}

      {nav ? (
        <div
          className="fixed w-full h-screen  
           flex flex-col justify-center items-center z-20 md:hidden"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <a
            onClick={handleNav}
            href="#main"
            className="mobileNavList animate-slide-in"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="mobileNavList animate-slide-in"
          >
            <FcAbout size={20} />
            <span className="pl-4">About me</span>
          </a>
          <a
            onClick={handleNav}
            href="#code"
            className="mobileNavList animate-slide-in"
          >
            <BsCodeSlash size={20} />
            <span className="pl-4">Skill</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="mobileNavList animate-slide-in"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#main"
            className="mobileNavList animate-slide-in"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="mobileNavList animate-slide-in"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] right-[5%] z-10">
        <div className="flex flex-col">
          <a onClick={handleNav} href="#main" className="sideCircleNav">
            <AiOutlineHome size={20} />
          </a>
          <a onClick={handleNav} href="#about" className="sideCircleNav">
            <FcAbout size={20} />
          </a>
          <a onClick={handleNav} href="#code" className="sideCircleNav">
            <BsCodeSlash size={20} />
          </a>
          <a onClick={handleNav} href="#projects" className="sideCircleNav">
            <GrProjects size={20} />
          </a>
          <a onClick={handleNav} href="#main" className="sideCircleNav">
            <BsPerson size={20} />
          </a>
          <a onClick={handleNav} href="#contact" className="sideCircleNav">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
