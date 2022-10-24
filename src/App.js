import { Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
import Projects from "./Components/ProjectsPage/Projects";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import Home from "./Components/HomePage/Home";
import PerfumeComponent from "./Components/Projects/PerfumeComponent";
import SplitScreenFlexbox from "./Components/Projects/SplitScreenFlexbox";

function App() {
  return (
    <div className=" mx-auto bg-[#0D111C] bgflex flex-col main-app ">
      <Navigation />

      <Home />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
