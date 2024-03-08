import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function Aboutme() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    // Set initial state
    gsap.set(aboutSection, { autoAlpha: 0, y: 50 });

    // Animate when scrolled into view
    gsap.to(aboutSection, {
      scrollTrigger: {
        trigger: aboutSection,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex flex-col button-bg p-5 lg:py-10 lg:mx-20  lg:flex-row items-center justify-center gap-10  lg:gap-32"
    >
      <div className="w-full lg:w-1/2 max-w-md">
        <img
          className="rounded-3xl w-full "
          src="https://t4.ftcdn.net/jpg/07/38/93/23/240_F_738932354_pbMYtZUlXe9wMlbSd8RUiU7CBa3qBx2O.jpg"
          alt="image"
        />
      </div>
      <div className="w-full lg:w-1/2   max-w-md">
        <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
        <span className="text-white ">
          As a seasoned MERN stack developer, I bring a wealth of experience in building robust web applications, leveraging MongoDB, Express.js, React.js, and Node.js. Now, I'm eager to pivot towards frontend development, particularly focusing on React.js. With a strong foundation in full-stack development, I possess a deep understanding of both backend and frontend technologies, allowing me to craft engaging user interfaces while seamlessly integrating them with backend functionalities. My goal is to contribute my expertise to projects where I can leverage React.js to create intuitive and visually appealing user experiences, driving user engagement and satisfaction.
        </span>
      </div>
    </div>
  );
}

export default Aboutme;
