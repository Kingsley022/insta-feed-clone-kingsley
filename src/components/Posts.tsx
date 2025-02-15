import { useContext } from "react";
import { AppContext } from "./Main";
import PostCard from "./PostCard";
import { Post } from "../types";

const Posts = () => {
    const context = useContext(AppContext);
    
    if (!context) return null;

    const {posts} = context;

    return (
        <div className="flex flex-col px-24 mt-4 gap-6">
            {posts.map((post:Post) => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts