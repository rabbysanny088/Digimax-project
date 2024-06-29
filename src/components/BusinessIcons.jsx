import colorimg from "../assets/img/bg__img3.png";
import logo1 from "../assets/img/logo_1.png";
import logo2 from "../assets/img/logo_2.png";
import logo3 from "../assets/img/logo_3.png";
import logo4 from "../assets/img/logo_4.png";
import logo5 from "../assets/img/logo_5.png";
import logo7 from "../assets/img/logo_7.png";
import logo8 from "../assets/img/logo_8.png";



const BusinessIcons = () => {
  return (
    <div className="bg-section-gradient bg-transparent text-white mt-[80px] rounded-2xl border border-responsiveBg p-[40px]">
      <div className=" relative">
        <h3 className="text-center text-4xl w-[60%] font-bold flex items-center justify-center m-auto relative z-10 md:text-2xl md:w-full sm:text-lg sm:mb-0">
          Join over 300,000+ businesses to create unique brand designs.
        </h3>
        <img
          className="blue-img absolute h-[280px] top-[32px] object-contain md:hidden"
          src={colorimg}
          alt=""
        />
      </div>
      <div className=" mx-auto px-4">
        <div

          className="grid grid-cols-4 gap-8 mt-10 lg:grid-cols-3 md:grid-cols-2"
        >
          <div className="flex justify-center">
            <img
              src={logo1}
              alt="logo1"
              className="max-w-full w-[45%] sm:w-[80%] object-contain business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo2}
              alt="logo2"
              className="max-w-full w-[60%] object-contain business-icons sm:w-[80%]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo3}
              alt="logo3"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo4}
              alt="logo4"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo5}
              alt="logo5"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo3}
              alt="logo7"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo7}
              alt="logo7"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={logo8}
              alt="logo8"
              className="max-w-full w-[60%] object-contain sm:w-[80%] business-icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIcons;
