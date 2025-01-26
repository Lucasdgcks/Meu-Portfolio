// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Meus Projetos</h2>
        <ul>
          <li>
            <img src="/src/assets/react-50.png" alt="" />
            <h3>Loja Virtual</h3>
            <h5>Em desenvolvimento...</h5>
            <p>Este é um site de e-commerce criado usando React e CSS puro. O projeto simula uma loja virtual com várias categorias de produtos, exibição de produtos em diferentes páginas e uma experiência de usuário rica, com animações e transições suaves. A aplicação é completamente responsiva e oferece uma experiência visual dinâmica em qualquer dispositivo.</p>
            <a href="https://github.com/Lucasdgcks/Loja-Virtual" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </li>
          <li>
            <img src="src/assets/java-48.png" alt="" />
            <h3>Projeto Restaurante</h3>
            
            <p>Um sistema simples feito em Java de gestão de pedidos que simula o funcionamento de um restaurante. O sistema permite que o restaurante abra e feche, receba pedidos automaticamente com números gerados de forma incremental, processe pedidos, e gere relatórios de vendas e faturamento.</p>
            <a href="https://github.com/Lucasdgcks/Projeto-Restaurante" target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
