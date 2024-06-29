import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import first from "../assets/img/10.jpg";
import second from "../assets/img/13.jpg";
import thired from "../assets/img/3.jpg";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SlickSlider = () => {
  return (
    <div className="text-white text-center mb-10">
      <span className="font-bold text-[12px] text-textColor mb-4">
        TESTIMONIAL
      </span>
      <h4 className="font-bold text-4xl lg:text-2xl sm:text-lg">
        Client Feedback & Reviews.
      </h4>
      <div className="mt-6">
        <Slider {...settings}>
          <div className="slick-slide-wrapper">
            <div
              className="bg-dropDownbgColor border border-FFFFF rounded-xl flex items-center justify-center flex-col text-white gap-5 p-10 cursor-pointer
"
            >
              <img src={first} alt="first" className="rounded-full w-[17%] " />
              <p className="text-center text-cardcolor font-medium">
                Data analysis by Digimax provided invaluable insights. Their
                expertise helped us make informed decisions, leading to
                remarkable business growth.
              </p>
              <cite className="flex flex-col gap-1 text-center">
                <span className="text-white font-bold">Ryan Miller</span>
                <span className="text-textColor font-bold">
                  Fresh Bites Catering
                </span>
              </cite>
            </div>
          </div>
          <div className="slick-slide-wrapper">
            <div className="bg-dropDownbgColor border border-FFFFF rounded-xl flex items-center justify-center flex-col text-white gap-5 p-10">
              <img src={second} alt="first" className="rounded-full w-[17%] " />
              <p className="text-center text-cardcolor font-medium">
                Data analysis by Digimax provided invaluable insights. Their
                expertise helped us make informed decisions, leading to
                remarkable business growth.
              </p>
              <cite className="flex flex-col gap-1 text-center">
                <span className="text-white font-bold">Michael Chen</span>
                <span className="text-textColor font-bold">
                  Bright Electronics{" "}
                </span>
              </cite>
            </div>
          </div>
          <div className="slick-slide-wrapper">
            <div className="bg-dropDownbgColor border border-FFFFF rounded-xl flex items-center justify-center flex-col text-white gap-5 p-10">
              <img src={thired} alt="first" className="rounded-full w-[17%] " />
              <p className="text-center text-cardcolor font-medium">
                Data analysis by Digimax provided invaluable insights. Their
                expertise helped us make informed decisions, leading to
                remarkable business growth.
              </p>
              <cite className="flex flex-col gap-1 text-center">
                <span className="text-white font-bold">Sarah Thompson</span>
                <span className="text-textColor font-bold">
                  Thompson &amp; Co.
                </span>
              </cite>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
