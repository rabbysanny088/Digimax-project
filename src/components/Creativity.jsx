import MultipleCard from "./MultipleCard";


const Creativity = () => {
  return (
    <>
      <div className="text-white text-center">
        <span className="font-bold text-[12px] text-textColor mb-4">
          FEATURED PROJECT
        </span>
        <h4 className="font-bold text-4xl lg:text-2xl sm:text-lg ">
          Unleashing the Power of Innovation and Creativity.
        </h4>
      </div>

      <div
        className="mt-8"
      >
        <MultipleCard />
      </div>
    </>
  );
};

export default Creativity;
