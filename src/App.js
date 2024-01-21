import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/homeSection/home";
import About from "./components/aboutSection/about";
import Skills from "./components/skillsSection/skills ";
import Projects from "./components/projects/projects";
import Contact from "./components/contactSection/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
