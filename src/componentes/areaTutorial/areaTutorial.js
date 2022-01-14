import "./areaTutorial.css";
import FotoModelo from "../../imagens/personalidade.png";

export default function areaTutorial(){
    return(
        <>

        <div className="barraLadotuto">

            <div className="barraLadoItemtuto">

            <span className="barraLadoTitulotuto">Tutoriais</span>

            <img className="Imgpurpletuto" src={FotoModelo} alt=""/>

            <p>
            {`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.\n
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.`}
            </p>

            <div className="barraLadoItemtuto">

                <span className="barraLadoTitulotuto">CATEGORIAS</span>

            </div>

            <ul className="barraLadoListatuto">
            
            <li className="barraLadoListaItemtuto">Vida</li>
            <li className="barraLadoListaItemtuto">Música</li>
            <li className="barraLadoListaItemtuto">Esporte</li>
            <li className="barraLadoListaItemtuto">Tecnologia</li>

            </ul>

            </div>


        </div>

        </>
    )
}