import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import diginmaxLogo from "../assets/img/logo_digimax.png";




const Footer = () => {
  return (
    <div
    >
      <div className="border-t border-FFFFF">
        <div className=" text-white grid grid-cols-2 lg:grid-cols-1 mt-14 sm:mt-7">
          <div>
            <div className="flex flex-col gap-4 mb-7">
              <img src={diginmaxLogo} alt="" className="w-[20%] sm:w-[40%]" />
              <p className="text-base text-cardcolor font-medium ">
                Transforming Ideas into Digital Excellence. Elevate your online
                presence with our innovative solutions and strategic digital
                services.
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl cursor-pointer hover:bg-dropDownbgColor transition-all duration-300  hover:text-white hover:scale-110">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF className="" />
                  </a>
                </div>
                <div className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl cursor-pointer hover:bg-dropDownbgColor transition-all duration-300  hover:text-white hover:scale-110">
                  <IoEarthOutline />
                </div>
                <div className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl cursor-pointer hover:bg-dropDownbgColor transition-all duration-300  hover:text-white hover:scale-110">
                  <FaInstagram />
                  <a href="https://www.instagram.com/"></a>
                </div>
                <div className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl cursor-pointer hover:bg-dropDownbgColor transition-all duration-300  hover:text-white hover:scale-110">
                  <a href="https://www.linkedin.com">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="bg-white text-black rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl cursor-pointer hover:bg-dropDownbgColor transition-all duration-300  hover:text-white hover:scale-110">
                  <a href="https://www.youtube.com/">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-normal mb-3">Services</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Website Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    {" "}
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    {" "}
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    {" "}
                    Graphic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    {" "}
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    {" "}
                    Search Engine Optimization
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-normal mb-3">Support</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Ticket Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Sales Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-normal mb-3">Company</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Article & News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
                  >
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-FFFFF mt-3">
        <div className="flex justify-between items-center mt-4 md:flex-col md:mb-2">
          <p className="text-sm font-normal text-cardcolor">
            Copyright© 2023 DigiMax, All rights reserved. Powered by
            MoxCreative.
          </p>
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="#"
                className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
              >
                Term of use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
              >
                {" "}
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-normal text-cardcolor hover:text-textColor transition-all duration-300"
              >
                {" "}
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
