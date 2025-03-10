import React from "react";
import { motion } from "framer-motion";
import reactgif from '../assets/react.gif';
import javacoffee from '../assets/java-coffee-cup.gif';
import mysql from '../assets/mysql.png';
import wampserver from '../assets/wampserver.jpg';
import html5 from '../assets/html5.png';
import css3 from '../assets/css3.png';
import ferrari from '../assets/ferrari-32.png';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      whileInView={{ opacity: 1, scale: 1}}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Meus Projetos</h2>
        <ul>
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={reactgif} alt="react gif" />
            <h3>Loja Virtual</h3>
            <h5>Em desenvolvimento...</h5>
            <p>Este é um site de e-commerce criado usando React e CSS puro. O projeto simula uma loja virtual com várias categorias de produtos, exibição de produtos em diferentes páginas e uma experiência de usuário rica, com animações e transições suaves. A aplicação é completamente responsiva e oferece uma experiência visual dinâmica em qualquer dispositivo.</p>
            <a href="https://github.com/Lucasdgcks/Loja-Virtual" target="_blank">
              Ver no GitHub
            </a>
          </motion.li>
          <motion.li
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
          >
          <img src={javacoffee} alt="java gif" />
              <h3>Projeto Restaurante</h3>
      
              <p>Um sistema simples feito em Java de gestão de pedidos que simula o funcionamento de um restaurante. O sistema permite que o restaurante abra e feche, receba pedidos automaticamente com números gerados de forma incremental, processe pedidos, e gere relatórios de vendas e faturamento.</p>
              <a href="https://github.com/Lucasdgcks/Projeto-Restaurante" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
          </motion.li>
          <motion.li
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
          >
          <img src={mysql} alt="mysql png" />
          <img id="card-img" src={wampserver} alt="wampserver jpg" />
              <h3>Banco de dados</h3>
      
              <p>O projeto desenvolvido utiliza exclusivamente o banco de dados MySQL, sendo executado no ambiente WampServer64. O objetivo é demonstrar a criação e gerenciamento de um banco de dados para armazenar e manipular informações de maneira eficiente.</p>
              <a href="https://github.com/Lucasdgcks/Banco-de-Dados" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
          </motion.li>
          <motion.li
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
          >
            <img src={html5} alt="html5 png" />
            <img id="card-img" src={css3} alt="css3 png" />
              <h3>Login Ferrari</h3>
      
              <p>O projeto foi desenvolvido seguindo a abordagem mobile-first e utiliza apenas HTML e CSS puro, sem o uso de frameworks. Seu principal objetivo é o aprimoramento das habilidades em CSS. O site está hospedado no GitHub Pages.</p>
              <a href="https://github.com/Lucasdgcks/ProjetoTeladeLoginFerrari" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a><br />
              <a href="https://lucasdgcks.github.io/ProjetoTeladeLoginFerrari/" target="_blank" rel="noopener noreferrer">
              Executar tela de login
              <img id="ferrari-png" src={ferrari} alt="ferrari png" />
              </a>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Projects;