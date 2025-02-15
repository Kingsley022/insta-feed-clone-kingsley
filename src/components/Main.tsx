import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

const Main = () => {
    
    return (
        
        <main className="flex gap-6 overflow-y-scroll">
            <div className="text-white lg:w-[66%] w-full">
                <Stories/>
                <Posts/>
            </div>

            <Suggestions/>
        </main>
    )
}

export default Main