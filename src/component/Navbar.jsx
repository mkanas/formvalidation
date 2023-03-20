import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/" },
    { name: "Services", link: "/" },
    { name: "About", link: "/" },
  ];

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className=" flex fixed justify-between bg-white w-full px-5 py-2">
      <div className="flex">Smile.id</div>
      <div className="hidden md:flex">
        <ul className="flex gap-10">
          {Links.map((link) => (
            <li className="">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex gap-5 ">
        <button className=" text-white bg-black rounded-full py-2 px-8 text-xs outline outline-2 font-bold">
          Login
        </button>
        <button className=" text-black rounded-full px-7 text-xs outline outline-1 font-bold">
          Sign Up
        </button>
      </div>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        <GiHamburgerMenu />
      </div>
      <div
        className={
          openMenu
            ? "fixed left-0 top-0 w-[65%] md:hidden p-10 ease-in duration-500 h-screen bg-slate-100"
            : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
        }
      >
        <div className=" flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <IoMdClose />
          </div>
        </div>
        <ul className="flex-col space-y-5">
          {Links.map((link) => (
            <li className="">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex gap-5">
          <button className=" text-white bg-black rounded-full py-2 px-8 text-xs outline outline-2 font-bold">
            Login
          </button>
          <button className=" text-black rounded-full px-7 text-xs outline outline-1 font-bold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
