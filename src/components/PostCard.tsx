import { BsDot } from 'react-icons/bs'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { IoIosMore } from 'react-icons/io'
import { LiaBookmark } from 'react-icons/lia'
import { RiChat3Line } from 'react-icons/ri'
import { Post } from '../types'
import { useContext } from 'react'
import { AppContext } from './Main'
import CommentForm from '../json/CommentForm'

const PostCard = ({post}:{post:Post}) => {

    const context = useContext(AppContext);

    if(!context) return;

    const {setPosts, posts} = context;


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

    return (
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
            <img src={post.post_image} alt="Post" className="rounded-md h-[500px] object-cover"/>

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

                    <RiChat3Line className="cursor-pointer"/>
                    <FiSend className="cursor-pointer"/>
                </div>

                <LiaBookmark className="cursor-pointer"/>
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
            <div className="">
                <p className="">
                    <span className="text-white font-semibold inline-block mr-2">{post.username}</span>
                    {post.caption}
                </p>
            </div>

            {/* Comments */}
            <div className="flex flex-col">
                <span className="text-[gray] cursor-pointer">View all 156,261 comments</span>
                <CommentForm/>
            </div>
        </div>
    )
}

export default PostCard