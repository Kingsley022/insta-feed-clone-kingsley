import Stories from "./Stories"

const Main = () => {

    return (
        <main className="col-span-10 flex">
            <div className="text-white w-[70%]">
                <Stories/>
            </div>

            <div className="bg-amber-300 w-[30%]">Hello</div>
        </main>
    )
}

export default Main