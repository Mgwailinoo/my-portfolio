import React from "react";
import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project2.png";
import Project3 from "../assets/projects/project3.png";
import Project4 from "../assets/projects/project4.png";

const Project = () => {
  return (
    <>
      <div id="projects" className="container md:my-[60px] my-[60px]">
        <h1 className="text-4xl  dark:text-[#72EF36] text-center font-bold md:text-left  text-[#001b5e]">
          My Projects
        </h1>
        <div className="grid md:grid-cols-4  gap-4 my-[30px] justify-center items-center">
          <div class="block rounded-md w-full h-[430px]   shadow-md border-2">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-md w-full h-[200px] object-cover"
                src={Project1}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-poppins    font-medium leading-tight text-[#333333] ">
                Game Website UI (Desktop View)
              </h5>
              <p class="mb-4 flex gap-2 items-center">
                <span class="inline-block text-[15px] whitespace-nowrap rounded-full bg-green-200 dark:text-black px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  html
                </span>
                <span class="inline-block text-[15px] whitespace-nowrap rounded-full bg-green-200 dark:text-black px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  css
                </span>
                <span class="inline-block text-[15px] whitespace-nowrap rounded-full bg-green-200 dark:text-black px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  js
                </span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://gamewebsiteui.netlify.app/"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> View</span>
                </a>
                <a
                  href="https://github.com/Mgwailinoo/Game-Website-UI"
                  target="_blank"
                  className="bg-red-500 hover:bg-red-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> Github</span>
                </a>
              </div>
            </div>
          </div>
          <div class="block rounded-md w-full h-[430px]  shadow-md border-2">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-md w-full h-[200px] object-cover"
                src={Project2}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-poppins   font-medium leading-tight text-neutral-800 ">
                Team Portfolio (Desktop View)
              </h5>
              <p class="mb-4 flex flex-wrap gap-2 items-center">
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  html
                </span>
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  css
                </span>
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  js
                </span>
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  swiper.js
                </span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://team-protfolio.netlify.app/"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> View</span>
                </a>
                <a
                  href="https://github.com/Mgwailinoo/Team-Portfolio"
                  target="_blank"
                  className="bg-red-500 hover:bg-red-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> Github</span>
                </a>
              </div>
            </div>
          </div>
          <div class="block rounded-md w-full h-[430px]  shadow-md border-2">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-md w-full h-[200px] object-cover"
                src={Project3}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-poppins  font-medium leading-tight text-neutral-800 ">
                Beauty Shop (Desktop View)
              </h5>
              <p class="mb-4 flex flex-wrap gap-2 items-center">
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  React js
                </span>
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  Material UI
                </span>
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  React Context
                </span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://beauty-shop-testing.netlify.app/"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> View</span>
                </a>
                <a
                  href="https://github.com/Mgwailinoo/react-ecommerce"
                  target="_blank"
                  className="bg-red-500 hover:bg-red-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> Github</span>
                </a>
              </div>
            </div>
          </div>
          <div class="block rounded-md w-full h-[430px]  shadow-md border-2">
            <div
              class="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                class="rounded-t-md w-full h-[200px] object-cover"
                src={Project4}
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-6">
              <h5 class="mb-2 text-xl font-poppins   font-medium leading-tight text-neutral-800 ">
                Drill Machine Shop (Desktop View)
              </h5>
              <p class="mb-4 flex flex-wrap gap-2 items-center">
                <span class="inline-block text-[15px] dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  React js
                </span>
                <span class="inline-block text-[15px]  dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  Chakra UI
                </span>
                <span class="inline-block text-[15px]  dark:text-black whitespace-nowrap rounded-full bg-green-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline  font-bold leading-none font-poppins">
                  Redux
                </span>
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://drillmachineshoponline.netlify.app/"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> View</span>
                </a>
                <a
                  href="https://github.com/Mgwailinoo/drill-machine-shop"
                  target="_blank"
                  className="bg-red-500 hover:bg-red-600 shadow-md text-white font-bold py-2 px-4 mt-4 rounded inline-flex items-center"
                >
                  <span> Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
