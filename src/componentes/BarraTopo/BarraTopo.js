import "./barratopo.css";
import FotoLogo from "../../imagens/avatar.png";
import { Link } from "react-router-dom";

export default function BarraTopo(){
    return (
        <>
        <div className="topo">

            <div className="topoEsquerda"></div>


                <div className="topoCentro">
                    <ul className="topoLista">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="topoListaItem">INÍCIO</li>
                        </Link>
                        <Link to="/sobre" style={{ textDecoration: 'none' }}>
                        <li className="topoListaItem">SOBRE</li>
                        </Link>
                        <li className="topoListaItem">CONTATO</li>
                        <li className="topoListaItem">ESCREVA</li>
                        <li className="topoListaItem">SAIR</li>
                    </ul>
                </div>

            <div className="topoDireita">
                <img className="topoImg" src={FotoLogo} alt=""/>
            </div>
        </div>
        </>
    )
}