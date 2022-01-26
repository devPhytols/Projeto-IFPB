import "./areapostagem.css";
import Postagem from "../postagem/Postagem";
import picture1 from "../../imagens/post1.jpg";
import picture2 from "../../imagens/post1.jpg";
import picture3 from "../../imagens/post1.jpg";
import picture4 from "../../imagens/post1.jpg";
import picture5 from "../../imagens/post1.jpg";
import picture6 from "../../imagens/post1.jpg";

export default function AreaPostagem(){

    let postagem1 = {
        info:"Sem Informações",
        title:"Biblioteca React",
        date:"12 Nov 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture1,
        postlink: "https://google.com.br/"
    }

    let postagem2 = {
        info:"Sem Informações",
        title:"React.js",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture2,
        postlink: "https://google.com.br/"
    }

    let postagem3 = {
        info:"Sem Informações",
        title:"Bibliotecas",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture3,
        postlink: "https://google.com.br/"
    }
    
    let postagem4 = {
        info:"Sem Informações",
        title:"Estilização",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture4,
        postlink: "https://google.com.br/"
    }

    let postagem5 = {
        info:"Sem Informações",
        title:"Removendo Marcador",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture5,
        postlink: "https://google.com.br/"
    }

    let postagem6 = {
        info:"Sem Informações",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem7 = {
        info:"Sem Informações",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem8 = {
        info:"Sem Informações",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem9 = {
        info:"Sem Informações",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Coleta e reciclagem de lixo no município de Pedras de Fogo - PB.",
        thumb: picture6,
        postlink: "https://google.com.br/"
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
            <Postagem post={postagem7} />
            <Postagem post={postagem8} />
            <Postagem post={postagem9} />
        </div>

        </>
    )
}