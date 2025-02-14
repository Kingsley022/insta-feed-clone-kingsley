import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

const Main = () => {

    return (
        <main className="col-span-10 flex gap-6 overflow-y-scroll">
            <div className="text-white w-[66%]">
                <Stories/>
                <Posts/>
            </div>

            <Suggestions/>
        </main>
    )
}

export default Main