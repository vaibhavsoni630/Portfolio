import React, { useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion
import '../App.css'
import { Link } from "react-router-dom";

function Navbar() {
     const navItems = [
          { link: "Home", path :"/" },
          { link: "Contact", path :"/contact" }, 
          { link: "Projects", path :"/project" },
          { link: "About", path :"/about-me" },
          { link: "Certificate", path :"/certificate" },
     ];

     const [isMenuOpen, setisMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          // Cleanup the event listener on unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

     function toggleMenu() {
          setisMenuOpen(!isMenuOpen);
     }
     function closeMenu() {
          setisMenuOpen(false);
     }

     // Function to scroll to the top of the page
     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               // Remove the smooth scrolling behavior for fast scrolling
          });
     };

     return (
          <div>
               <header className={`w-full Navbar top-0 ${scrolled ? "button-bg bg-white" : ""} py-5  right-0 left-0`}>
                    <nav className=" flex justify-around text-white">
                         <div className=" md:flex hidden gap-10">
                              {navItems.map(({ link, path }) => (
                                   <motion.div 
                                        key={path}
                                        whileTap={{ scale: 0.70 }}
                                        className="button-bg rounded-3xl py-2 px-6 font-semibold text-gray-300"
                                   >
                                        {link === "Home" ? (
                                             <Link to={path} onClick={scrollToTop}>{link}</Link>
                                        ) : (
                                             <Link to={path}>{link}</Link>
                                        )}
                                   </motion.div>
                              ))}
                         </div>

                         {/* menu button for small devices */}
                         <div className=" md:hidden top-0 fixed text-2xl right-10">
                              {!isMenuOpen ? (
                                   <button onClick={() => {toggleMenu(); scrollToTop();}} className="bg-transparent p-2 rounded-full bg-white text-neutral-900">
                                        <FaBarsStaggered />
                                   </button>
                              ) : (
                                   <button onClick={closeMenu} className="fixed top-4 right-5 bg-transparent text-black">
                                        <FaXmark /> 
                                   </button>
                              )}
                         </div>

                         <div className={`lg:hidden my-5 ${isMenuOpen ? "flex gap-5 flex-col" : "hidden"}`}>
                              {navItems.map(({ link, path }) => (
                                   <motion.div 
                                        key={path}
                                        whileHover={{ scale: 1.2 }}
                                        className="rounded-3xl button-bg py-2 px-10"
                                   >
                                        {link === "Home" ? (
                                             <Link to={path} onClick={scrollToTop}>{link}</Link>
                                        ) : (
                                             <Link to={path}>{link}</Link>
                                        )}
                                   </motion.div>
                              ))}
                         </div>
                    </nav>
               </header>
          </div>
     );
}

export default Navbar;
