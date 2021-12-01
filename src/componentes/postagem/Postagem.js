import "./postagem.css";
import FotoPost from "../../imagens/post1.jpg";

export default function Postagem(){
    return(
        <>

        <div className="posts">
            
            <div className="post">

                <img className="postImg" src={FotoPost} alt=""/>

                <div className="postInfo">
                    <div className="postCat">
                        <span>Programação</span>
                    </div>

                    <div className="postTitulo">
                        <span>Titulo da Postagem</span>
                    </div>

                    <div className="postData">
                        <span>01 Dez 2021</span>
                    </div>   
                </div>

                <p className="postDesc">
                    Olá dev, esta é a minha primeira postagem nesse site!
                    Olá dev, esta é a minha primeira postagem nesse site!
                </p>

            </div>

        </div>

        </>
    )
}