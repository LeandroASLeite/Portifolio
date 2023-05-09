import html from './files/HTML.png';
import css from './files/CSS.png';
import js from './files/JS.png';
import react from './files/react.png';
import python from './files/PYTHON.png';
import mongodb from './files/mongodb.png';
import java from './files/java.png';
import './styles.css'


function Skills() {
    return (
        <div className="Container " id='skills'>
            <h2>Habilidades</h2>
            <div className='content'>
                <div className='skills'>
                    <div className='front'>
                        <div className='html'>
                            <img src={html} alt="HTML " />
                            <label>HTML</label>
                        </div>
                        <div className='css'>
                            <img src={css} alt="css " />
                            <label>CSS</label>
                        </div>
                        <div className='js'>
                            <img src={js} alt="js " />
                            <label>JavaScript</label>
                        </div>
                        <div className='react'>
                            <img src={react} alt="react " />
                            <label>React</label>
                        </div>
                    </div>
                    <div className='back'>
                        <div className='python'>
                            <img src={python} alt="python " />
                            <label>Python</label>
                        </div>
                        <div className='mongodb'>
                            <img src={mongodb} alt="mongodb " />
                            <label>MongoDB</label>
                        </div>
                        <div className='java'>
                            <img src={java} alt="java " />
                            <label>Java</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills