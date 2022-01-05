import React from "react";
import PostItem from './PostItem'
import postImg from '../img/post.png'

class PostList extends React.Component {

    render() {
        const { posts } = this.props;

        return (
            <div>
                {posts.map((post, index) => {
                    return <PostItem 
                                image={<img src={ postImg } alt="icon post"/>}
                                title={post.title}
                                body={post.body}
                                key={index}
                            />
                })}
            </div>
        )
    }
}

export default PostList
