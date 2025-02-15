import { useContext } from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { GoHomeFill } from 'react-icons/go'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { AppContext } from "../App";
import { FiSearch } from 'react-icons/fi'

const MobileTabs = () => {
    const context = useContext(AppContext);
    if(!context) return;
    const {user} = context;
    return (
        <div className="lg:hidden md:hidden bg-black text-white text-2xl fixed bottom-0 w-full py-3 flex items-center justify-around z-50 border-t-1 border-t-[#80808000]">
            <GoHomeFill />
            <FiSearch />
            <BiMoviePlay />
            <IoChatbubbleEllipsesOutline />
            <img src={user?.profile_image} alt="user" className="w-8 h-8 rounded-full" />
        </div>
    );
};


export default MobileTabs