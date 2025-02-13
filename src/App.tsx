import Main from "./components/Main"
import SideMenu from "./components/SideMenu"

function App() {

  return (
    <div className="grid grid-cols-12 bg-black h-[100vh] overflow-hidden">
      <SideMenu/>
      <Main/>
    </div>
  )
}

export default App
