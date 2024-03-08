import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

function TechStacks() {

  const techRef = useRef(null);

  useEffect(() => {
    const techSection = techRef.current;

    // Set initial state
    gsap.set(techSection, { autoAlpha: 0, y: 90 });

    // Animate when scrolled into view
    gsap.to(techSection, {
      scrollTrigger: {
        trigger: techSection,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      autoAlpha: 2,
      y: 0,
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={techRef} className=' p-10 flex button-bg flex-col gap-10 items-center'>
        <h1 className=' mt-5 mb-10 font-bold text-yellow-400 text text-6xl underline'> Tech Tools </h1>
      <div className=' flex  lg:gap-40 gap-10 flex-row'>
      <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src="https://t3.ftcdn.net/jpg/04/16/01/64/240_F_416016438_dLFqETksmayT8xVcfYfqCfAtYCJPENJi.jpg" alt=" javascript" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src="https://t3.ftcdn.net/jpg/05/15/64/04/240_F_515640411_OqqR0RBCCWu9zUlvcb7mBNuXEYIJnY3H.jpg" alt="HTML" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src=" https://t3.ftcdn.net/jpg/05/15/64/02/240_F_515640293_nJo6TqIZqDNpKNTJ6Ufzuikmtq8VyNoV.jpg" alt="" />
      </div>
      <div className=' flex  lg:gap-40 gap-10 flex-row'>
      <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src="https://t3.ftcdn.net/jpg/03/04/97/12/240_F_304971233_mQ4xlfnBGSszgzJPYzQnZtWI04ZNmuuP.jpg" alt="React.js" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src=" https://t3.ftcdn.net/jpg/03/52/67/82/240_F_352678266_NFcwIwhhY76mkQItT4lCxyxcCTP3LgvY.jpg" alt="node.js" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src=" https://t4.ftcdn.net/jpg/05/83/61/63/240_F_583616375_80qhPkwmULzhpMzZaXgw9jYwucbev0HP.jpg" alt="bootstrap" />
      </div>
      <div className=' flex  lg:gap-40 gap-10 flex-row'>
      <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src=" https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616422_9i7lVMP5EcRAv8zc0rS5D6HzwhbZth4K.jpg" alt="Redux" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABBVBMVEX///8AlUYArkIAr0IAIC8Al0YAHy8AHSwAFCYAmkWOlprz9fUAGCnv8PHq7O37/PzJzc8uP0sAk0Hf4eMpOkUQKTdGU11dZ3AAkDq9wsUAABfc3+EAqjYAqC0ApyYAjTL0/PkAtEu0xMGepakLJTMACh8cLzs2RU/3/vvq+PBnxYC5xcVpc3uvtbnR1Nd1foSAiY5QXGSco6cAAABfaXG3vMBrdXx2x5TD69IAkhlFvmsAmjGKxp8ApENZw3pYt4Kr28DV7t+V27AaoFc1p2Vsvo6o4b2U0K98wZa56Mt00Zml2r4vu19tzIyq4LwQsF9Jv4ZlvZWcx7ZlrocAowuIv6gAABCOe7WcAAAIfElEQVR4nO2ae5uiyBWHUWqE5W4DdiP2TaFoewTUUXfSSfduz0wus5nOJptkvv9HSVEFKl528jyJXc8W5/1HRO0+P861CiQJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDfAjdj3hbwY/w9bwv48f53d7xN4MbD7//A2wRevFw+XjQz4++eLuXHsx94m8GDm4dBW35sXfyZtyGvD5Xefmy1rn/kbcprU0gnEO1vrt/zNuZ1sZ+o9Ha7RcRfNEv8y2V7rb3Vunjmbc8r8qGSzrSfvWmO+PeXpMxtaW+dfWzKfHdzy3TLa+2ti6a0+ZdBu12LecJ1M9r8+6vS61t+J+KbkPJ3t3J73++ts0+8DXsFNjW+4E2rQVF/M2gf1t4Sf0n3/WBT5He0/5G3bSfmZiAf87vw5e7DoC0f0y6449dFXi6b3Lb21rXQGf/5qnI4uwZyTfuF0Lt3T/Uqv6O9dXbD28DTMR5s3M6ivq5d5D2cP122f93vAg9394Nf1y5wtbsbtDcdTj6kXdxd2+ermnSS7rvaxQ36D1shf6jHiTzU329P8oe1i1rpi6GuNtDu9Tji97/wtvI0jC/r0g/5XdRdy8817QfrvLBdrix1tVK/r/1H3maehJ/qk4182O9/5W3mSdhdyBzULugi/kn+dq1rCfowwpfmar+7rc90R7QLOdXe3Lb3OKD94w1vQ09AXbt8pL+3BNUubwX7Mb+Lqn1XOTn4rhkxX9T5cpJdX4ID2oWsdUV/Z8Nce3Owr13M2eZ+sJ/v+9qF7O/lPL894Mj72gVdwLMd6vruxZ52Qddxz/+VdjEfNLTl/b2L/ZgXc+9Cuperee5ovp99EnPPavtRG/lIfxe01EnS+GpnuNnXLmi6Ex7WEx0bbRp0b2Id9DJN/APaBX62dPv++8F13IWYO5WUl8HOWmZH+3eCVvmC56v1VMuKXkOqPOW+fit2R7vYT9g9bz9E3d56lpgONuJWOspL3fENcnvtWWJ5x+8CN7iSv121N7Wurl3YuWbNw2Azzj9uR7ywzxltGA/Wazn5561CJ+Ym5Q6fr6r9Svnns8YUupKfqrXs4O9r7YLuVe3zUBb7wT8q7eLX+DVfmPjLXyrpjUh2xpgl/OXbj0y6oE9XHWbMtu6CfxZBf/ZG/M6+zfh2QFpc8Mt1EfA3vK15ZcZfBoMfguDT2XWDcn3N07/+/XY4bMI4d4APQ0LI2wpOELcPLd5GcMIh2m3eRnAiGw7f8raBF+Fw6PC2gRduc0udZA2HLm8beKEPhyZvG3hhN7fMN1q79LaxLY4kvM7bAgAAAAAAAAAAAOD/gRmaBMslWJulnmtVJwVe/tkzw0uSxPd91PGSScqkZlHUTRLcQQgnE2H3d23LWUU+Woaus8yxqvSoUt1dJj7KnSBdKFFnxNvI02Fi3GX7WVaOfJSysxpiR2mEI3F3eHXP71ZZrXUwysojxIJ9EikpJ8tOz7Z2aRVFMxoEWqfDtJMA0DhZdnpq2l2MVep4Da21q7yrne4EkhSO5kHhlWw0X262nM2llmvL6taD5ZDa5ExXo7UeK80n06VFfsa+Y420Ffs77C9va5dWPnNzFfP2eTw5oaxvo48mPXVqrlCsqlPJnah91ZhUxo+82XSB4mRJjs3prGvMrFk/RkavFDTCk1EeK93zmWrRr/iT6axvzKoKVtc+Qv6ieCUxH0i2bWloyrfF28sF8pPZPHMWUbTozZ3gHKlz9tm0X/SgMEEKCQw97UW4m2jpqBcpU/r56F3hx0D1k17xCysxSEzbAUJeGSl17QHyacJrCHd7vQQrScr7ZpY9i5LCa3ov6hW26LOI+TXtUzdJIfaTwmaz69MvmonvFed1g3pbmkUz+r1Fn7XrVCmvzY72bK3dz9P5aOUhJeGd7yuFadQMVodTBRdBq/eMcvTQqOM3IrUO7cth32BvFXopwjguY72LO0xxXbuD/HOmneW7O4l8Pzulsm8zUahJ0lJNaAwGBtWeFWlJyeKIFikSEPR9akQhPW1Qv49Ueu3mCip1apHB/FnXnnainH5c1Xn93EerUyr7NhvtXaolY9odBZXaXT+iQVxpD1Sq3eorNDAWX+n3pigqdaZKh80sde3TSC2K5ka7FCi4y/cxpV3tTqndQGXMm110SLu0UjF5dd6xAWWK1DLmA4XlSF27nfhdGlcb7ZmPveJf2txu5B7R7kYsRIupxKB+3NWur3zjfJKUc2mqqEF1FLMCXtOeIpVdyyrfi+oXLWzJdjOLV7M7EPPUGb3IYwEZxrgs6KV2ozI+nzhOZbYbs/ZNMl89L09h7FUfZ9goczuPqkIyVwySBaETOC4nz0/KOp8aa7/T11QtHa/1WVT3yjpPtNPy7E7i5dbfIYMBe5vE5aWxyBhbHjqempeXYVLOd8W5IpecMF2aXDq9HSZRr7jsVt7BATFP15QoLdxg56oytXR9FOf0beaT/l58IY+iuUlOzb9ifJ5PpyOHes30yOLUtM28X2ZBqEUY46njZOmiX6WGG3R97I8cxyGfzm2q3clcHiVPn3he4nU1KUi8pOvlZIzzuonXKzLe1rw+Snql1atO5CN/Rap+x/dVLyt+iyNFVZERz6jbrBX+ipNkVvZsx/c97PtGbPjeqhrhMoywR34fI9zTWG200jDgM+O4rmmaoSXZxeaaqZM4sEzTCssthyBYOmUqBk5BJunLjLwWESJZaLHKFwnCRlkVw2C5DKvUNV3XzehvrE1E6255NjQ3Sx4uXv/fCNj+i+54fsLbllcm+FrtPARxj6slr083LluVFL6bc7Xk9TlXqmFcw1wN4YATq5pOxjI99cTdbj1Givt4li96ucB3WI5ipdOpNmqe0wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgN8t/AFkzxOsJTVNaAAAAAElFTkSuQmCC" alt=" mongodb" />
        <img className=' lg:w-52 w-20 rounded-2xl img-shadow ' src="https://t3.ftcdn.net/jpg/00/83/05/00/240_F_83050019_PNgUwzBXAsHSORc52wdROmSWNeGEpIh5.jpg" alt="git" />
      </div>
    </div>
  )
}

export default TechStacks
