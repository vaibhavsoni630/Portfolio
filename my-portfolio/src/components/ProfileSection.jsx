import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect"
import "../App.css";

function ProfileSection() {
   
     return (
          <div className=" my-20 lg:pt-20 w-auto gap-10 text-white flex flex-col items-center ">
               <div>
                    <img
                         className=" img-shadow w-72 h-72 rounded-full"
                         src="https://t3.ftcdn.net/jpg/05/71/35/08/240_F_571350807_CpzPdIH64mtVOJ935wPI0wjdr45VQmKo.jpg"
                         alt="image"
                    />
               </div>
               <div className="flex gap-5 flex-col justify-center items-center">
                    <span className="text-2xl">Namaste</span>
                    <span className="lg:text-6xl font-semibold text-4xl">
                         I Am <span className=" text-red-700  "> VAIBHAV SONI</span>
                    </span>
                    
                    <span className="text-2xl lg:text-5xl  ">
                    <Typewriter 
                     onInit={(type)=>{
                        type.typeString("Full Stack Developer")
                        .pauseFor(300)
                        .deleteAll()
                        .typeString("MERN Stack Developer")
                        .start()
                        .pauseFor(300)
                        
                        
                        
                        
                     }}
                     />
                    </span>
                    
                    
                    <span className="text-sm lg:w-6/12 text-center">
                         I'm a full-stack developer adept in the MERN stack, encompassing MongoDB for databases, Express.js for server-side
                         development, React.js for user interface creation, and Node.js for JavaScript runtime environment. This proficiency empowers
                         me to handle both front-end and back-end aspects of web applications, offering a comprehensive development skillset.
                    </span>
               </div>

             
               <div className="flex justify-around gap-10">
                    <motion.div whileTap={{ scale: 0.7 }}>
                         {" "}
                         <a href="https://github.com/vaibhavsoni630" className="rounded-3xl  cursor-pointer py-3 px-4 lg:mx-10 button-bg"> Github</a>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.7 }}>
                         {" "}
                         <a href="https://www.linkedin.com/in/vaibhav-soni-98939a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2ZmX5erbSNOKUMeMcs0GcA%3D%3D" className="rounded-3xl  cursor-pointer py-3 px-4 lg:mx-10 button-bg">Linkedin</a>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.7 }}>
                         {" "}
                         <a href="https://drive.usercontent.google.com/u/0/uc?id=1EK--r84m1_Krzzir_7lvIlMe2qo04Afz&export=download" className="rounded-3xl  cursor-pointer py-3 px-4 lg:mx-10 button-bg">Resume</a>
                    </motion.div>
               </div>
          </div>
     );
}

export default ProfileSection;
