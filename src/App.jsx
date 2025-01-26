import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/style.css';

const App = () => {
  return (
    <div>
      <Header />
      <ThemeSwitcher />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
