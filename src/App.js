import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Newuser from "./components/Newuser";
import Edit from "./components/Edit";
function App() {
    
  return (
    <div> 
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Newuser" exact element={<Newuser/>}></Route>
        <Route path="/Edit/:id" exact element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
