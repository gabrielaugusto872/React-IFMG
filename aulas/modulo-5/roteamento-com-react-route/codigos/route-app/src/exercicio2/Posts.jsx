import { Link, useParams, Navigate } from "react-router-dom";

function Posts(){
    const {id} = useParams();

    const posts = {
        1: "Post sobre React",
        2: "Post sobre JavaScript",
        3: "Post sobre Git"
    };

     if (id && !posts[id]) {
        return <Navigate to="*" replace />;
    }

    return(
        <>
            <h1>Menu de Postagens</h1>

            <nav>
                <Link to="/posts/1">Post 1</Link> | {" "}
                <Link to="/posts/2">Post 2</Link> | {" "}
                <Link to="/posts/3">Post 3</Link> | {" "}
                <Link to="/posts/4">Post 4</Link>
            </nav>

            {id && (
                <>
                    <h1>Post ID: {id}</h1>
                    <p>{posts[id]}.</p>
                </>
            )}
            
        </>
    )
    
}

export default Posts