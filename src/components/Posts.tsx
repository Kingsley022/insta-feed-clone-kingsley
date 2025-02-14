import { IoIosMore } from "react-icons/io";
import user from "../assets/images/user.jpg";
import { BsDot, BsEmojiSmile } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { LiaBookmark } from "react-icons/lia";

const Posts = () => {
  return (
    <div className="flex flex-col px-24 mt-4 gap-6">
        {[1,2,3,4,5,6,7,8,9,10].map(post => (
            <div className="flex flex-col gap-2" key={post}>
                {/* Post heeader */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        {/* Profile picture */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full p-[2px]">
                                <div className="w-full h-full rounded-full bg-black p-[2px]">
                                    <img
                                        src={user}
                                        alt="user"
                                        className="w-full h-full object-cover object-top rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Profile details */}
                        <div className="flex flex-col text-sm">
                            <div className="flex items-center">
                                <span>Just_Kingsley</span>
                                <BsDot className="text-gray-400"/>
                                <span className="text-gray-400">5h</span>
                            </div>
                            <span className="font-semibold uppercase">Enugu Nigeria</span>
                        </div>
                    </div>

                    <IoIosMore className="text-lg cursor-pointer"/>
                </div>

                {/* Post Image */}
                <img src={user} alt="Post" className="rounded-md h-[500px] object-cover"/>

                {/* Icons */}
                <div className="flex justify-between items-center text-2xl mt-4">
                    <div className="flex items-center gap-3">
                        <FaRegHeart className="cursor-pointer"/>
                        <RiChat3Line className="cursor-pointer"/>
                        <FiSend className="cursor-pointer"/>
                    </div>

                    <LiaBookmark className="cursor-pointer"/>
                </div>

                {/* Likes */}
                <div className="flex items-center">
                    <div className="relative h-6 w-12">
                        {[1,2,3].map((like, index) => (
                            <div
                                key={like}
                                style={{translate:index*10 }}
                                className={`absolute top-0 left-0 transform]`}
                            >
                                <img
                                    src={user || "https://via.placeholder.com/150"}
                                    alt="user"
                                    className="w-6 h-6 rounded-full border-2 border-black object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <span className="block -pt-[-1rem] text-sm">145,762 likes</span>
                </div>

                {/* Caption */}
                <div className="">
                    <p className="">
                        <span className="text-white font-semibold inline-block mr-2">Kingsley_</span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ratione praesentium asperiores?
                    </p>
                </div>

                {/* Comments */}
                <div className="flex flex-col">
                    <a href="/" className="text-[gray]">View all 156,261 comments</a>
                    <form action="" className="flex justify-between w-full items-center">
                        <input type="text" placeholder="Add a comment..." className="py-1 outline-none w-full" />
                        <BsEmojiSmile className="text-[gray] cursor-pointer"/>
                    </form>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Posts