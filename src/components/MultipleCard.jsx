import d_illustration from "../assets/img/3d-illustration-.jpg";
import creative from "../assets/img/creative-photo-.jpg";
import essential_beauty from "../assets/img/essential-beauty.jpg";
import laptop_mockup from "../assets/img/laptop-mockup-.jpg";
import laptop_screen from "../assets/img/laptop-screen-jpg.jpg";
import man_white from "../assets/img/man-in-white-.jpg";

const cards = [
  {
    id: 1,
    heading: "DIGITAL BRANDING",
    smallHeading: "Loka Perfume & Co",
    image: essential_beauty,
    smallName: "Client",
    smallTitle: "Brian Imanuel",
    smallName2: "Date",
    smallTitle2: "15 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Jakarta",
    smallName4: "Budget",
    smallTitle4: "$10,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
  {
    id: 2,
    heading: "DIGITAL MARKETING",
    smallHeading: "Compass Shoes",
    image: man_white,
    smallName: "Client",
    smallTitle: "Sophie Lewis",
    smallName2: "Date",
    smallTitle2: "18 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Bandung",
    smallName4: "Budget",
    smallTitle4: "$8,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
  {
    id: 3,
    heading: "APP DEVELOPMENT",
    smallHeading: "Digital Dynamics",
    image: laptop_mockup,
    smallName: "Client",
    smallTitle: "Brian Imanuel",
    smallName2: "Date",
    smallTitle2: "15 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Jakarta",
    smallName4: "Budget",
    smallTitle4: "$10,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
  {
    id: 4,
    heading: "SEO",
    smallHeading: "Fresh Bites Catering",
    image: laptop_screen,
    smallName: "Client",
    smallTitle: "Brian Imanuel",
    smallName2: "Date",
    smallTitle2: "15 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Jakarta",
    smallName4: "Budget",
    smallTitle4: "$10,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
  {
    id: 5,
    heading: "GRAPHIC DESIGN",
    smallHeading: "Harmony Spa & Wellness.",
    image: creative,
    smallName: "Client",
    smallTitle: "Brian Imanuel",
    smallName2: "Date",
    smallTitle2: "15 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Jakarta",
    smallName4: "Budget",
    smallTitle4: "$10,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
  {
    id: 6,
    heading: "DIGITAL BRANDING",
    smallHeading: "Loka Perfume & Co",
    image: d_illustration,
    smallName: "Client",
    smallTitle: "Brian Imanuel",
    smallName2: "Date",
    smallTitle2: "15 Jan 2024",
    smallName3: "Location",
    smallTitle3: "Jakarta",
    smallName4: "Budget",
    smallTitle4: "$10,000",
    Paragraph:
      "Penatibus himenaeos montes volutpat feugiat felis nisi auctor quis urna sed eleifend consequat quam curae facilisi ultrices ultricies pretium lobortis platea lorem dictum eros class",
  },
];

const MultipleCard = () => {
  return (
    <>
      <div className=" grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {cards.map((card) => (
          <div key={card.id} className="relative border border-FFFFF rounded-xl hover:border-borderFirst_Color transition duration-1000">
            <div className="absolute z-10 bg-radial-custom w-full top-0 h-[100px] rounded-tr-xl rounded-tl-xl p-5">
              <span className="font-semibold text-[14px] text-textColor lg:text-sm">
                {card.heading}
              </span>
              <h4 className="text-white text-2xl font-medium lg:text-lg">
                {card.smallHeading}
              </h4>
            </div>
            <img
              src={card.image}
              alt="shot"
              className="w-full  h-[550px] object-cover object-center opacity-50 brightness-100 contrast-100 saturate-0 blur-0 filter-hue-rotate-0 hover:opacity-100 transition duration-1000 rounded-xl"
              loading="lazy"
            />

            <div>
              <div className="overlay absolute bottom-0 border-t border-FFFFF bg-rgbColor w-full p-5 right-0 left-0 overflow-hidden h-[32%]  hover:h-[72%] rounded-bl-xl rounded-br-xl">
                <div className="grid grid-cols-2">
                  <div>
                    <span className="text-sm font-medium text-textColor">
                      {card.smallName}
                    </span>
                    <p className="text-[16px] font-semibold text-white ">
                      {card.smallTitle}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-textColor">
                      {card.smallName2}
                    </span>
                    <p className="text-[16px] font-semibold text-white ">
                      {card.smallTitle2}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 mt-5">
                  <div>
                    <span className="text-sm font-medium text-textColor">
                      {card.smallName3}
                    </span>
                    <p className="text-[16px] font-semibold text-white ">
                      {card.smallTitle3}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-textColor">
                      {card.smallName4}
                    </span>
                    <p className="text-[16px] font-semibold text-white ">
                      {card.smallTitle4}
                    </p>
                  </div>
                </div>
                <div className="border-FFFFF border-t text-white mt-6">
                  <p className="mt-3 text-[15px] text-cardcolor">
                    {card.Paragraph}
                  </p>
                  <button type="button" className="btn-nav mt-4 sm:block">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleCard;
