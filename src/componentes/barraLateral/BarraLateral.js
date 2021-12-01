import "./barralateral.css";
import FotoModelo from "../../imagens/personalidade.png";

export default function BarraLateral(){
    return(
        <>

        <div className="barraLado">

            <div className="barraLadoItem">

            <span className="barraLadoTitulo">SOBRE MIM</span>

            <img className="Imgpurple" src={FotoModelo} alt=""/>

            <p>
            {`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.\n
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.`}
            </p>

            <div className="barraLadoItem">

                <span className="barraLadoTitulo">CATEGORIAS</span>

            </div>

            <ul className="barraLadoLista">
            
            <li className="barraLadoListaItem">Vida</li>
            <li className="barraLadoListaItem">Música</li>
            <li className="barraLadoListaItem">Esporte</li>
            <li className="barraLadoListaItem">Tecnologia</li>

            </ul>

            </div>


        </div>

        </>
    )
}