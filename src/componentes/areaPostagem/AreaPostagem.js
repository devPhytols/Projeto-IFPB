import "./areapostagem.css";
import Postagem from "../postagem/Postagem";

export default function AreaPostagem(){
    return(
        <>

        <div className="posts">
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
        </div>

        </>
    )
}