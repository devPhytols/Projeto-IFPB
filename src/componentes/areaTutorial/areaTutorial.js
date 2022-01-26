import "./areaTutorial.css";
import Postagem from "../Tutoriais/tutorial";
import picture1 from "../../imagens/papel-reciclado.gif";
import picture2 from "../../imagens/lixo-eletronico.gif";
import picture3 from "../../imagens/lixo-organico.gif";
import picture4 from "../../imagens/lixo-ino.gif";
import picture5 from "../../imagens/separar-lixo.gif";
import picture6 from "../../imagens/residuos-solidos.gif";

export default function AreaTutorial(){

    let postagem1 = {
        info:"Como fazer artesanalmente papel reciclado.",
        title:"Como fazer papel reciclado",
        thumb: picture1,
        postlink: "https://www.youtube.com/watch?v=2ui29vA1iCU"
    }

    let postagem2 = {
        info:"Como é feita a reciclagem do lixo eletrônico.",
        title:"Reciclagem do Lixo Eletrônico",
        thumb: picture2,
        postlink: "https://www.youtube.com/watch?v=jr4--3Mkhqs"
    }

    let postagem3 = {
        info:"Como reclicar lixo orgânico em casa.",
        title:"Como Reciclar Lixo Orgânico",
        thumb: picture3,
        postlink: "https://www.youtube.com/watch?v=bh8S0q2BEqM"
    }
    
    let postagem4 = {
        info:"Reciclando o lixo inorgânico e diferenciando.",
        title:"Como Reciclar Lixo Inorgânico",
        thumb: picture4,
        postlink: "https://www.youtube.com/watch?v=rf6sXx4CUVo"
    }

    let postagem5 = {
        info:"Como separar de forma correta o lixo reciclável.",
        title:"Como Separar o Lixo Corretamente",
        thumb: picture5,
        postlink: "https://www.ecycle.com.br/separacao-de-lixo/"
    }

    let postagem6 = {
        info:"Como trabalhar com a reciclagem de resíduos sólidos.",
        title:"Como Reciclar Resíduos Sólidos",
        thumb: picture6,
        postlink: "https://www.youtube.com/watch?v=nZs4VRqJ_O8"
    }

    return(
        <>

        <div className="posts">
            <Postagem post={postagem1} />
            <Postagem post={postagem2} />
            <Postagem post={postagem3} />
            <Postagem post={postagem4} />
            <Postagem post={postagem5} />
            <Postagem post={postagem6} />
        </div>

        </>
    )
}