import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Logo1 from "../../assets/ESGNLOGO1.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import Cookies from "js-cookie";
import SignOutOrInButton from "./SignOutOrInButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = Cookies.get("_auth_state");

  var username = "";

  if (user) {
    for (var key in JSON.parse(user)) {
      if (key == "identifier") {
        username = JSON.parse(user)[key];
      }
    }
  }
  return (
    <nav className="bg-black text-white">
      <div className="flex items-center font-medium text-xs justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/home">
            <img
              src={Logo1}
              alt="logo"
              className="w-18 md:cursor-pointer h-7"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        {/*gap-1*/}
        <ul className="md:flex hidden uppercase items-center font-[Poppins]">
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li> */}
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          {/* <Button /> */}
          <SignOutOrInButton />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-2 px-1 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
