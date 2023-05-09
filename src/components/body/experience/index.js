import './styles.css';
import ete from './files/logo-ete-fmc-1 1.png'
import fai from './files/FAI-LOGO-2019 1.png'
import sisvoo from './files/sisvoo.png'
import furukawa from './files/furukawa.png'


function Experience() {
    return (
        <div className='Container' id='experience'>
            <h2>Experiência</h2>
            <div className='experience'>
                
                <div className='experiencia'>
                    <div className='furukawa'>
                        <img src={furukawa} className='img' alt="furukawa" />

                        <label>Furukawa Electric LatAm<br />
                            Técnico em eletrônica
                            abr de 2022 - o momento
                            Santa Rita do Sapucaí, Minas Gerais, Brazil
                        </label>
                    </div>
                    <div className='sisvoo'>
                        <img src={sisvoo} className='img'alt='sisvoo' />
                        <label>Mbm eletrônica <br/>
                            Técnico em eletrônica
                            mai de 2021 - nov de 2021 ·
                            Santa Rita do Sapucaí, Minas Gerais, Brasil</label>
                    </div>
                </div>
                <div className='formacao'>
                    <div className='ete'>
                        <img src={ete} className='img'alt="ete" />
                        <label>ETE “FMC” <br/> Técnico em Eletrônica</label>
                    </div>
                    <div className='fai'>
                        <img src={fai} className='img'alt="fai" />
                        <label>FAI <br/> SISTEMAS DE INFORMAÇÃO - Cursando</label>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Experience