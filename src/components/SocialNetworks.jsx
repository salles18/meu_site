import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworkscontainer.sass";

const socialNetworks = [
  { 
    name: "linkedin", 
    icon: <FaLinkedinIn />, 
    url: "https://www.linkedin.com/in/jo%C3%A3o-salles-a160b0218/"
  },
  { 
    name: "github", 
    icon: <FaGithub />, 
    url: "https://github.com/salles18" 
  },
  { 
    name: "instagram", 
    icon: <FaInstagram />, 
    url: "https://www.instagram.com/joaosa11es/" 
  },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
