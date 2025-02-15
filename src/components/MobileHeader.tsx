import { MdKeyboardArrowDown } from "react-icons/md"
import logo from "../assets/images/white-text-logo.png"
import { CiSquarePlus } from "react-icons/ci"
import { FaRegHeart } from "react-icons/fa"

const MobileHeader = () => {
  return (
    <header className="flex sticky top-0 w-full lg:hidden md:hidden text-white border-b-1 border-b-[#80808072] items-center justify-between px-3 py-3">
        <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-[100px] h-fit"/>
            <MdKeyboardArrowDown className="text-xl" />
        </div>

        <div className="flex text-xl gap-2">
            <CiSquarePlus />
            <FaRegHeart />
        </div>
    </header>
  )
}

export default MobileHeader