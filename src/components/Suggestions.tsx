import { useContext, useState } from "react"
import { AppContext } from "./Main"
import ig_suggestions from "../json/suggestions.json"

const Suggestions = () => {
    const context = useContext(AppContext);
    const [suggestions, setSuggestions] = useState(ig_suggestions);

    if(!context) return;
    const { user } = context;

    const handleFollow = (id:number) => {
        const updatedSuggestions = suggestions.map(suggestion => {
            if(suggestion.id == id){
                return {...suggestion, is_following: !suggestion.is_following}
            }
            return suggestion
        });

        setSuggestions(updatedSuggestions);
    }

    return (
        <div className="w-[34%] px-6 py-10 hidden lg:block">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src={user.profile_image}
                        alt={user.name}
                        className="w-12 h-12 object-cover object-top rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                        <span className="text-white font-semibold">{user.username}</span>
                        <span className="text-gray-400">{user.name}</span>
                    </div>
                </div>
                <span className="text-blue-500 text-sm">Switch</span>
            </div>

            {/* Suggestions */}
            <div className="">
                <div className="flex justify-between my-6">
                    <span className="text-gray-400 font-semibold text-sm">Suggested for you</span>
                    <span className="text-white text-sm cursor-pointer">See all</span>
                </div>
                
                <div className="flex flex-col gap-4">
                    {suggestions.map(suggestion => (
                        <div key={suggestion.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src={suggestion.profile_image}
                                    alt="user"
                                    className="w-12 h-12 object-cover object-top rounded-full"
                                />
                                <div className="flex flex-col text-sm">
                                    <span className="text-white font-semibold">{suggestion.full_name}</span>
                                    <span className="text-gray-400 text-xs">Followed by {suggestion.mutual_username}</span>
                                </div>
                            </div>

                            {suggestion.is_following ? (
                                <button 
                                    onClick={() => handleFollow(suggestion.id)} 
                                    className="text-sm text-[gray] cursor-pointer"
                                >
                                    Following
                                </button>
                            ) : (
                                <button 
                                    onClick={() => handleFollow(suggestion.id)} 
                                    className="text-sm text-blue-500 cursor-pointer"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    }

export default Suggestions