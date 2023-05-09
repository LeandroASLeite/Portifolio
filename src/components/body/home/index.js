import './styles.css';
import { FaLaptopCode, FaMicrochip, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from './logo0.png'
function Home() {
    return (
        <div className="container" id='home'>
            <div className="home">
                <div className="name">
                    <label>Olá, eu sou<br /></label>
                    <label>Leandro Leite</label>

                </div>
                <div className="info">
                    <label className='align'><FaMicrochip />Técnico em Eletrônica</label>
                    <label className='align'><FaLaptopCode />Desenvolvedor</label>
                </div>
                <div className="button">
                    
                    <button className='align' id="github" onClick={()=>{window.location.href ="https://github.com/LeandroASLeite"}}><FaGithub />Github</button>
                    <button className='align' id="linkedin"onClick={()=>{window.location.href ="https://www.linkedin.com/in/leandro-leite-760931186/"}}><FaLinkedin />LinkedIn</button>
                    
                </div>

            </div>
            <div className="image">
                <img src={Logo} className="logo" />
            </div>
            
        </div>
    )
}
export default Home