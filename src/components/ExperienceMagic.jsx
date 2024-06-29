import { useEffect, useState } from "react";
import shottwoyoung from "../assets/img/shot-of-two-young.jpg";


// eslint-disable-next-line react/prop-types
const ProgressBar = ({ label, initialPercentage, targetPercentage }) => {
  const [progress, setProgress] = useState(initialPercentage);

  const getSpeed = (target) => {
    if (target === 87) return 30;
    if (target === 91) return 40;
    if (target === 74) return 50;
    if (target === 83) return 45;
    return 50;
  };

  useEffect(() => {
    const speed = getSpeed(targetPercentage);
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < targetPercentage ? prevProgress + 1 : targetPercentage
      );
    }, speed);
    return () => clearInterval(interval);
  }, [targetPercentage]);

  return (
    <div className="progress-bar-container w-full">
      <div className="flex items-center justify-between">
        <h6 className="text-sm font-light">{label}</h6>
      </div>
      <p
        className="flex justify-end mt-[-15px] text-sm font-semibold mb-[4px]"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </p>
      <div className="w-full overflow-hidden bg-FFFFF rounded-xl h-[10px]">
        <div
          className="h-[10px] bg-bottom-gradient rounded-xl progressBars_d"
          style={{
            width: `${progress}%`,
            transitionProperty: "width",
            transitionDuration: "0.2s",
          }}
        ></div>
      </div>
    </div>
  );
};

const ExperienceMagic = () => {
  return (
    <div
      className="grid grid-cols-2 gap-6 md:grid-cols-1 text-white bg-sectionColor"
    >
      <div className="p-5 flex flex-col gap-4">
        <h2 className="font-bold text-4xl md:text-2xl">
          Experience the magic of Interiokit. Contact us to discuss your
          project.
        </h2>
        <p className="text-cardcolor hover:text-white transition-all duration-500 text-sm">
          Maecenas massa inceptos placerat ultricies ridiculus vulputate
          torquent curae. Tortor cubilia risus nam cursus sit dui. Facilisi
          vivamus fermentum commodo nascetur orci morbi quisque ipsum suscipit
          vel.
        </p>
        <div className="progress-bar-container w-full flex flex-col gap-5">
          <ProgressBar
            label="Design & Branding"
            initialPercentage={0}
            targetPercentage={87}
          />
          <ProgressBar
            label="Web & App Developer
"
            initialPercentage={0}
            targetPercentage={91}
          />
          <ProgressBar
            label="Digital Marketing
"
            initialPercentage={0}
            targetPercentage={74}
          />
          <ProgressBar
            label="Social Media Manegement
"
            initialPercentage={0}
            targetPercentage={83}
          />
        </div>
      </div>
      <div>
        <img
          src={shottwoyoung}
          className="w-full h-full object-cover object-center opacity-70"
          alt=""
        />
      </div>
    </div>
  );
};

export default ExperienceMagic;
