import { GoHomeFill } from "react-icons/go";
import logo from "../assets/images/white-text-logo.png"
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaInstagram, FaRegHeart, FaRegUser } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const SideMenu = () => {
    const menuItems = [
        {
            id: 1,
            title: "Home",
            icon: GoHomeFill,
            pathname: "/"
        },

        {
            id: 2,
            title: "Search",
            icon: CiSearch
        },

        {
            id: 3,
            title: "Explore",
            icon: MdOutlineExplore
        },

        {
            id: 4,
            title: "Reels",
            icon: BiMoviePlay
        },

        {
            id: 5,
            title: "Messages",
            icon: IoChatbubbleEllipsesOutline
        },

        {
            id: 6,
            title: "Notifications",
            icon: FaRegHeart
        },

        {
            id: 7,
            title: "Create",
            icon: CgAddR
        },

        {
            id: 8,
            title: "Profile",
            icon: FaRegUser
        },

        {
            id: 9,
            title: "More",
            icon: FiMenu
        },
    ];

    return (
        <aside className="lg:w-[20%] h-[100vh] px-6 py-12 lg:flex md:flex hidden flex-col gap-6 border-r-1 border-r-[#8080804b]">
            <img src={logo} alt="instagram logo" className="w-[120px] object-contain mx-2 md:hidden lg:block"/>
            <FaInstagram className="lg:hidden md:block text-white mx-2 text-2xl" />
            <div className="flex flex-col">
                {
                    menuItems.map(item => (
                        <div 
                            key={item.id}
                            className="flex text-white items-center px-2 py-3 gap-3 hover:bg-[#161616] transition-all rounded cursor-pointer">
                            <item.icon className="text-2xl"/>
                            <span className="lg:block md:hidden" style={{fontWeight: item?.pathname == "/" ? "bold" : ""}}>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}

export default SideMenu