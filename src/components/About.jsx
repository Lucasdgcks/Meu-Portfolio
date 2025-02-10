import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container" id="about-background">
        <h2 id="h2-about">Sobre Mim </h2>
        <p>
        Sou estudante de Tecnologia da Informação na UFRN e tenho paixão por desenvolvimento front-end e experiência prática em React, CSS e JavaScript. Ao longo da minha trajetória acadêmica, trabalhei em projetos desafiadores, onde pude aplicar meus conhecimentos em desenvolvimento de interfaces interativas e responsivas.
        </p>
        <p>
        Além disso, também tive a oportunidade de trabalhar com Java em projetos mais focados em back-end, o que me proporcionou uma visão completa do ciclo de desenvolvimento de software. Meu objetivo é criar soluções inovadoras e eficientes que melhorem a experiência do usuário, sempre buscando me aprimorar e me adaptar às novas tendências e tecnologias do mercado.
        </p>
      </div>
    </motion.section>
  );
};

export default About;