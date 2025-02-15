import { createContext, useState } from "react";
import Main from "./components/Main"
import MobileHeader from "./components/MobileHeader"
import MobileTabs from "./components/MobileTabs"
import SideMenu from "./components/SideMenu"
import { Post } from "./types";
import initail_posts from "./json/posts.json"
import user_img from "./assets/images/user-2.jpg"


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

function App() {

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
      <div className="relative flex lg:flex-row md:flex-row flex-col bg-black h-[100vh] overflow-hidden">
        <SideMenu/>
        <MobileHeader/>
        <Main/>
        <MobileTabs/>
      </div>
    </AppContext.Provider>
  )
}

export default App
