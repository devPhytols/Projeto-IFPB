import background from "../../imagens/bg.jpg";
import "./cabecalho.css";

export default function Cabecalho(){
    return (
        <div className="cabecalho">

            <div className="cabecalhoTitulo">

                <span className="cabecalhoTituloCima"> Programação II</span>
                <span className="cabecalhoTituloBaixo"> Coleta e Reciclagem </span>


                <img 
                    className="cabecalhoImg" 
                    src={background}
                    alt=""
                />

            </div>

        </div>
    )
}