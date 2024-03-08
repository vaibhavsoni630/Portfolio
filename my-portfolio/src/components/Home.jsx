import React from "react";
import Navbar from "./Navbar";
import ProfileSection from "./ProfileSection";
import Aboutme from "./Aboutme";
import TabComponent from "./Projects";
import TechStacks from "./TechStacks";
import Certification from "./Certification";
import Contact from "./Contact";

function Home() {
     return (
          <div>
               <Navbar />
               <ProfileSection />
               <Aboutme />
               <TabComponent />
               <TechStacks />
               <Certification />
               <Contact />
          </div>
     );
}

export default Home;
