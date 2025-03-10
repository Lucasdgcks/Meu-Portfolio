import React from "react";
import { motion } from "framer-motion";
import perfil from '../assets/image.png';
import iconinsta from '../assets/icons8-instagram.svg';
import icongithub from '../assets/icons8-github.svg';

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="container" id="about-background">
        <div id="about-content">
          <h2 id="h2-about">Sobre Mim </h2>
          <p>
          Sou estudante de Tecnologia da Informação na UFRN e tenho paixão por desenvolvimento front-end e experiência prática em React, CSS e JavaScript. Ao longo da minha trajetória acadêmica, trabalhei em projetos desafiadores, onde pude aplicar meus conhecimentos em desenvolvimento de interfaces interativas e responsivas.
          </p>
          <p>
          Além disso, também tive a oportunidade de trabalhar com Java em projetos mais focados em back-end, o que me proporcionou uma visão completa do ciclo de desenvolvimento de software. Meu objetivo é criar soluções inovadoras e eficientes que melhorem a experiência do usuário, sempre buscando me aprimorar e me adaptar às novas tendências e tecnologias do mercado.
          </p>
        </div>
        <div className="perfil">
          <div className="perfil-card">
            <img src={perfil} alt="Perfil" className="perfil-image"/>
            <div id="info-perfil">
              <h3>Lucas Dantas</h3>
              <p>24 anos</p>
              <p><a target="_blank"  className="icon-perfil" href="https://github.com/Lucasdgcks?tab=repositories"><img src={icongithub} alt="icon github" /></a>
              <a href="https://www.instagram.com/lucasd_g/"><img id="icon-insta" src={iconinsta} alt="insta img" /></a>
              </p>
            </div>
           
          </div>
        </div>
      </div>
      
    </motion.section>
  );
};

export default About;