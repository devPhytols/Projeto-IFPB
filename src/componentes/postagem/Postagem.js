import "./postagem.css";

export default function Postagem( { post } ){
    return(
        <>

        <div className="posts">
            
            <div className="post">

            <a href={post.postlink} target="_blank"><img className="postImg" src={post.thumb} alt=""/></a>

                <div className="postInfo">
                    <div className="postCat">
                        <span>{post.info}</span>
                    </div>

                    <div className="postTitulo">
                        <a href={post.postlink} target="_blank">{post.title}</a>
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