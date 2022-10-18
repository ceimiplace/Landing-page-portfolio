import { Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
import Projects from "./Components/ProjectsPage/Projects";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import Home from "./Components/HomePage/Home";
import PerfumeComponent from "./Components/Projects/PerfumeComponent";
import SplitScreenFlexbox from "./Components/Projects/SplitScreenFlexbox";
import ElearnLanding from "./Components/Projects/ElearnLanding";

function App() {
  return (
    <div className="min-h-screen mx-auto max-w-screen-2xl flex flex-col  px-4">
      <Navigation />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route
            path="projects/perfume-component"
            element={<PerfumeComponent />}
          />
          <Route
            path="projects/SplitscreenFlexbox"
            element={<SplitScreenFlexbox />}
          />
          <Route path="projects/elearn-Landing" element={<ElearnLanding />} />
        </Routes>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
