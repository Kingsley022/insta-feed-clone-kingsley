import { BsDot } from 'react-icons/bs'
import { FaBookmark, FaHeart, FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { IoIosMore } from 'react-icons/io'
import { RiChat3Line } from 'react-icons/ri'
import { Post } from '../types'
import { useContext, useState } from 'react'
import { AppContext } from "../App";
import Comments from './Comments'
import CommentForm from './CommentForm'
import Caption from './Caption'

const PostCard = ({post}:{post:Post}) => {

    const context = useContext(AppContext);
    const [openComments, setOpenComments] = useState(false);

    if(!context) return;
    const {setPosts, posts, setSelectedPost} = context;


    // Like handler
    const handleLike = () => {
        const updatedPosts = posts.map(initial_post => {
            if(initial_post.id == post.id){
                return {
                    ...post, 
                    is_liked: !initial_post.is_liked, 
                    likes: initial_post.is_liked ? initial_post.likes -1 : initial_post.likes +1 
                }
            }else{
                return initial_post
            }
        });

        setPosts(updatedPosts);
    };

    // Save handler
    const handleSave = () => {
        const updatedPosts = posts.map(initial_post => {
            if(initial_post.id == post.id){
                return {
                    ...post, 
                    is_saved: !initial_post.is_saved, 
                }
            }else{
                return initial_post
            }
        });

        setPosts(updatedPosts);
    };

    // handles comment click
    const handleViewComments = () => {
        setSelectedPost(post);
        setOpenComments(true);
    }

    return (
        <>

            {openComments && <Comments openComments={openComments} setOpenComments={setOpenComments}/>}

            <div className="flex flex-col gap-2" key={post.id}>
                {/* Post heeader */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        {/* Profile picture */}
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full p-[2px]">
                                <div className="w-full h-full rounded-full bg-black p-[2px]">
                                    <img
                                        src={post.profile_image}
                                        alt="user"
                                        className="w-full h-full object-cover object-top rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Profile details */}
                        <div className="flex flex-col text-sm">
                            <div className="flex items-center">
                                <span>{post.username}</span>
                                <BsDot className="text-gray-400"/>
                                <span className="text-gray-400">5h</span>
                            </div>
                            {post?.location && <span className="font-semibold uppercase">{post.location}</span>}
                        </div>
                    </div>

                    <IoIosMore className="text-lg cursor-pointer"/>
                </div>

                {/* Post Image */}
                <img src={post.post_image} alt="Post" className="lg:rounded-md md:rounded-md lg:h-[500px] md:h-[500px] h-[400px] object-cover"/>

                {/* Icons */}
                <div className="flex justify-between items-center text-2xl mt-4">
                    <div className="flex items-center gap-3">
                        {post.is_liked ? (
                                <FaHeart 
                                    onClick={handleLike}
                                    className='text-red-500 cursor-pointer'
                                />
                            ) : (
                                <FaRegHeart 
                                    onClick={handleLike}
                                    className="cursor-pointer"
                                />
                            )
                        }

                        <RiChat3Line className="cursor-pointer" onClick={handleViewComments}/>
                        <FiSend className="cursor-pointer"/>
                    </div>

                    {post.is_saved ? ( 
                            <FaBookmark
                                onClick={handleSave}
                                className='cursor-pointer'
                            />
                        ) : (
                            <FaRegBookmark
                                onClick={handleSave} 
                                className='cursor-pointer'
                            />
                        )
                    }

                </div>

                {/* Likes */}
                <div className="flex items-center">
                    <div className="relative h-6 w-12">
                        {post.liked_by.map((liker:any, index:number) => (
                            <div
                                key={index}
                                style={{translate:index*10 }}
                                className={`absolute top-0 left-0 transform]`}
                            >
                                <img
                                    src={liker.profile_image}
                                    alt="user"
                                    className="w-6 h-6 rounded-full border-2 border-black object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    <span className="block -pt-[-1rem] text-sm">{post.likes} likes</span>
                </div>

                {/* Caption */}
                <Caption username={post.username} caption={post.caption} />

                {/* Comments */}
                <div className="flex flex-col">
                    {post.comments_list && (
                        <span onClick={handleViewComments} className="text-[gray] cursor-pointer">
                            {post.comments_list.length > 1 ? `View all ${post.comments_list.length } comments` : "View comment"}
                        </span>                        
                    )}
                    <CommentForm id={post.id}/>
                </div>
            </div>
        </>
    )
}

export default PostCard