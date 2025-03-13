import React from "react";
import { motion } from "framer-motion";
import gitpng from '../assets/git.png';
import githubgif from '../assets/github.gif';
import programaçãogif from '../assets/programação.gif';
import webdesigngif from '../assets/webdesign.gif';
import manutenção from '../assets/manutenção.png';
import javacoffee from '../assets/java-coffee-cup.gif';
import excel from '../assets/excel.svg';
import codegif from '../assets/code.gif';
import dadosgif from '../assets/dados.gif';
import apertodemao from '../assets/aperto-de-mão.gif';
import proatividade from '../assets/proatividade.png';
import colaboração from '../assets/colaboração.gif';
import flexibilidade from '../assets/flexibility.png';

const Curriculum = () => {
  return (
    <motion.section
      id="curriculum"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>Meu Currículo</h2>
        <div className="curriculum-content">
          
          <div className="skills">
            <h3>🚀 Habilidades Técnicas</h3>
            <ul>
              <li><h4><strong>Linguagens e Frameworks:</strong></h4> Java (POO), React, HTML5, CSS3, MySQL</li>
              <li><h4><strong>Ferramentas:</strong></h4> Git, GitHub, Excel</li>
              <li><h4><strong>Outros:</strong></h4> Informática, Redes de Computadores, Lógica de Programação, Design Responsivo</li>
              <li>
                <img src={gitpng} alt="git image" />
                <img src={githubgif} alt="github gif" />
                <img src={programaçãogif} alt="computador gif" />
                <img src={webdesigngif} alt="webdesign gif" />
                <img src={manutenção} alt="manutenção png" />
              </li>
            </ul>
          </div>

          <div className="certifications">
            <h3>📜 Certificações & Cursos</h3>
            <ul>
              <li>
                <img src={javacoffee} alt="Java" className="tech-image" />
                <strong>Java POO</strong> Curso em Vídeo (40 horas)
              </li>
              <li>
                <img src={excel} alt="Excel" className="tech-image" />
                <strong>Excel</strong> Curso em Vídeo (40 horas)
              </li>
              <li>
                <img src={codegif} alt="HTML/CSS" className="tech-image" />
                <strong>HTML5 e CSS3</strong>  Curso em Vídeo (160 horas)
              </li>
              <li>
                <img src={dadosgif} alt="MySQL" className="tech-image" />
                <strong>MySQL</strong>  Curso em Vídeo (40 horas)
              </li>
            </ul>
          </div>

          <div className="experience">
            <h3>💻 Experiência & Projetos</h3>
            <ul>
              <li>
                <h4><strong>📌 Projeto Front-End com React</strong></h4>
                <p>Desenvolvi uma aplicação front-end utilizando React, implementando design responsivo e interatividade. Aprimorei habilidades em organização de código e uso de componentes reutilizáveis.</p>
              </li>
              <li>
                <h4><strong>📌 Outros Projetos</strong></h4>
                <p>Projetos utilizando apenas HTML5 e CSS3, disponíveis no meu GitHub.</p>
              </li>
            </ul>
          </div>

          <div className="competencies">
            <h3>🌟 Competências & Qualidades</h3>
            <ul>
              <li><img src={apertodemao} alt="Trabalho em equipe" className="tech-image" />Trabalho em equipe</li>
              <li><img src={proatividade} alt="Proatividade" className="tech-image" />Proatividade</li>
              <li><img src={colaboração} alt="Colaboração" className="tech-image" />Colaboração</li>
              <li><img src={flexibilidade} alt="Flexibilidade" className="tech-image" />Flexibilidade</li>
            </ul>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Curriculum;
