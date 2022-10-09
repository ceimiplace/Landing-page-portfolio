import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="min-h-screen mx-auto max-w-screen-2xl flex flex-col  px-4">
      <Navigation />

      <Main>
        <Routes>
          <Route path="/" element="Home" />
        </Routes>
      </Main>

      <Footer />
    </div>
  );
}

export default App;
