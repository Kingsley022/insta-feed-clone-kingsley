import { motion } from "framer-motion";

interface Props {
    openActionMenu: boolean,
    setOpenActionMenu: React.Dispatch<React.SetStateAction<any>>,
}

const QuickActions = ({openActionMenu, setOpenActionMenu}:Props) => {

    const quickLinks = ["Report", "Unfollow", "Add to favorite", "Go to post", "Share", "Copy link", "Embed", "About this accout", "Cancel"]
    
    
    return (
        <div 
            onClick={() => setOpenActionMenu(!openActionMenu)} 
            className="z-50 bg-black/50 backdrop-blur-none h-[100vh] overflow-hidden w-full absolute top-0 left-0 flex justify-center items-center"
        >

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col bg-[#212020] lg:w-[35%] md:w-[60%] w-[80%] rounded-2xl"
            >
                {quickLinks.map((link, index) => (
                    <button 
                        key={index} 
                        className="border-b-1 border-b-[#80808047] py-4 cursor-pointer"
                        style={{
                            border: index == quickLinks.length-1 ? "none" : "",
                            color: index == 0 || index == 1 ? "red" : ""
                        }}
                    >
                        {link}
                    </button>
                ))}
            </motion.div>
        </div>
    )
}

export default QuickActions