import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Newuser from "./components/Newuser";
import Edit from "./components/Edit";
import React from "react";
function App() {
    
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Newuser" element={<Newuser/>}></Route>
        <Route path="/Edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
