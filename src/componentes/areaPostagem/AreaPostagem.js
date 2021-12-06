import "./areapostagem.css";
import Postagem from "../postagem/Postagem";
import picture1 from "../../imagens/post1.jpg";
import picture2 from "../../imagens/post2.jpg";

export default function AreaPostagem(){

    let postagem1 = {
        info:"Baixando e Instalando Biblioteca",
        title:"Biblioteca React",
        date:"12 Nov 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture1
    }

    let postagem2 = {
        info:"Conteúdo do Último Slide",
        title:"React.js",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture2
    }

    return(
        <>

        <div className="posts">
            <Postagem post={postagem1} />
            <Postagem post={postagem2} />
        </div>

        </>
    )
}