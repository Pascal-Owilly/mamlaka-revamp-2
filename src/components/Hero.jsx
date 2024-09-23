import React, { useEffect } from "react";
import styles from "../style";
import heroimg from "../assets/heroimg.jpeg";
import GetStarted from "./GetStarted";

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
    <section id="home" className={`relative flex md:flex-row flex-col ${styles.paddingY}`}
    style={{ 
      backgroundImage: `url(${heroimg})`, 
      backgroundSize: 'cover', // Change to contain
      backgroundRepeat: 'no-repeat', // Prevents repeating the image
      backgroundPosition: 'center', // Centers the image
    }}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[px] text-white ss:leading-[100.8px] leading-[48px]">
            The Africa Trade<br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Payment Network</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          MHS empowers Africa's trade finance with secure, tech-driven digital services for growth.
        </p>
      </div>

      {/* Background Image */}
      <div className={`flex-1 relative ${styles.flexCenter}`}>
        <div id="particles-js" className="absolute inset-0 z-[-1]" />
        <img src={heroimg} alt="Hero Background" className="w-full h-full object-cover relative z-[-1]" />
        
        {/* Atom SVG positioned on top */}
        <div className="absolute top-0 left-0">
          <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00f', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0ff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="10" fill="url(#text-gradient)" />
            <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="url(#text-gradient)" strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="100" cy="100" rx="40" ry="60" fill="none" stroke="url(#text-gradient)" strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="6s" repeatCount="indefinite" />
            </ellipse>
            <circle cx="160" cy="100" r="5" fill="url(#text-gradient)">
              <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="6s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
