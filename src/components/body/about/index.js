import { FaRegTimesCircle, FaInstagram, FaFacebookSquare, FaAddressCard } from "react-icons/fa";
import './styles.css';
import { useState } from 'react';
import { FaFileAlt, FaRegEnvelope } from "react-icons/fa";
import me from './Me.png'
import myPdf from './LeandroLeite.pdf';

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
    function Modal({ isOpen, onClose }) {
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        function handleSubmit(event) {
            event.preventDefault();
            // Enviar formulário
            onClose();
        }

        if (!isOpen) {
            return null;
        }

        return (
            <div className="modal">
                <div className="modal-content">
                    <button className="close" onClick={onClose}>
                        <FaRegTimesCircle />
                    </button>
                    <ul className="contact">
                        <li className="listItem" onClick={()=>{window.location.href ="https://www.instagram.com/leandro.leite.330/"}} ><FaInstagram /> @leandro.leite.330/</li>
                        <li className="listItem" onClick={()=>{window.location.href ="https://www.facebook.com/leandro.leite.330"}}><FaFacebookSquare /> @leandro.leite.330</li>
                        <li className="mail"><FaAddressCard /> leandroleite.ll25@proton.me</li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="container" id='about'>
            <div className="about">
                <div className="image">
                    <img src={me} alt='me' />
                </div>
                <div className="sobre">
                    <label className="title">SOBRE MIM<br /></label>
                    <label className="title">Santa Rita do Sapucaí- MG<br /></label>
                    <label className="text">Olá, sou Técnico em Eletrônica e atualmente estou cursando Sistemas de Informação. Com muito foco e dedicação estou me preparando para atuar na área de Técnologia da Informação (TI), e futuramente estarei capacitado para atuar como Analista de Sistemas, Desenvolvedor de Software, Administrador de TI ou Gerente de Projetos.<br /></label>
                    <div className="button">
                        <button className="align" id='Email' onClick={handleOpenModal}><FaRegEnvelope />Contato</button>
                        {/* todo fazer o Modal do botão contatos */}
                        <div>

                            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                        </div>
                        <button className="align" id='Curriculo' onClick={handleDownload}><FaFileAlt />Currículo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About