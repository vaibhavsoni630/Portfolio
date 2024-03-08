import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects"
import Contact from "../components/Contact";
import Certification from "../components/Certification";
import Home from "../components/Home";

  const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about-me",
                element: <Aboutme/>
            },
            {
                path: "/project",
                element: < Projects/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/certificate",
                element: <Certification/>
            },
        ]
    }
    
    
  ])

  export default router