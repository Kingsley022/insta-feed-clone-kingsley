import EmojiPicker from "emoji-picker-react";
import { useContext, useEffect, useRef, useState } from "react"
import { BsEmojiSmile } from "react-icons/bs"
import { AppContext } from "../App";

const CommentForm = ({id}:{id:number}) => {
    const [inputValue, setInputValue] = useState("");
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const emojiPickerRef = useRef<HTMLFormElement | null>(null);

    const context = useContext(AppContext);
    if(!context) return;
    const {user, posts, setPosts} = context;

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
            if(post.id == id){
                return {...post, comments_list: [comment, ...post.comments_list]}
            }
            return post
        });    
        setPosts(updatedPosts);
        setInputValue("");
        alert("Comment added");
    }

    return (
        <form 
            ref={emojiPickerRef} 
            className="relative flex justify-between w-full items-center"
            onSubmit={handlePost}
        >
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Add a comment..." className="py-1 outline-none w-full" />
            <div className="flex items-center gap-2">
                {inputValue && <button type="submit" className="text-blue-500 cursor-pointer">Post</button>}
                <BsEmojiSmile 
                    className="text-[gray] cursor-pointer"
                    onClick={() => setEmojiPickerVisible((prev) => !prev)}
                />
                
                {/* Render the emoji picker*/}
                {emojiPickerVisible && (
                    <div className="absolute lg:top-[2rem] top-[-25rem] z-10 lg:right-[-55%] right-[0rem]">
                        <EmojiPicker 
                            onEmojiClick={handleEmojiClick} 
                            searchDisabled={true}
                            autoFocusSearch={false}
                            skinTonesDisabled={true}
                            width={300}
                            height={400}
                            className="emoji-background"
                        />
                    </div>
                )}
            </div>
        </form>
    )
}

export default CommentForm