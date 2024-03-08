import React, { useEffect, useRef } from "react";
import "../App.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

function Certification() {
     const certificateRef = useRef(null);

     useEffect(() => {
          const certificateSection = certificateRef.current;
      
          // Set initial state
          gsap.set(certificateSection, { autoAlpha: 0, y: 50 });
      
          // Animate when scrolled into view
          gsap.to(certificateSection, {
            scrollTrigger: {
              trigger: certificateSection,
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
          <div ref={certificateRef} className=" my-10 lg:my-20  ">
               <h1 className='text-6xl my-10 text-white underline font-bold text-center'>Certifications</h1>
               
              <div className=" flex lg:flex-row w-full justify-center flex-col gap-10 lg:gap-36">
               <div className=" text-center lg:my-10 flex flex-col items-center">
                    <h3 className="text-3xl my-6   "><span className=" certificate-font">Frontend </span> Development</h3>
                    <a href="https://certificates.almabetter.com/en/verify/24289593016554"><img className=" cursor-pointer lg:w-60 mx-6 w-60 rounded-3xl button-bg" alt="frontend-certificate-image" src=" ../src/assets/frontend.png" ></img></a>
               </div>
               <div className=" text-center flex flex-col items-center">
                    <h3 className="lg:text-5xl text-3xl my-6  "><span className=" certificate-font">Full-stack </span> Development</h3>
                    <a href=" https://certificates.almabetter.com/en/verify/95760123768239"><img hr className=" lg:w-80 cursor-pointer   mx-6 w-60 rounded-3xl button-bg" alt="frontend-certificate-image" src=" ../src/assets/full-stack.png" ></img></a>
               </div>
               <div className=" text-center flex lg:my-10 flex-col items-center">
                    <h3 className="text-3xl my-6  "><span className=" certificate-font">Backend </span> Development</h3>
                    <a href="https://certificates.almabetter.com/en/verify/96266541961840"><img className=" cursor-pointer lg:w-60 mx-6 w-60 rounded-3xl button-bg" src=" ../src/assets/backend.png" ></img></a>
               </div>
              </div>
          </div>
     );
}

export default Certification;
