import { motion } from "framer-motion";
import { useState } from "react";
import diginmaxLogo from "../assets/img/logo_digimax.png";






const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {/* desktop navbar */}
      <div
      >
        <div className=" flex h-[70px] items-center justify-between gap-2 text-white  border-b border-b-borderColor p-2">
          <div>
            <img className="w-[120px]" src={diginmaxLogo} alt="" />
          </div>
          <div className=" flex gap-3 items-center">
            <div className="screens">
              <ul className="flex items-center gap-10 font-semibold cursor-pointer text-sm ">
                <li
                >
                  <a href="#" className="text-textColor transition-all">
                    Homepage
                  </a>
                </li>
                <li
                >
                  <a className="hover:text-textColor transition-all" href="#">
                    About us
                  </a>
                </li>
                <li
                  className="drop_down_menu   hover:text-textColor transition-all relative"
                >
                  <a className="flex items-center gap-2" href="#">
                    Service
                    <span>
                      <i className="bx bx-chevron-down text-lg flex items-center"></i>
                    </span>
                  </a>
                  <div className="absolute top-7 bg-green-600 w-[70px] h-[20px] bg-transparent"></div>
                  <ul className="drop_links absolute bg-dropDownbgColor top-11 rounded-md w-[120px] transition-all duration-300 ease-in-out">
                    <li
                      className="hover:bg-white p-2 rounded-tl-md rounded-tr-md hover:text-black text-white"
                    >
                      <a href="#">Pricing plan</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-bl-md rounded-br-md hover:text-black text-white">
                      <a href="#">Detail Service</a>
                    </li>
                  </ul>
                </li>

                <li
                  className=" hover:text-textColor transition-all"
                >
                  <a className="" href="#">
                    Portfolio
                  </a>
                </li>
                <li
                >
                  <a className="hover:text-textColor transition-all" href="#">
                    Contact us
                  </a>
                </li>
                <li
                  className="drop_down_menu   hover:text-textColor transition-all relative"
                >
                  <a className="flex items-center gap-2" href="#">
                    Pages
                    <span>
                      <i className="bx bx-chevron-down text-lg flex items-center"></i>
                    </span>
                  </a>
                  <div className="absolute top-7 bg-green-600 w-[70px] h-[20px] bg-transparent"></div>
                  <ul className="drop_links absolute bg-dropDownbgColor top-11 rounded-md w-[120px] transition-all duration-300 ease-in-out">
                    <li className="hover:bg-white p-2 rounded-tl-md rounded-tr-md hover:text-black text-white">
                      <a href="#">Team</a>
                    </li>
                    <li className="hover:bg-white p-2  hover:text-black text-white">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="hover:bg-white p-2  hover:text-black text-white">
                      <a href="#">Blog Archive</a>
                    </li>
                    <li className="hover:bg-white p-2 rounded-bl-md rounded-br-md hover:text-black text-white">
                      <a href="#">Error 404</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <i
                className={`bx ${
                  isOpen ? "bx-x" : "bx-menu"
                } text-3xl hidden lg:block`}
                onClick={handleClick}
              ></i>

              <button type="button" className="btn-nav md:hidden">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* desktop navbar */}

      {/* responsive navbar */}
      <div className="lg:hidden md:block">
        <div
          className={`fixed left-0 w-full bg-gray-900 text-white shadow-2xl transition-all duration-300 ${
            isOpen ? "top-[60px]" : "-top-[500px]"
          }`}
        >
          <div className="text-white">
            <ul className=" font-semibold cursor-pointer text-[16px]">
              <li className="bg-white w-full p-3 rounded-tl-lg rounded-tr-lg hover:bg-white">
                <motion.a
                  href="#"
                  className="text-black  transition-all sm:text-sm sm:p-0"
                >
                  Homepage
                </motion.a>
              </li>
              <div className="flex flex-col gap-[20px] p-3">
                <li className="">
                  <a className=" transition-all sm:text-sm sm:p-0" href="#">
                    About us
                  </a>
                </li>
                <li className="drop_down_menu    transition-all relative">
                  <a
                    className="flex items-center gap-2 sm:text-sm sm:p-0"
                    href="#"
                  >
                    Service
                  </a>
                </li>

                <li className="  transition-all  ">
                  <a className="sm:text-sm" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="w-full">
                  <a className="sm:text-sm sm:p-0" href="#">
                    Contact us
                  </a>
                </li>
                <li className="drop_down_menu     relative transition-all">
                  <a
                    className="flex items-center gap-2 sm:text-sm sm:p-0"
                    href="#"
                  >
                    Pages
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* responsive navbar */}
    </>
  );
};

export default Header;
