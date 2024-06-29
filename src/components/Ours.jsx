import CountUp from "react-countup";
import { FaArrowRightLong } from "react-icons/fa6";



const Ours = () => {
  return (
    <>
      <div className="max-w-[1300px] my-0 mx-auto">
        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 md:grid-cols-1 p-4">
          <div className="col-span-2">
            <div
              className="computer rounded-2xl p-4 h-full"
            >
              <div className="text-white flex items-center justify-end ">
                <div className="bg-bottom-gradient rounded-[50%] py-[16px] pl-[10px] pr-[16px] w-[60px] h-[60px] flex items-center justify-center  ring-2 ring-FFFFF mt-2 mr-2">
                  <FaArrowRightLong size={20} />
                </div>
              </div>
              <div className="text-white flex flex-col gap-5 p-5 sm:mt-2">
                <span className="font-bold text-[12px] text-textColor">
                  OUR VALUE
                </span>
                <h4 className="font-bold text-4xl w-[64%] lg:w-[100%] sm:text-lg sm:w-[100%]">
                  Smart Designs, Sharp Results - Choose Digimax for Digital
                  Excellence.
                </h4>
                <p className=" text-gray-500 hover:text-white transition-all duration-500 text-sm w-[50%] md:w-full md:text-sm sm:text-sm ml-[-14px] px-3">
                  Neque sodales elementum fames ac nunc pellentesque penatibus.
                  Consectetuer donec nascetur fames metus est faucibus sodales
                  commodo natoque consequat fusce.
                </p>
                <button type="button" className="flex btn-nav w-[145px]">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-3 md:flex-col">
            <div
              className="bg-rounded_color rounded-xl flex justify-between mb-3 h-full"
            >
              <div className="text-white flex flex-col gap-5 p-5 sm:mt-2 mt-5">
                <span className="font-bold text-[12px] ">OUR VISION</span>

                <h4 className="font-bold text-xl lg:w-[100%] sm:text-lg sm:w-[100%]">
                  Elevate Your Digital Presence with Digimax Expertise.
                </h4>
                <p className=" text-sm md:w-full md:text-sm sm:text-sm ml-[-14px] px-3">
                  Ac neque commodo litora nam mattis platea dui molestie aenean
                  integer potenti imperdiet class semper
                </p>
              </div>
              <div className="flex justify-end">
                <div className="bg-dropDownbgColor rounded-[50%] py-[16px] pl-[10px] pr-[16px] w-[60px] h-[60px] flex items-center justify-center border-FFFFF border-[5px] mt-1 mr-1 text-white">
                  <FaArrowRightLong size={20} />
                </div>
              </div>
            </div>

            <div
              className="bg-textColor rounded-xl flex justify-between h-full"
            >
              <div className="text-white flex flex-col gap-5 p-5 sm:mt-2 mt-5">
                <span className="font-bold text-[12px] ">OUR MISSION</span>

                <h4 className="font-bold text-xl lg:w-[100%] sm:text-lg sm:w-[100%]">
                  Unleash Your Potential in the Digital Realm with Digimax.
                </h4>
                <p className=" text-sm md:w-full md:text-sm sm:text-sm ml-[-14px] px-3">
                  Ac neque commodo litora nam mattis platea dui molestie aenean
                  integer potenti imperdiet class semper
                </p>
              </div>
              <div className="flex justify-end">
                <div className="bg-dropDownbgColor rounded-[50%] py-[16px] pl-[10px] pr-[16px] w-[60px] h-[60px] flex items-center justify-center border-FFFFF border-[5px] mt-1 mr-1 text-white">
                  <FaArrowRightLong size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bottom-gradient p-5 mt-7">
        <div className="grid grid-cols-4 text-white gap-5 md:grid-cols-2">
          <div className="flex flex-col items-center border-r md:border-t-0 md:border-r md:border-b md:border-l-0 md:border-solid md:pt-3.5 md:pb-3.5 md:pl-0 md:pr-0 border-FFFFF">
            <CountUp
              end={56}
              duration={5}
              suffix="K+"
              className="font-bold text-3xl sm:text-xl"
            />
            <span className="font-bold text-xs ">PROJECT DONE</span>
          </div>
          <div className="flex flex-col items-center border-r md:border-b md:border-solid md:border-t-0 md:border-r-0 md:border-l-0 md:pt-3.5 md:pb-3.5 md:pl-0 md:pr-0 ml-[-19px] border-FFFFF">
            <CountUp
              end={38}
              duration={5}
              suffix="K+"
              className="font-bold text-3xl sm:text-xl"
            />
            <span className="font-bold text-xs ">HAPPY CLIENT</span>
          </div>
          <div className="flex flex-col items-center border-r md:border-r md:border-solid md:border-t-0 md:border-b-0 md:border-l-0 md:pt-3.5 md:pb-3.5 md:pl-0 md:pr-0 md:mt-[-20px] border-FFFFF">
            <CountUp
              end={4.7}
              duration={5}
              suffix="K+"
              className="font-bold text-3xl sm:text-xl"
            />
            <span className="font-bold text-xs ">CLIENT RATINGS</span>
          </div>
          <div className="flex flex-col items-center border-rmd:border-0 md:border-solid md:inherit md:ml-[-19px] border-FFFFF">
            <CountUp
              end={35}
              duration={5}
              suffix="K+"
              className="font-bold text-3xl sm:text-xl"
            />
            <span className="font-bold text-xs ">AWARD WINNING</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ours;
