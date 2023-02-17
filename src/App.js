import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Metier from "./pages/single_job";
import Experience from "./pages/experience";
import Projets from "./pages/projets";
import About from "./pages/about";
import Header from "./components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/mon-cv-dynamique" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/experiences/:id" element={<Metier />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
