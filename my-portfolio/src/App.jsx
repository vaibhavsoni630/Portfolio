import { Outlet } from "react-router";
import "./App.css";



function App() {
     return (
          <>
               <div className="   container  mx-auto ">
                    <Outlet/>
               </div>
          </>
     );
}

export default App;
