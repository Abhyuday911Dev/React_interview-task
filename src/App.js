import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
// import Card from "./Components/Card";
import Profile from "./Components/Profile";

function App() {


  return (
    <>
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
