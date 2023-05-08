import './styles.css';
import { useState } from 'react';
import { FaFileAlt,FaRegEnvelope } from "react-icons/fa";
import me from './Me.png'
import myPdf from './LeandroLeite.pdf';

function About() {
    function handleDownload() {
        const blob = new Blob([myPdf], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'LeandroLeite.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
      
      
    return (
        <div className="container">
            <div className="about">
            <div className="image">
                <img src={me} alt='me'/>
            </div>
            <div className="sobre">
                <label className="title">SOBRE MIM<br/></label>
                <label className="title">Santa Rita do Sapucaí- MG<br/></label>
                <label className="text">Olá, sou Técnico em Eletrônica e atualmente estou cursando Sistemas de Informação. Com muito foco e dedicação estou me preparando para atuar na área de Técnologia da Informação (TI), e futuramente estarei capacitado para atuar como Analista de Sistemas, Desenvolvedor de Software, Administrador de TI ou Gerente de Projetos.<br/></label>
                <div className="button">
                <button className="align" id='Email'><FaRegEnvelope/>Contato</button>
                {/* todo fazer o Modal do botão contatos */}
                <button className="align" id='Curriculo' onClick={handleDownload}><FaFileAlt/>Currículo</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default About