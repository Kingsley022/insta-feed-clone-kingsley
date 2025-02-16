import { motion } from "framer-motion";
import { useContext } from "react"
import post from "../assets/images/user.jpg"
import ProfilePicture from "./ProfilePicture";
import { IoIosStar } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import CommentForm2 from "./CommentForm2";
import { AppContext } from "../App";

interface Props {
    openComments: boolean,
    setOpenComments: React.Dispatch<React.SetStateAction<any>>,
}

const Comments = ({openComments, setOpenComments}:Props) => {
    const context = useContext(AppContext);
    if(!context) return;

    const {selectedPost, posts, setPosts, setSelectedPost} = context;

    // Handles comment like
    const handleLike = (commentIndex: number) => {
        const updatedPosts = posts.map(post => {
            if (post.id === selectedPost?.id) {
                const updatedComments = post.comments_list.map((comment, index) => {
                    if (index === commentIndex) {
                        return { 
                            ...comment, 
                            is_liked: !comment.is_liked,
                            likes: comment.is_liked ? comment.likes - 1 : comment.likes + 1 
                        };
                    }
                    return comment;
                });
    
                // Update selectedPost
                setSelectedPost({ ...post, comments_list: updatedComments });
    
                return { ...post, comments_list: updatedComments };
            }
            return post;
        });
        
        // Update Post
        setPosts(updatedPosts);
    };
    
    
    
    return (
        <div className="z-50 lg:bg-black/60 bg-black backdrop-blur-none h-[100vh] overflow-hidden w-full absolute top-0 left-0 flex justify-center items-center">
            
            <LiaTimesSolid 
                onClick={() => setOpenComments(!openComments)}
                className='text-white fixed right-0 text-2xl my-3 lg:mx-6 mx-3 top-0 cursor-pointer' 
            />

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex bg-black lg:h-[90vh] h-[85vh] lg:w-[80%] w-full"
            >
                <img src={selectedPost?.post_image} alt="" className="w-[50%] object-cover lg:block hidden" />

                <div className="lg:w-[50%] w-full relative">

                    {/* Header */}
                    <div className="top-0 sticky flex justify-between w-full p-4 border-b-1 border-b-[#80808066]">
                        <div className="flex items-center gap-2">
                            <ProfilePicture image={selectedPost?.profile_image || post}/>
                            <span className="font-semibold">{selectedPost?.username}</span>
                        </div>

                        <div className="flex items-center text-2xl gap-3">
                            <IoIosStar className="text-orange-300 cursor-pointer"/>
                            <MdOutlineMoreHoriz className="cursor-pointer" />
                        </div>
                    </div>
                    
                    {/* Comments */}
                    <div className="flex flex-col gap-4 px-6 py-6 h-[75%] overflow-y-scroll hide-scroll">
                        {selectedPost?.comments_list.map((comment, index)=> (
                            <div className="flex justify-between items-center" key={index}>
                                <div className="flex gap-2">
                                    <ProfilePicture image={comment.profile_image}/>
                                    <div className="flex flex-col text-sm">
                                        <div className="flex gap-1.5">
                                            <span className="font-semibold">{comment.username}</span>
                                            <span className="">{comment.comment}</span>
                                        </div>

                                        <div className="flex gap-2 text-[gray] mt-0.5 font-medium">
                                            <span>1h</span>
                                            {comment.likes > 0 && <span>{comment.likes} {comment.likes > 1 ? "likes" : "like"}</span>}
                                            <span className="cursor-pointer font-semibold">Reply</span>
                                        </div>
                                    </div>
                                </div>

                                {comment.is_liked ? ( 
                                    <FaHeart 
                                        onClick={() => handleLike(index)}
                                        className="text-sm cursor-pointer text-red-500" />
                                    ) : (
                                    <FaRegHeart 
                                        onClick={() => handleLike(index)}
                                        className="text-sm cursor-pointer" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="px-6 absolute bottom-0 w-full py-3 border-t-1 border-t-[#80808066]">
                        <CommentForm2 id={selectedPost?.id || 0}/>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Comments