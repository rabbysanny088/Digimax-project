
const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-white mt-[150px] relative">
        <div className="color-img hidden sm:block"></div>

        <span className="font-semibold border border-textColor rounded-full py-[3px] px-5 text-xs ">
          WELCOME TO DIGIMAX
        </span>

        <h2 className="text-center font-bold text-5xl w-[40%] lg:text-4xl lg:w-[50%] md:text-4xl md:w-[50%] sm:text-[25px] sm:w-full">
          Your Path to Digital Excellence
        </h2>

        <p className="text-center text-cardcolor hover:text-white transition-all duration-500 text-lg sm:w-full px-3 sm:text-sm">
          At ligula justo morbi sagittis fusce. Accumsan magna habitant non
          habitasse litora etiam torquent.
          <br /> Placerat lobortis volutpat efficitur elementum sagittis leo
          amet euismod tristique.
        </p>
        <div className="flex gap-5 items-center justify-center px-2 sm:flex-col w-full font-bold">
          <button type="button" className="btn-nav sm:block sm:w-full">
            GET STARTED
          </button>
          <button
            type="button"
            className="border border-white btn-hero hover:btn-nav hover:border-transparent
             sm:block sm:w-full"
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
