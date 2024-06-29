import { motion } from "framer-motion";
import { LuPhone } from "react-icons/lu";
import imc_img from "../assets/img/imac_img.png";
import mobile_app from "../assets/img/mobile_app.png";
import rocket from "../assets/img/rockt.png";

const NavigatingDigital = () => {
  return (
    <>
      <div className="text-white">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <h2 className="text-3xl font-bold w-[75%] md:w-auto md:text-2xl sm:text-xl">
            Navigating Digital Horizons with Digimax: Your Trusted Partner.
          </h2>
          <p className="text-cardcolor text-justify sm:text-sm mt-2">
            Inceptos euismod aenean vulputate senectus penatibus letius. Nunc
            neque faucibus egestas molestie cubilia inceptos in facilisi
            venenatis. Accumsan suspendisse nisi class ut torquent nec felis
            senectus feugiat.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-32 lg:grid-cols-2 lg:mt-6 ">
          <motion.div className="col-span-2 bg-unlockcolor rounded-lg h-full">
            <div className="flex justify-between items-center">
              <div className="p-4 flex flex-col gap-4">
                <h5 className="text-2xl text-rounded_color font-normal sm:text-xl">
                  Timely and Transparent Communication
                </h5>
                <p className="text-sm text-cardcolor">
                  Donec massa lacus tortor dis vulputate neque odio venenatis ex
                  ad interdum
                </p>

                <button
                  type="button"
                  className="flex bg-rounded_color rounded-[30px] tracking-widest w-[150px] p-[8px] text-[12px] items-center justify-center   sm:hidden font-bold hover:bg-white transition-all duration-300 hover:text-black"
                >
                  LEARN MORE
                </button>
              </div>
              <div>
                <img
                  src={imc_img}
                  alt=""
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-dropDownbgColor rounded-lg h-full md:col-span-2">
            <div className="pt-[76px] pr-[106px] pb-0 pl-[22px]">
              <h6 className="text-xl text-white font-normal sm:mb-2">
                Boost Traffic & Sales
              </h6>
              <p className="text-sm text-cardcolor sm:mb-4">
                Platea rhoncus semper consectetur letius facilisi nec curabitur
                placerat montes lacinia tincidunt
              </p>
            </div>
            <div className="mt-[-313px] mb-0 mx-0">
              <img
                src={rocket}
                alt=""
                className="w-full h-[400px] object-cover object-center rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div className="bg-unlockcolor flex flex-col justify-center items-center h-full gap-2 p-5 rounded-lg border border-FFFFF s w-full md:col-span-2">
            <span className="text-5xl font-bold sm:text-lg">4.7+</span>
            <span className="text-xl font-semibold sm:text-sm">
              Client Ratings
            </span>
            <div className="flex items-center text-2xl sm:text-xl">
              <i className="bx bxs-star" style={{ color: "#f5ff00" }}></i>
              <i className="bx bxs-star" style={{ color: "#f5ff00" }}></i>
              <i className="bx bxs-star" style={{ color: "#f5ff00" }}></i>
              <i className="bx bxs-star" style={{ color: "#f5ff00" }}></i>
              <i
                className="bx bxs-star-half"
                style={{ color: "#fff600" }}
              ></i>{" "}
            </div>

            <p className="text-center text-sm text-cardcolor font-medium">
              Duis nibh quis aptent tristique nisl aliquam nullam mattis
              pulvinar
            </p>
          </motion.div>

          <motion.div className="bg-responsive-gradient p-5 col-span-2  grid grid-cols-2 gap-3 items-center  rounded-lg lg:col-span-1 md:col-span-2">
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-medium sm:text-xl">
                Responsive and Scalable Solutions
              </h4>
              <p className="text-sm font-medium">
                Donec massa lacus tortor dis vulputate neque odio venenatis ex
                ad interdum
              </p>
              <button
                type="button"
                className="flex bg-black rounded-[30px] tracking-widest w-[150px] p-[8px] text-[12px] items-center justify-center  sm:hidden font-bold  transition-all hover:bg-white hover:text-black"
              >
                LEARN MORE
              </button>
            </div>
            <div className="h-full ">
              <img
                src={mobile_app}
                alt="mobile_app"
                className="h-[300px] object-cover object-bottom mb-[-19px]"
              />
            </div>
          </motion.div>
          <motion.div className="bg-bottom-gradient p-5  rounded-xl flex flex-col  justify-center items-center gap-3  h-full col-span-2 lg:col-span-1 md:col-span-2">
            <div className="text-rounded_color bg-white text-[50px] rounded-full w-[74px] h-[74px] p-1 flex justify-center items-center sm:text-[40px] sm:w-[60px] sm:h-[60px] sm:p-2">
              <LuPhone />
            </div>
            <h4 className="text-2xl font-medium sm:text-xl">Premium Support</h4>
            <span className="text-2xl font-medium sm:text-xl">
              (888) 4000-2234
            </span>
            <p className="font-medium text-[17px] sm:text-sm text-center">
              pLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button
              type="button"
              className="flex bg-black hover:bg-white rounded-[30px] tracking-widest w-[150px] p-[8px] text-[12px] items-center justify-center font-bold transition-all duration-300 hover:text-black"
            >
              CALL NOW!
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NavigatingDigital;
