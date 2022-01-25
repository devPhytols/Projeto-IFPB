import "./barralateral.css";
import FotoModelo from "../../imagens/sobrenos.png";

export default function BarraLateral(){
    return(
        <>

        <div className="barraLado">

            <div className="barraLadoItem">

            <img className="Imgpurple" src={FotoModelo} alt=""/>

            <p>
            {`Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.\n
            e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.`}
            </p>

            </div>


        </div>

        </>
    )
}