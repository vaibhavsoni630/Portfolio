import React from "react";

function Cards({title,description,gitlink,prevlink,imglink}) {
     return (
          <div className=" rounded-2xl button-bg ">
               <div className=" cursor-pointer flex flex-col gap-2 w-72 justify-center items-center ">
                    <img
                         className=" shadow-md shadow-slate-600 w-60 rounded-xl m-3 mb-8"
                         src={imglink}
                    />
                    <span className="text-white text-2xl"> {title}</span>
                    <span className=" w-60 text-sm mb-5 text-gray-600">
                         {" "}
                        {description}
                    </span>
                    <div className="mb-5 gap-20 flex flex-row ">
                         <a href={gitlink} aria-label="Homepage" class="footer-octicon" title="GitHub Code">
                              <svg
                                   className=" text-white"
                                   class="octicon octicon-mark-github"
                                   height="24"
                                   version="1.1"
                                   viewBox="0 0 16 16"
                                   width="24"
                              >
                                   <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                              </svg>
                         </a>
                         <a href={prevlink} aria-label="Homepage" class="footer-octicon" title="Live preview (please wait!! loading may take time) ">
                         <svg
                                   class="w-6 h-6 text-black "
                                   
                                   xmlns="http://www.w3.org/2000/svg"
                                   fill="none"
                                   viewBox="0 0 24 24"
                              >
                                   <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2M12 4v12m0-12 4 4m-4-4L8 8"
                                   />
                              </svg>
                         </a>
                         
                    </div>
               </div>
          </div>
     );
}

export default Cards;
