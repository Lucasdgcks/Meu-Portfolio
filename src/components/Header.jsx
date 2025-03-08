import React from "react";
import { motion } from "framer-motion";
import { header } from "framer-motion/client";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Meu Portfólio 💻</h1>
        <p id="subtitulo">Estudante Desenvolvedor Front-End | React Developer</p>
        <img className="icon-header" src="src/assets/java-48.png" alt="java-icon" /><img className="icon-header" src="/src/assets/react-50.png" alt="react-icon" /><img className="icon-header" src="/src/assets/javascript.svg" alt="" />
      </div>
     
    </header>
      
    
  );
};

export default Header;