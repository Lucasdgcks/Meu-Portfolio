import React from "react";
import { motion } from "framer-motion";

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
          
          {/* Habilidades Técnicas */}
          <div className="skills">
            <h3>🚀 Habilidades Técnicas</h3>
            <ul>
              <li><strong>Linguagens e Frameworks:</strong> Java (POO), React, HTML5, CSS3, MySQL</li>
              <li><h4><strong>Ferramentas:</strong></h4> Git, GitHub, Excel</li>
              <li><h4><strong>Outros:</strong></h4> Informática, Redes de Computadores, Lógica de Programação, Design Responsivo</li>
              <li>
                <img src="src/assets/git.png" alt="git image" />
                <img src="src/assets/github.gif" alt="github gif" />
                <img src="src/assets/programação.gif" alt="computador gif" />
                <img src="src/assets/webdesign.gif" alt="webdesign gif" />
                <img src="src/assets/manutenção.png" alt="" />
              </li>
            </ul>
          </div>

          {/* Certificações */}
          <div className="certifications">
            <h3>📜 Certificações & Cursos</h3>
            <ul>
              <li>
                <img src="src/assets/java-coffee-cup.gif" alt="Java" className="tech-image" />
                <strong>Java POO</strong> – Curso em Vídeo (40 horas)
              </li>
              <li>
                <img src="src/assets/excel.svg" alt="Excel" className="tech-image" />
                <strong>Excel</strong> – Curso em Vídeo (40 horas)
              </li>
              <li>
                <img src="src/assets/code.gif" alt="HTML/CSS" className="tech-image" />
                <strong>HTML5 e CSS3</strong> – Curso em Vídeo (160 horas)
              </li>
              <li>
                <img src="src/assets/dados.gif" alt="MySQL" className="tech-image" />
                <strong>MySQL</strong> – Curso em Vídeo (40 horas)
              </li>
            </ul>
          </div>

          {/* Experiência e Projetos */}
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

          {/* Competências e Qualidades */}
          <div className="competencies">
            <h3>🌟 Competências & Qualidades</h3>
            <ul>
              <li><img src="src/assets/aperto-de-mão.gif" alt="Trabalho em equipe" className="tech-image" />Trabalho em equipe</li>
              <li><img src="src/assets/proatividade.png" alt="Proatividade" className="tech-image" />Proatividade</li>
              <li><img src="src/assets/colaboração.gif" alt="Colaboração" className="tech-image" />Colaboração</li>
              <li><img src="src/assets/flexibility.png" alt="Flexibilidade" className="tech-image" />Flexibilidade</li>
            </ul>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Curriculum;
