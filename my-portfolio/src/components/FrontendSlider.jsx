import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";
import Cards from "./Card";

export default function App() {
     return (
          <>
               <Swiper
                    pagination={{
                         dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className=" mx-4  cursor-pointer"
               >
                    <SwiperSlide className=" p-3 ">
                         <Cards title={"COIN-X"} imglink={"https://t3.ftcdn.net/jpg/05/45/54/44/240_F_545544455_8ECz4VLv8kNc3cqUo5k8cyFrvAKww54K.jpg"} description={"This is a crypto currency dashboard app user can view chart of choosing crypto with timeline like 1d,1week etc. also there you can convert the crypto into real currency and monitor your crypto"} gitlink={"https://github.com/vaibhavsoni630/COIN-X"} prevlink={"https://vaibhavsoni630.github.io/COIN-X/"} />
                    </SwiperSlide>
                    <SwiperSlide className=" p-3 ">
                         <Cards title={"SAAS landing page"} prevlink={"https://65d5a828a53d2866ab78c1bf--capable-bunny-392da6.netlify.app/"} gitlink={"https://github.com/vaibhavsoni630/Saas-landing-page"} imglink={"https://t3.ftcdn.net/jpg/07/24/81/58/240_F_724815802_iSu2abQbfBldz3fNddqmxeIdRdWTL0jc.jpg"} description={"This is a SAAS website landing page that is made using tailwind and vite-react. there are many more technologies it includes like Tabs and sliders from different libraries. and there is a pop-up sign-up and login page with Firebase authentication system"}/>
                    </SwiperSlide>
                    <SwiperSlide className=" p-3 ">
                         <Cards gitlink={"https://github.com/vaibhavsoni630/Text-app"} prevlink={"https://vaibhavsoni630.github.io/Text-app/"} imglink={"https://t3.ftcdn.net/jpg/05/75/22/62/240_F_575226262_3Bdukc9tKGLVrNYKpt20WKterdfE3ARw.jpg"} title={"Text-App"} description={"This is a text app you can easy work with your long text here it made it very easy to uppercase all the letters and words of text paragraph and lightmode and darkmode theme and many more to do like you can get your words and parapgh length , how much time it will take to write it. TRY THIS !!! "} />
                    </SwiperSlide>
                    <SwiperSlide className=" p-3 ">
                         <Cards gitlink={"https://github.com/vaibhavsoni630/responsive-website-with-bootstrap-and-3d-elements"} prevlink={"https://vaibhavsoni630.github.io/responsive-website-with-bootstrap-and-3d-elements/#online-section"} imglink={"https://t4.ftcdn.net/jpg/03/58/78/71/240_F_358787193_L8gqxkblLb1xTC1AGgbF3yXp3Me8jP5u.jpg"} title={"3D website"} description={"This is a SAAS website using only BOOTSTRAp and html-css it is crafted with many exiting 3d elements and much more it is desinged very uniquely to get everyone's attention "} />
                    </SwiperSlide>
                    <SwiperSlide className=" p-3 ">
                         <Cards title={"This portfolio is also a frontend project. "} description={"meanwhile there are many projects also on my github you can check there you can visit many more projects and intresting stuff there. SEE YOU THERE...."} prevlink={"https://github.com/vaibhavsoni630?tab=repositories"} gitlink={"https://github.com/vaibhavsoni630?tab=repositories"} imglink={"https://t3.ftcdn.net/jpg/01/31/77/12/240_F_131771250_7WvPsHaKjXxjVbKuSAT898g8hIkTUO8S.jpg"}  />
                    </SwiperSlide>
               </Swiper>
          </>
     );
}
