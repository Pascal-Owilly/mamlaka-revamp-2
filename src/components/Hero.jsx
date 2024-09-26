import React, { useEffect } from "react";
import styles from "../style";
import heroGif from "../assets/map_1.gif"; // Importing the GIF

const Hero = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${heroGif})`, // Set GIF as background image
        backgroundSize: "cover", // Make sure the GIF covers the entire section
        backgroundPosition: "right", // align bg to the right
        zIndex: '2',
      }}
    >
      <div className={`flex-2 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[48px]">
            The Africa Trade
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient-2">Payment </span>{" "}
            <span>Network</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MHS empowers Africa's trade finance with secure, tech-driven digital services for growth.
        </p>

        {/* Get Started Button with sliding arrow */}
        <div className={`${styles.flexCenter} mt-5`}>
          <button
            className="py-4 px-6 text-white rounded-full flex items-center justify-center"
            style={{ background: "#852890" }}
          >
            Get Started
            <span className="ml-3 arrow">→</span> {/* Forward arrow */}
          </button>
        </div>
      </div>

      {/* Particle Effect */}
      <div className={`flex-1 relative ${styles.flexCenter}`}>
        <div id="particles-js" className="absolute inset-0 z-[-1]" />
      </div>

    </section>
  );
};

export default Hero;
