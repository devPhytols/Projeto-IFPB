import "./barratopo.css";
import FotoLogo from "../../imagens/avatar.png";

export default function BarraTopo(){
    return (
        <>
        <div className="topo">

            <div className="topoEsquerda"></div>


                <div className="topoCentro">
                    <ul className="topoLista">
                        <li className="topoListaItem">ÍNICIO</li>
                        <li className="topoListaItem">SOBRE</li>
                        <li className="topoListaItem">CONTATO</li>
                        <li className="topoListaItem">ESCREVA</li>
                        <li className="topoListaItem">SAIR</li>
                    </ul>
                </div>

            <div className="topoDireita">
                <img className="topoImg" src = {FotoLogo}/>
            </div>
        </div>
        </>
    )
}