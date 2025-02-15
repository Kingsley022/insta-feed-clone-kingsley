import EmojiPicker from "emoji-picker-react";
import { useContext, useEffect, useRef, useState } from "react"
import { BsEmojiSmile } from "react-icons/bs"
import { AppContext } from "../App";

const CommentForm2 = ({id}:{id:number}) => {
    const [inputValue, setInputValue] = useState("");
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const emojiPickerRef = useRef<HTMLFormElement | null>(null);

    const context = useContext(AppContext);
    if(!context) return;
    const {user, posts, setPosts, setSelectedPost} = context;

    // Function to handle emoji selection
    const handleEmojiClick = (emojiData: any) => {
        setInputValue((prevValue) => prevValue + emojiData.emoji);
        setEmojiPickerVisible(false);
    };

    // Close the emoji picker when clicking outside box
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setEmojiPickerVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // Post's Comment
    const handlePost = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
    
        if(!inputValue) return;
    
        const comment = {
            username: user.username,
            profile_image: user.profile_image,
            comment: inputValue,
            likes: 0,
            replies: []
        };
    
        const updatedPosts = posts.map(post => {
            if(post.id === id){
                const updatedPost = { ...post, comments_list: [comment, ...post.comments_list] };
                
                // If this post is the selected post, update selectedPost
                if (post.id === context.selectedPost?.id) {
                    setSelectedPost(updatedPost);
                }
    
                return updatedPost;
            }
            return post;
        });
    
        setPosts(updatedPosts);
        setInputValue("");
    }
    

    return (
        <form 
            ref={emojiPickerRef} 
            className="relative flex gap-3 text-sm justify-between w-full items-center"
            onSubmit={handlePost}
        >
            {/* Emoji */}
            <div className="flex items-center gap-2">
                <BsEmojiSmile 
                    className="text-white cursor-pointer text-2xl"
                    onClick={() => setEmojiPickerVisible((prev) => !prev)}
                />
                
                {/* Render the emoji picker*/}
                {emojiPickerVisible && (
                    <div className="absolute top-[-22.5rem] z-10 left-[0]">
                        <EmojiPicker 
                            onEmojiClick={handleEmojiClick} 
                            searchDisabled={true}
                            autoFocusSearch={false}
                            skinTonesDisabled={true}
                            width={300}
                            height={350}
                            className="emoji-background"
                        />
                    </div>
                )}
            </div>

            {/* Input */}
            <input 
                value={inputValue} 
                onChange={(event) => setInputValue(event.target.value)} 
                type="text" 
                placeholder="Add a comment..." 
                className="py-1 outline-none w-full" 
            />

            {/* Submit button */}
            { inputValue ? (
                <button type="submit" className="text-blue-500 cursor-pointer">Post</button> ) : (
                    <button disabled type="submit" className="text-[gray] cursor-none">Post</button>
                )}
        </form>
    )
}

export default CommentForm2