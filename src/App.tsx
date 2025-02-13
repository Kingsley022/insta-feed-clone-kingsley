import SideMenu from "./components/SideMenu"

function App() {

  return (
    <div className="grid col-span-12 bg-black h-[100vh] overflow-hidden">
      <SideMenu/>

      <main className="col-span-11"></main>
    </div>
  )
}

export default App
