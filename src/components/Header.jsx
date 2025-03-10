import React from "react";
import { motion } from "framer-motion";
import { header } from "framer-motion/client";
import react50 from '../assets/react-50.png';
import java48 from '../assets/java-48.png';
import javascript from '../assets/javascript.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Meu Portfólio 💻</h1>
        <p id="subtitulo">Estudante Desenvolvedor Front-End | React Developer</p>
        <img className="icon-header" src={java48} alt="java-icon" /><img className="icon-header" src={react50} alt="react-icon" /><img className="icon-header" src={javascript} alt="javascript img" />
      </div>
     
    </header>
      
    
  );
};

export default Header;