import PostCard from "./PostCard";
import './styles/PostList.css'

export default function PostList({posts}) {

    if(!posts.length) {
        return (
            <div className="posts-list__message">There are no posts, yet</div>
        )
    }

    return (
        <div className="posts-list">
            {posts.map((post, key) => 
                <PostCard post={post} key={key} />
            )}
        </div>
    )
}