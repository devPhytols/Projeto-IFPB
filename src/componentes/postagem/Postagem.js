import "./postagem.css";

export default function Postagem( { post } ){
    return(
        <>

        <div className="posts">
            
            <div className="post">

                <img className="postImg" src={post.thumb} alt=""/>

                <div className="postInfo">
                    <div className="postCat">
                        <span>{post.info}</span>
                    </div>

                    <div className="postTitulo">
                        <span>{post.title}</span>
                    </div>

                    <div className="postData">
                        <span>{post.date}</span>
                    </div>   
                </div>

                <p className="postDesc">
                    {post.desc}
                </p>

            </div>

        </div>

        </>
    )
}