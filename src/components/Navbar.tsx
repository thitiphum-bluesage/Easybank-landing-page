import { useState } from "react";
import logo from "../assets/images/logo.svg";
import ham from "../assets/images/icon-hamburger.svg";
import colse from "../assets/images/icon-close.svg";

function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <>
      <nav className="h-[80px] flex items-center border-b-2 bg-white z-50  fixed top-0 w-screen">
        <div className="container flex justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex justify-between items-center w-[400px] ">
              <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                Home
              </li>
              <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                About
              </li>
              <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                Contact
              </li>
              <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                Blog
              </li>
              <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
                Careers
              </li>
            </ul>
          </div>
          <a href="https://github.com/thitiphum-bluesage">
            <button className="w-[200px] h-[50px] hidden lg:flex  items-center justify-center b border-2 border-none rounded-full bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-50">
              <span className="text-white">Request Invite</span>
            </button>
          </a>

          {openNav ? (
            <img
              className="lg:hidden block"
              src={colse}
              alt="close"
              onClick={() => {
                setOpenNav(false);
              }}
            />
          ) : (
            <img
              className="lg:hidden block"
              src={ham}
              alt="ham"
              onClick={() => {
                setOpenNav(true);
              }}
            />
          )}
        </div>
      </nav>
      <div
        className={`fixed z-[100] top-[80px] w-screen h-[calc(100vh-80px)] bg-gradient-to-b from-black/30 to-white/30 flex justify-center py-[30px] px-[30px] ${
          openNav ? "block" : "hidden"
        }`}
      >
        <div className="w-full bg-white h-[280px] rounded-lg flex justify-center items-center py-[35px]">
          <ul className="flex flex-col h-full justify-between text-center">
            <li className="opacity-80 hover:opacity-100 hover:cursor-pointer">
              Home
            </li>
            <li className="opacity-80 hover:opacity-100 hover:cursor-pointer">
              About
            </li>
            <li className="opacity-80 hover:opacity-100 hover:cursor-pointer">
              Contact
            </li>
            <li className="opacity-80 hover:opacity-100 hover:cursor-pointer">
              Blog
            </li>
            <li className="opacity-80 hover:opacity-100 hover:cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
