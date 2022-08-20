import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NewsAndEvent from "./pages/NewsAndEvent";
import CollegeTrends from "./pages/CollegeTrends";
import Sports from "./pages/Sports";
import ArtsAndPainting from "./pages/ArtsAndPainting";
import Photography from "./pages/Photography";
import ScienceAndTech from "./pages/ScienceAndTech";
import Poems from "./pages/Poems";
import Articles from "./pages/Articles";
import Nanotales from "./pages/Nanotales";
import Stories from "./pages/Stories";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";



function App() {
  return (
    <>
      <Header />
    
      <Router>
        <SideBar>
          <Routes>
            <Route path="college-magazine/" element={<Home />} />
            <Route path="college-magazine/NewsAndEvent" element={<NewsAndEvent />} />
            <Route path="college-magazine/Trends" element={<CollegeTrends />} />
            <Route path="college-magazine/Sports" element={<Sports />} />
            <Route path="college-magazine/clubs/ArtsAndPaintings" element={<ArtsAndPainting />} />
            <Route path="college-magazine/clubs/Photography" element={<Photography />} />
            <Route path="college-magazine/clubs/ScienceAndTech" element={<ScienceAndTech />} />
            <Route path="college-magazine/Writings/Poems" element={<Poems />} />
            <Route path="college-magazine/Writings/Articles" element={<Articles />} />
            <Route path="college-magazine/Writings/Nanotales" element={<Nanotales />} />
            <Route path="college-magazine/Writings/Stories" element={<Stories />} />
            <Route path="college-magazine/AboutUs" element={<AboutUs />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default App;
