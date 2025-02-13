import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import user from "../assets/images/user.jpg";
import { useEffect, useRef, useState } from "react";

const Stories = () => {
    const storiesRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Scroll visibility checker
    const checkScroll = () => {
        if (storiesRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = storiesRef.current;
            setCanScrollLeft(scrollLeft > 0); // Can scroll left if scrollLeft > 0
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth); // Can scroll right if scrollLeft < max scroll width
        }
    };

    // Handles for left scroll
    const scrollLeft = () => {
        if (storiesRef.current) {
            storiesRef.current.scrollBy({
                left: -90,
                behavior: "smooth"
            });
        }
    };

    // Handles for right scroll
    const scrollRight = () => {
        if (storiesRef.current) {
            storiesRef.current.scrollBy({
                left: 90,
                behavior: "smooth",
            });
        }
    };

    // Effect to check scroll position when the component mounts
    useEffect(() => {
        checkScroll();

        // Function to handle window resize
        const handleResize = () => checkScroll();

        // Listen for resize events
        window.addEventListener("resize", handleResize);

        // Listen for scroll events to dynamically update button visibility
        const handleScroll = () => checkScroll();
        if (storiesRef.current) {
            storiesRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if (storiesRef.current) {
                storiesRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="relative overflow-hidden w-full">
            <div ref={storiesRef} className="flex px-3 py-6 gap-6 justify-between overflow-x-scroll hide-scroll">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, 10).map((story) => (
                    <div key={story} className="flex flex-col gap-1 items-center">
                        <div className="relative w-17 h-17 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full p-[2px]">
                                <div className="w-full h-full rounded-full bg-black p-[2px]">
                                    <img
                                        src={user}
                                        alt="user"
                                        className="w-full h-full object-cover object-top rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <span className="text-sm">Kingsley_{story}</span>
                    </div>
                ))}
            </div>

            {canScrollLeft && (
                <div onClick={scrollLeft} className=" absolute top-[35%] left-6 bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full cursor-pointer">
                    <MdKeyboardArrowLeft className="text-black text-2xl" />
                </div>
            )}

            {canScrollRight && (
                <div onClick={scrollRight} className=" absolute top-[35%] right-6 bg-white w-[25px] h-[25px] flex justify-center items-center rounded-full cursor-pointer">
                    <MdKeyboardArrowRight className="text-black text-2xl" />
                </div>
            )}
        </div>
    );
};

export default Stories;
