import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const contactRef = useRef(null);

    useEffect(() => {
        const contactSection = contactRef.current;
    
        // Set initial state
        gsap.set(contactSection, { autoAlpha: 0, y: 50 });
    
        // Animate when scrolled into view
        gsap.to(contactSection, {
          scrollTrigger: {
            trigger: contactSection,
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
    <div ref={contactRef} className='button-bg'>
      <h1 className="pt-10 text-6xl text-white font-bold underline text-center"> Contact Me</h1>
      <div className='flex items-center lg:gap-96 gap-20 py-6 my-10 lg:flex-row justify-center flex-col'>
        <div className='text-center'>
          <img className='w-96 mb-10 rounded-3xl' src="https://slp-statics.astockcdn.net/static_assets/staging/24spring/home/curated-collections/card-5.jpg?width=580&format=webp" alt="" />
        </div>
        <div>
          <form action='https://formspree.io/f/mrgnlqaq' method='POST' className='justify-center items-center text-center flex gap-5 flex-col'>
            <input className='p-2 px-5 w-72 rounded-3xl bg-fuchsia-800 font-semibold shadow-inner text-white' type='text' name='name' required placeholder="Name" />
            <input className='p-2 px-5 w-72 rounded-3xl bg-fuchsia-800 font-semibold shadow-inner text-white' type="email" name='email' required placeholder="Email Address" />
            <textarea className='p-2 px-5 w-72 rounded-3xl bg-fuchsia-800 font-semibold shadow-inner text-white' name='message' required placeholder="Message"></textarea>
            <button className='bg-transparent text-white hover:bg-white rounded-3xl button-bg py-2 px-7 hover:text-black' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
