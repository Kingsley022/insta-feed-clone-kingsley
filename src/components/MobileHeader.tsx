import { MdKeyboardArrowDown } from "react-icons/md"
import logo from "../assets/images/white-text-logo.png"
import { FaRegHeart } from "react-icons/fa"
import { CgAddR } from "react-icons/cg"

const MobileHeader = () => {
  return (
    <header className="flex sticky top-0 w-full lg:hidden md:hidden text-white border-b-1 border-b-[#80808072] items-center justify-between px-2 py-3">
        <div className="flex items-center gap-1">
            <img src={logo} alt="logo" className="w-[100px] h-fit"/>
            <MdKeyboardArrowDown className="text-xl" />
        </div>

        <div className="flex text-xl gap-2">
            <CgAddR/>
            <FaRegHeart />
        </div>
    </header>
  )
}

export default MobileHeader