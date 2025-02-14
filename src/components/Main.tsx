import { createContext, useState } from "react";
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"
import initail_posts from "../json/posts.json"
import { Post } from "../types";

export const AppContext = createContext<{ 
    posts: Post[], 
    setPosts: React.Dispatch<React.SetStateAction<any>> 
    } | undefined
    >(undefined);

const Main = () => {
    const [posts, setPosts] = useState(initail_posts);
    
    return (
        <AppContext.Provider value={{posts, setPosts}}>
            <main className="col-span-10 flex gap-6 overflow-y-scroll">
                <div className="text-white w-[66%]">
                    <Stories/>
                    <Posts/>
                </div>

                <Suggestions/>
            </main>
        </AppContext.Provider>
    )
}

export default Main