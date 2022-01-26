import "./tutorial.css";

export default function Postagem( { post } ){
    return(
        <>

        <div className="poststutorial">
            
            <div className="posttutorial">

            <a href={post.postlink} target="_blank"><img className="postImgtutorial" src={post.thumb} alt=""/></a>

                <div className="postInfotutorial">

                    <div className="postTitulotutorial">
                        <a href={post.postlink} target="_blank">{post.title}</a>
                    </div>
                    <div className="postCattutorial">
                        <span>{post.info}</span>
                    </div>

                    <div className="postDatatutorial">
                    </div>   
                </div>

            </div>

        </div>

        </>
    )
}