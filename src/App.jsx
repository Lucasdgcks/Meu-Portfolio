import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Curriculum from "./components/Curriculum";
import Divisor from './components/Divisor';
import Contact from './components/Contact';
import './styles/style.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Curriculum />
      <Projects />
      <Divisor/>
      <Contact />
    </div>
  );
};

export default App;