import { Link, animateScroll } from 'react-scroll';
import './styles.css'
function Navbar() {
    return (
        <div className="navbar">
            <div className="myname">
                <label><Link to="home" smooth={true} duration={500}>LL</Link></label>
            </div>
            <div className="itens">
                <ul className="list">
                    <li><Link to="about" smooth={true} duration={500}>Sobre</Link></li>
                    <li><Link to="experience" smooth={true} duration={500}>Experiência</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>Competências</Link></li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar