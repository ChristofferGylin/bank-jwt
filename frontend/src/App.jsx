import { Outlet } from "react-router-dom"
import Menu from "./Menu"
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App w-5/6 max-w-[1024px] mx-auto bg-pink-50 text-pink-900 min-h-screen  shadow-lg shadow-pink-950/20">
      <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="pb-8">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
