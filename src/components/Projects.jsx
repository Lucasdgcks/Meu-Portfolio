import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      whileInView={{ opacity: 1, scale: 1 }}
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
            <img src="/src/assets/react.gif" alt="" />
            <h3>Loja Virtual</h3>
            <h5>Em desenvolvimento...</h5>
            <p>Este é um site de e-commerce criado usando React e CSS puro. O projeto simula uma loja virtual com várias categorias de produtos, exibição de produtos em diferentes páginas e uma experiência de usuário rica, com animações e transições suaves. A aplicação é completamente responsiva e oferece uma experiência visual dinâmica em qualquer dispositivo.</p>
            <a href="https://github.com/Lucasdgcks/Loja-Virtual" target="_blank">
              Ver no GitHub
            </a>
          </motion.li>
          <motion.li
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
          >
          <img src="src/assets/java-coffee-cup.gif" alt="" />
              <h3>Projeto Restaurante</h3>
      
              <p>Um sistema simples feito em Java de gestão de pedidos que simula o funcionamento de um restaurante. O sistema permite que o restaurante abra e feche, receba pedidos automaticamente com números gerados de forma incremental, processe pedidos, e gere relatórios de vendas e faturamento.</p>
              <a href="https://github.com/Lucasdgcks/Projeto-Restaurante" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Projects;