import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import "../App.css";
import Cards from "./Card";
import FrontendSlider from "./FrontendSlider";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

function TabComponent() {
  const [activeTab, setActiveTab] = useState(1);
  const tabRef = useRef(null);

  useEffect(() => {
    const tabSection = tabRef.current;

    // Set initial state
    gsap.set(tabSection, { autoAlpha: 0, y: 50 });

    // Animate when scrolled into view
    gsap.to(tabSection, {
      scrollTrigger: {
        trigger: tabSection,
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

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div ref={tabRef} className="flex flex-col my-20 gap-20 items-center bg-transparent">
      <h1 className="text-6xl font-bold underline text-white">Projects</h1>
      <div className="flex gap-5 lg:gap-52">
        <button
          style={{
            backgroundColor: activeTab === 1 ? "#f3f4f6" : "transparent",
            color: activeTab === 1 ? "#000" : "#fff",
          }}
          className="py-2 px-4 bg-transparent button-bg text-white rounded-2xl"
          onClick={() => handleTabClick(1)}
        >
          Frontend
        </button>
        <button
          style={{
            backgroundColor: activeTab === 2 ? "#f3f4f6" : "transparent",
            color: activeTab === 2 ? "#000" : "#fff",
          }}
          className="py-2 px-4 bg-transparent button-bg text-white rounded-2xl"
          onClick={() => handleTabClick(2)}
        >
          Backend
        </button>
        <button
          style={{
            backgroundColor: activeTab === 3 ? "#f3f4f6" : "transparent",
            color: activeTab === 3 ? "#000" : "#fff",
          }}
          className="py-2 px-4 bg-transparent button-bg text-white rounded-2xl"
          onClick={() => handleTabClick(3)}
        >
          MERN-stack
        </button>
      </div>

      <div className="mt-8">
        {/* Table Content */}
        {activeTab === 1 && <FrontendSlider />}
        {activeTab === 2 && (
          <Cards
            description={
              "This is a backend project of youtube you can get subscribers list by their name or their id i used mongodb for database here (loading may be take time for 10 second to live previes"
            }
            imglink={
              "https://t3.ftcdn.net/jpg/03/03/78/34/240_F_303783442_F4zE29PpiDaLBCmRqrnA0j2x5RaGUC6a.jpg"
            }
            title={"Get-Youtube-Subscriber"}
            prevlink={"https://get-youtube-subscribers-kfrn.onrender.com/"}
            gitlink={"https://github.com/vaibhavsoni630/GET-YOUTUBE-SUBSCRIBERS"}
          />
        )}
        {activeTab === 3 && (
          <Cards
            title={"Books-Bar"}
            imglink={
              "https://t4.ftcdn.net/jpg/07/32/09/21/240_F_732092109_FolDChB3zQST14Muix523aTAXMTmvnbG.jpg"
            }
            description={
              "This is a complete MERN technologies project user can upload, view , read and delete books from this book store also there ia firebase authintication for login and sign-up ( THIS PROJECT CAN TAKE SOME TIME TO COMPLETE LOAD BUT PLEASE WAIT IT WILL WORTH IT)"
            }
            gitlink={"https://github.com/vaibhavsoni630/MERN-Book-Store"}
            prevlink={"https://booksbar-d9bl.onrender.com/"}
          />
        )}
      </div>
    </div>
  );
}

export default TabComponent;
