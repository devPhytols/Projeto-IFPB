import "./tutorial.css";

export default function Postagem( { post } ){
    return(
        <>

        <div className="poststutorial">
            
            <div className="posttutorial">

            <a href={post.postlink} target="_blank"><img className="postImgtutorial" src={post.thumb} alt=""/></a>

                <div className="postInfotutorial">
                    <div className="postCattutorial">
                        <span>{post.info}</span>
                    </div>

                    <div className="postTitulotutorial">
                        <a href={post.postlink} target="_blank">{post.title}</a>
                    </div>

                    <div className="postDatatutorial">
                    </div>   
                </div>

                <p className="postDesctutorial">
                    {post.desc}
                </p>

            </div>

        </div>

        </>
    )
}