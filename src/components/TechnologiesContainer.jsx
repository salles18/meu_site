import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
  DiLaravel,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { 
    id: "html", 
    name: "HTML5", 
    icon: <DiHtml5 />, 
    description: "HTML é a linguagem padrão para criar páginas web, estruturando o conteúdo com elementos e tags."
  },
  { 
    id: "css", 
    name: "CSS3", 
    icon: <DiCss3 />, 
    description: "CSS é usado para estilizar e formatar páginas web, tornando-as visualmente atraentes e responsivas."
  },
  { 
    id: "js", 
    name: "JavaScript", 
    icon: <DiJsBadge />, 
    description: "JavaScript adiciona interatividade e funcionalidades dinâmicas às páginas web, sendo essencial para o desenvolvimento web."
  },
  { 
    id: "node", 
    name: "Node.js", 
    icon: <DiNodejsSmall />, 
    description: "Node.js permite o desenvolvimento de aplicações de rede escaláveis e eficientes, usando JavaScript no lado do servidor."
  },
  { 
    id: "mysql", 
    name: "MySQL", 
    icon: <DiMysql />, 
    description: "MySQL é um sistema de gerenciamento de banco de dados relacional usado para armazenar e gerenciar dados em aplicações web."
  },
  { 
    id: "react", 
    name: "React", 
    icon: <DiReact />, 
    description: "React é uma biblioteca JavaScript para construir interfaces de usuário interativas e reutilizáveis."
  },
  { 
    id: "php", 
    name: "Php", 
    icon: <DiPhp />, 
    description: "PHP é uma linguagem de script de servidor usada para criar páginas web dinâmicas e interativas."
  },
  { 
    id: "laravel", 
    name: "Laravel", 
    icon: <DiLaravel />, 
    description: "Laravel é um framework PHP que facilita o desenvolvimento de aplicações web robustas e escaláveis."
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
