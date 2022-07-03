import React from 'react';
import About from './About';
import NavBar from './NavBar';
import Resume from './resume/Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <main className="min-w-[75%] bg-gray-dark border-primary rounded-3xl lg:relative overflow-hidden z-10">
        <NavBar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
    </Router>
  )
}

export default Main