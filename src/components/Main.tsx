import { createContext, useState } from "react";
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"
import initail_posts from "../json/posts.json"
import { Post } from "../types";
import user_img from "../assets/images/user-2.jpg"

export const AppContext = createContext<{ 
    posts: Post[],
    selectedPost: Post | null, 
    setPosts: React.Dispatch<React.SetStateAction<any>>,
    setSelectedPost: React.Dispatch<React.SetStateAction<any>>;
    user:{
        username: string,
        name: string,
        profile_image: string
    }
    } | undefined
    >(undefined);

const Main = () => {
    
    const [posts, setPosts] = useState(initail_posts);
    const [selectedPost, setSelectedPost] = useState(null);

    // Default user
    const user = {
        username: "_Just_kingsley",
        name: "Kingsley",
        profile_image: user_img
    }
    
    return (
        <AppContext.Provider value={{posts, setPosts, selectedPost, setSelectedPost, user}}>
            <main className="flex gap-6 overflow-y-scroll">
                <div className="text-white lg:w-[66%] w-full">
                    <Stories/>
                    <Posts/>
                </div>

                <Suggestions/>
            </main>
        </AppContext.Provider>
    )
}

export default Main