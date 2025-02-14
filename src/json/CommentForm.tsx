import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react"
import { BsEmojiSmile } from "react-icons/bs"

const CommentForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const emojiPickerRef = useRef<HTMLFormElement | null>(null);


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

    return (
        <form ref={emojiPickerRef} action="" className="relative flex justify-between w-full items-center">
            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Add a comment..." className="py-1 outline-none w-full" />
            <div className="flex items-center gap-2">
                {inputValue && <button type="submit" className="text-blue-500 cursor-pointer">Post</button>}
                <BsEmojiSmile 
                    className="text-[gray] cursor-pointer"
                    onClick={() => setEmojiPickerVisible((prev) => !prev)}
                />
                
                {/* Render the emoji picker*/}
                {emojiPickerVisible && (
                    <div className="absolute top-[2rem] z-10 right-[-55%]">
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