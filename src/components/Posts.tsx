import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Main";
import PostCard from "./PostCard";
import { Post } from "../types";

const Posts = () => {
    const context = useContext(AppContext);
    if (!context) return null;

    const { posts } = context;
    const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const postsPerPage = 5;

    // Load initial posts
    useEffect(() => {
        setVisiblePosts(posts.slice(0, postsPerPage));
    }, [posts]);

    // Infinite Scroll Handler
    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
        ) {
            loadMorePosts();
        }
    };

    // Load More Posts
    const loadMorePosts = () => {
        const nextPage = page + 1;
        const newPosts = posts.slice(0, nextPage * postsPerPage);

        if (newPosts.length > visiblePosts.length) {
            setVisiblePosts(newPosts);
            setPage(nextPage);
        }
    };

    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page, visiblePosts]);

    return (
        <div className="flex flex-col px-24 mt-4 gap-6">
            {visiblePosts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
            <div className="text-center py-4 text-gray-500">Loading more...</div>
        </div>
    );
};

export default Posts;