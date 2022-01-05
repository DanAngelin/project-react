import React from "react";
import '../App.css'

const PostItem = function(props) {
    const { title, body, image } = props;

    return(
        <div className="posts-body">
                <div className="img-post">{ image }</div>
                <h3>{ title }</h3>
                <p>{ body }</p>
        </div>
    )
}

export default PostItem