import React from "react";
import '../App.css';
import PostItem from './PostItem'
import postImg from '../img/post.svg'

class PostList extends React.Component {

    render() {
        const { posts } = this.props;

        return (
            <div className="posts-list">
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
