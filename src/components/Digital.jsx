import menwomen from "../assets/img/men-women.jpg";

const Digital = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        <div className="border border-responsiveBg p-4 rounded-2xl">
          <div className="absolute left-[2px] w-5 h-5 rounded-full lg:hidden"></div>
          <img
            src={menwomen}
            alt="menwome"
            className="rounded-md img-men md:h-[380px] sm:h-full"
          />
        </div>
        <div className="text-white mt-10 flex flex-col gap-5 p-5 sm:mt-2">
          <span className="font-bold text-[12px] text-textColor">
            WHO WE ARE
          </span>
          <h4 className="font-bold text-2xl w-[64%] lg:w-[100%] sm:text-lg sm:w-[100%]">
            Your Digital Future, Our Expertise: Digimax Delivers Excellence.
          </h4>
          <p className=" text-cardcolor hover:text-white transition-all duration-500 text-sm w-[80%] md:w-full md:text-sm sm:text-sm ml-[-14px] px-3">
            Pede inceptos dui diam felis vehicula rutrum ridiculus at
            consectetur nam et mollis vitae netus duis pellentesque ligula
            aenean taciti eget tincidunt commodo tristique elit
          </p>
          <button type="button" className="flex btn-nav">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Digital;
