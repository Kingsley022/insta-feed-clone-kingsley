import { useState } from "react";

interface Props{
    username: string; 
    caption: string;
}

const Caption = ({ username, caption }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const charLimit = 100;

    return (
        <div>
            <p className="text-white">
                <span className="font-semibold inline-block mr-2">{username}</span>
                {isExpanded || caption.length <= charLimit ? (
                    caption
                ) : (
                    <>
                        {caption.slice(0, charLimit)}...
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="text-gray-400 cursor-pointer ml-1"
                        >
                            more
                        </button>
                    </>
                )}
            </p>
        </div>
    );
};

export default Caption;
