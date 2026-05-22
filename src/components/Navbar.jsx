import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci"
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div
      className="cursor-pointer text-white max-w-[1240px]"
      onClick={handleClick}
    >
      {isClicked ? (
        <RxCross1 className="sm:hidden text-2xl" />
      ) : (
        <CiMenuBurger className="text-2xl sm:hidden" />
      )}
      <ul className="hidden sm:flex justify-between gap-4 items-center">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#pricing">Account</a>
        </li>
        <li>
          <a href="#newsletter">Sign In</a>
        </li>
        <li>
          <button className="bg-white text-black px-4 py-2 rounded-md">
            Get Started
          </button>
        </li>
      </ul>
      <div
        className={`sm:hidden fixed left-0 top-20 z-10 w-full ${
          isClicked ? "flex" : "hidden"
        } h-full bg-black p-5`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pricing">Account</a>
          </li>
          <li>
            <a href="#newsletter">Sign In</a>
          </li>
          <li>
            <a href="#hero">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar