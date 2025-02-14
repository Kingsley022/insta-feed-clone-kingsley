import user from "../assets/images/user.jpg"

const Suggestions = () => {
    return (
        <div className="w-[34%] px-6 py-10">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src={user}
                        alt="user"
                        className="w-12 h-12 object-cover object-top rounded-full"
                    />
                    <div className="flex flex-col text-sm">
                        <span className="text-white font-semibold">Just_Kingsley</span>
                        <span className="text-gray-400">Kingsley</span>
                    </div>
                </div>
                <span className="text-blue-500 text-sm">Switch</span>
            </div>

            {/* Suggestions */}
            <div className="">
                <div className="flex justify-between my-6">
                    <span className="text-gray-400 font-semibold text-sm">Suggested for you</span>
                    <span className="text-white text-sm">See all</span>
                </div>
                
                <div className="flex flex-col gap-4">
                    {[1,2,3,4,5].map(suggestion => (
                        <div key={suggestion} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src={user}
                                    alt="user"
                                    className="w-12 h-12 object-cover object-top rounded-full"
                                />
                                <div className="flex flex-col text-sm">
                                    <span className="text-white font-semibold">Just_Kingsley</span>
                                    <span className="text-gray-400 text-xs">Followed by James.good</span>
                                </div>
                            </div>
                            <span className="text-blue-500 text-sm">Follow</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    }

export default Suggestions