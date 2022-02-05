import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <main  className=" App text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
