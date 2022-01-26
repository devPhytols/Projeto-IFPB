import "./barralateral.css";
import FotoModelo from "../../imagens/sobrenos.png";

export default function BarraLateral() {
    return ( <>

        <div className = "barraLado">

        <div className = "barraLadoItem">

        <img className = "Imgpurple"
        src = {
            FotoModelo
        }
        alt = "" />

        <p> {
            `O Projeto tem como objetivo passar para a nossa população as maneiras corretas de manejar todos os lixos e recicláveis que utilizamos em nosso dia a dia, queremos conscientizar as pessoas de que o descarte dos lixos pode ser feito de uma maneira que não afete drasticamente o nosso meio ambiente, contaminando todo o nosso solo, nossos rios e destruindo paisagens e locais de suma importância para o bem do nosso planeta.`
        } </p>

        <p>{`Também buscamos conscientizar a população pedrafoguense sobre a importância do descarte do lixo de maneira correta, sendo assim flexibilizando alternativas acessíveis para realidade da nossa cidade.

            Organização da coleta do lixo da cidade e descarte correto.

            Fim do uso dos lixão na cidade de Pedras de Fogo - PB

            Remoção dos resíduos sólidos presentes no lixão de Pedras de Fogo - PB e recuperação do terreno.

            Implantação de sede para separação de material reciclável.

        Dias semanais para coleta de material reciclável.

        Implementação educacional dentro das instituições municipais sobre a importância do meio ambiente sobre o projeto para assim formarmos cidadões que entendam a importância do descarte do lixo de maneira correta e da reciclagem além da redução de consumo de resíduos.`}</p>

            </div>


            </div>

            </>
    )
}