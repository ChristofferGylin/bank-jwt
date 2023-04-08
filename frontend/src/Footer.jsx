import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = ({ isLoggedIn, setIsLoggedIn }) => {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);

  const logIn = async () => {
    const user = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch("http://localhost:5000/sessions", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const token = await response.json();
      document.cookie = `gylin-bank-jwt=${token}`;
      setIsLoggedIn(true);
    } else {
      console.log("error");
    }
  };

  const logOut = () => {
    document.cookie =
      "gylin-bank-jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  let menuItems;

  if (isLoggedIn) {
    menuItems = (
      <div className="flex gap-5 text-lg font-semibold">
        <Link className="hover:underline" to="/balance">
          Check Balance
        </Link>
        <Button title="Log out" link="/" callback={logOut} />
      </div>
    );
  } else {
    menuItems = (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <input
            placeholder="User Name"
            className="w-full border border-pink-500 rounded-lg px-2 py-1 text-pink-800"
            type="text"
            ref={userNameRef}
          />
          <input
            placeholder="Password"
            className="w-full border border-pink-500 rounded-lg px-2 py-1 text-pink-800"
            type="password"
            ref={passwordRef}
          />
        </div>
        <ul className="grid grid-cols-2 gap-2 font-semibold">
          <Button title="Log in" link="/home" callback={logIn} />
          <Button title="New account" link="/register" callback={logIn} />
        </ul>
      </div>
    );
  }

  return (
    <footer className="flex justify-between items-center w-full h-24 bg-pink-400 text-pink-100 p-4"></footer>
  );
};

export default Footer;