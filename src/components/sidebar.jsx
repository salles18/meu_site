
import Avatar from '../img/eu.jpeg';

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';


const sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="João Salles" />
    <p className="title">Desenvolvedor Full-Stack</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="https://drive.google.com/file/d/1DXSjCqEueYLNWzqI2d8Hqct38w9fCyuG/view?usp=drive_link" className="btn" download="CURRÍCULO JOAO SALLES4.pdf">
        Baixar Currículo
    </a>
  </aside>;
    
  
};

export default sidebar;