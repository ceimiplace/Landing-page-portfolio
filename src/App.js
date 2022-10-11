import { Routes, Route } from "react-router-dom";
import Perfume from "./Components/Projects/Perfume";
// import Home from "./Components/Home";
import Projects from "./Components/ProjectsPage/Projects";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
import Home from "./Components/HomePage/Home";
import UnsplashAPI from "./Components/Projects/UnsplashAPI";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  function unsplashAPI(data) {
    navigate(data);
  }
  return (
    <div className="min-h-screen mx-auto max-w-screen-2xl flex flex-col  px-4">
      <Navigation />
      <button onClick={() => navigate("projects/UnsplashAPI/2")}>
        CLICK ME
      </button>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route path="projects/perfume" element={<Perfume />} />
          <Route
            path="projects/UnsplashAPI"
            element={<UnsplashAPI changenavi={unsplashAPI} />}
          />
          <Route
            path="projects/UnsplashAPI/:id"
            element={<UnsplashAPI changenavi={unsplashAPI} />}
          />
        </Routes>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
