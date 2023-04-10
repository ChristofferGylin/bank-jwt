import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  return (
    <div className="App flex flex-col justify-between w-5/6 max-w-[1024px] mx-auto bg-pink-50 text-pink-900 h-full min-h-screen  shadow-lg shadow-pink-950/20">
      <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setResetTrigger={setResetTrigger} />
      <div className="flex justify-center items-center pb-8 w-full h-full">
        <Outlet context={{ setIsLoggedIn, resetTrigger, setResetTrigger }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
