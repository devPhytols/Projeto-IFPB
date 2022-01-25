import "./areaTutorial.css";
import Postagem from "../Tutoriais/tutorial";
import picture1 from "../../imagens/post1.jpg";
import picture2 from "../../imagens/post2.jpg";
import picture3 from "../../imagens/post3.jpg";
import picture4 from "../../imagens/postcss.jpg";
import picture5 from "../../imagens/post5.jpg";
import picture6 from "../../imagens/post6.jpg";

export default function AreaTutorial(){

    let postagem1 = {
        info:"Baixando e Instalando Biblioteca",
        title:"Biblioteca React",
        date:"12 Nov 2021",
        desc:"Codificando um WebSite...Codificando",
        thumb: picture1,
        postlink: "https://google.com.br/"
    }

    let postagem2 = {
        info:"Conteúdo do Último Slide",
        title:"React.js",
        date:"04 Dez 2021",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.",
        thumb: picture2,
        postlink: "https://google.com.br/"
    }

    let postagem3 = {
        info:"Instalando Bibliotecas",
        title:"Bibliotecas",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture3,
        postlink: "https://google.com.br/"
    }
    
    let postagem4 = {
        info:"Estilizando Conteúdos",
        title:"Estilização",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture4,
        postlink: "https://google.com.br/"
    }

    let postagem5 = {
        info:"Estilizando Links",
        title:"Removendo Marcador",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture5,
        postlink: "https://google.com.br/"
    }

    let postagem6 = {
        info:"Mudando Conteúdos",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem7 = {
        info:"Mudando Conteúdos",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem8 = {
        info:"Mudando Conteúdos",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
        thumb: picture6,
        postlink: "https://google.com.br/"
    }

    let postagem9 = {
        info:"Mudando Conteúdos",
        title:"Conteúdo",
        date:"04 Dez 2021",
        desc:"Codificando um WebSite...Codificando um WebSite...Codificando um WebSite...",
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