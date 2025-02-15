import Main from "./components/Main"
import MobileHeader from "./components/MobileHeader"
import MobileTabs from "./components/MobileTabs"
import SideMenu from "./components/SideMenu"

function App() {

  return (
    <div className="relative flex lg:flex-row md:flex-row flex-col bg-black h-[100vh] overflow-hidden">
      <SideMenu/>
      <MobileHeader/>
      <Main/>
      <MobileTabs/>
    </div>
  )
}

export default App
