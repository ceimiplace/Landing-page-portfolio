import { Routes, Route } from "react-router-dom";

// import Home from "./Components/Home";
import Projects from "./Components/ProjectsPage/Projects";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div className="min-h-screen mx-auto max-w-screen-2xl flex flex-col  px-4">
      <Navigation />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
        </Routes>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
