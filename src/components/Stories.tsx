import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import user from "../assets/images/user.jpg";
import { useEffect, useRef, useState } from "react";
import stories from "../json/stories.json"

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
                left: -200,
                behavior: "smooth"
            });
        }
    };

    // Handles for right scroll
    const scrollRight = () => {
        if (storiesRef.current) {
            storiesRef.current.scrollBy({
                left: 200,
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
            <div ref={storiesRef} className="flex px-3 py-6 gap-[18.5px] justify-between overflow-x-scroll hide-scroll">
                {stories?.map((story) => (
                    <div key={story.id} className="flex flex-col gap-1 items-center cursor-pointer">
                        <div className="relative w-17 h-17 flex items-center justify-center">
                            <div  className={`absolute inset-0 ${
                                        story.is_seen
                                            ? "bg-gray-600"
                                            : "bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"
                                    } rounded-full p-[2px]`}
                                >
                                <div className="w-full h-full rounded-full bg-black p-[2px]">
                                    <img
                                        src={story.profile_image || user}
                                        alt="user"
                                        className="w-full h-full object-cover object-top rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <span className="text-sm">{story.username.length > 10 ? story.username.slice(0,7)+"..." : story.username}</span>
                    </div>
                ))}
            </div>

            {canScrollLeft && (
                <div onClick={scrollLeft} className="lg:flex hidden absolute top-[35%] left-6 bg-white w-[25px] h-[25px] justify-center items-center rounded-full cursor-pointer">
                    <MdKeyboardArrowLeft className="text-black text-2xl" />
                </div>
            )}

            {canScrollRight && (
                <div onClick={scrollRight} className="lg:flex hidden  absolute top-[35%] right-6 bg-white w-[25px] h-[25px] justify-center items-center rounded-full cursor-pointer">
                    <MdKeyboardArrowRight className="text-black text-2xl" />
                </div>
            )}
        </div>
    );
};

export default Stories;
