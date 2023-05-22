import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import SideNav from "./components/SideNav";
import Skill from "./components/Skill";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 150,
    });
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <SideNav handleThemeSwitch={handleThemeSwitch} theme={theme} />

      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-right">
        <About />
      </div>
      <div data-aos="fade-up">
        <Skill />
      </div>
      <div data-aos="fade-up" data-aos-duration="4000">
        <Project />
      </div>
      <div data-aos="fade-zoom-in">
        <Contact />
      </div>
    </div>
  );
}

export default App;
