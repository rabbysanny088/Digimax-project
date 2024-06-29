import { FaGooglePlusG, FaKeyboard, FaLaptop, FaMobile } from "react-icons/fa6";


const cardFilter = [
  {
    id: 1,
    icons: <FaLaptop size={30} />,
    title: "Free Consultations",
    paragraph:
      "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
    button: "CHAT NOW",
  },
  {
    id: 2,
    icons: <FaMobile size={30} />,
    title: "Discover the product",
    paragraph:
      "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
    button: "LEARN MORE",
  },
  {
    id: 3,
    icons: <FaKeyboard size={30} />,
    title: "Wireframe & Production",
    paragraph:
      "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
    button: "LEARN MORE",
  },
  {
    id: 4,
    icons: <FaGooglePlusG size={30} />,
    title: "Prototype Application",
    paragraph:
      "Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod",
    button: "REPORT",
  },
];

const Unlock = () => {
  return (
    <div className="text-white text-center bg-unlockcolor p-10 w-full h-full">
      <div>
        <span className="font-bold text-[12px] text-textColor">
          HOW IT WORKS
        </span>
        <h4 className="font-bold text-3xl text-center sm:text-xl m-auto mt-2">
          Unlock Astonishing Results with Just 3 Simple Steps!
        </h4>
      </div>

      <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 mt-20 sm:mt-10 lg:gap-12 md:grid-cols-1">
        {cardFilter.map((card) => (
          <div
            key={card.id}
            className=" flex flex-col items-center justify-center border-r border-FFFFF md:border-b md:border-r-0"
          >
            <span className="bg-textColor p-4 rounded-full mb-2">
              {card.icons}
            </span>
            <h6 className="text-xl font-bold mb-1 text-center sm:text-lg">
              {card.title}
            </h6>
            <p className="text-sm sm:text-xs text-cardcolor mb-3 text-center">
              {card.paragraph}
            </p>
            <button type="button" className="btn-nav w-[130px] mb-4">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unlock;
