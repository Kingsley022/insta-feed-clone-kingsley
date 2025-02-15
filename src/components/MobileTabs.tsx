import { useContext } from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { GoHomeFill } from 'react-icons/go'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { AppContext } from './Main'
import user from "../assets/images/user-2.jpg"
import { FiSearch } from 'react-icons/fi'

const MobileTabs = () => {
    const context = useContext(AppContext);

    return (
        <div className="bg-black text-white text-2xl fixed bottom-0 w-full py-3 flex items-center justify-around z-50 border-t-1 border-t-[#80808000]">
            <GoHomeFill />
            <FiSearch />
            <BiMoviePlay />
            <IoChatbubbleEllipsesOutline />
            <img src={context?.user?.profile_image || user} alt="user" className="w-8 h-8 rounded-full" />
        </div>
    );
};


export default MobileTabs