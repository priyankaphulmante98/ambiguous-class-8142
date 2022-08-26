import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const AllRoutes = () => {
  return (
    <div>
    
     
      <Routes>
        <Route path ="/" element ={ <Home />}/>
        <Route path="/Calender" element={<CreateCalendar />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
