import { motion } from "framer-motion";
import logo from "../assets/images/logo-2.png"
import { useEffect, useState } from "react";

interface Props {
    openActionMenu: boolean,
    setOpenActionMenu: React.Dispatch<React.SetStateAction<any>>,
}

const AddToHomeScreen = ({openActionMenu, setOpenActionMenu}:Props) => {

    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    
    useEffect(() => {
        const handleBeforeInstallPrompt = (event: any) => {
            event.preventDefault(); 
            setDeferredPrompt(event); 
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    }, []);

    const handleAddToHomeScreen = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted A2HS");
            } else {
                console.log("User dismissed A2HS");
            }
            setDeferredPrompt(null);
        }
    };

    return (
        <div 
            onClick={() => setOpenActionMenu(!openActionMenu)} 
            className="bg-black/50 backdrop-blur-none h-[100vh] overflow-hidden w-full absolute top-0 left-0 flex justify-center items-center"
        >

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center text-center py-8 gap-2 bg-[#212020] w-[90%] rounded-2xl"
            >
                <div className="flex w-[90px] bg-white rounded-full p-3">
                    <img src={logo} alt="instagram-logo" />
                </div>

                <h2 className="text-3xl font-bold px-6">Add Instagram to your Home screen?</h2>
                <p className="text-[gray] px-6">Get to instagram quickly and easily by adding it to your Home screen.</p>

                <button
                    onClick={handleAddToHomeScreen} 
                    className="font-semibold text-blue-500 mt-8 border-t-1 border-b-1 border-b-[#8080803f] border-t-[#8080803f] w-full p-3"
                >
                    Add to Home screen
                </button>

                <button
                    onClick={() => setOpenActionMenu(!openActionMenu)} 
                    className="font-semibold"
                >
                    Cancel
                </button>

            </motion.div>
        </div>
    )
}

export default AddToHomeScreen