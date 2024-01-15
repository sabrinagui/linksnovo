import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { GiOppositeHearts } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa6";

import './buttons.css';

const Buttons = () => {
  return (
    <div className="container-botoes">
      <button className="botao">
        <a href="https://github.com/sabrinagui" target="_blank" rel="noopener noreferrer">
          <FiGithub className="icon" /> <span>github</span>
        </a>
      </button>
      <button className="botao">
        <a href="https://www.behance.net/sabrinagui" target="_blank" rel="noopener noreferrer">
          <FaBehance className="icon" /> <span>Behance</span>
        </a>
      </button>
      <button className="botao">
        <a href="https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="icon" /> <span>linkedin</span>
        </a>
      </button>
      <button className="botao">
        <a href="https://sabrinamesquita.com.br" target="_blank" rel="noopener noreferrer">
          <GiOppositeHearts className="icon" /> <span>Portfolio</span>
        </a>
      </button>
      <button className="botao">
        <a href="https://wa.me/5598991829904?text=Oi,%20quero%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> <span>Faça seu orçamento</span>
        </a>
      </button>
    </div>
  );
}

export default Buttons;
