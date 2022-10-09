import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";
function App() {
  return (
    <div className="min-h-screen border-2 border-rose-400">
      <Navigation />
      <Main></Main>
      <Footer />
    </div>
  );
}

export default App;
