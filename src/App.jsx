import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
