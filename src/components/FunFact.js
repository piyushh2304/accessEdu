import { useMemo } from "react";

const FunFact = ({ trophy, prop, completedCourses, propBackgroundColor }) => {
  const funFact5Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="flex-1 bg-success-100 flex flex-row items-center justify-start p-6 box-border gap-[24px] min-w-[240px] max-w-[312px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFact5Style}
    >
      <button className="cursor-pointer [border:none] p-3.5 bg-gray-white h-[60px] flex flex-row items-start justify-start box-border">
        <img className="h-8 w-8 relative" alt="" src={trophy} />
      </button>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <div className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
          {prop}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {completedCourses}
        </div>
      </div>
    </div>
  );
};

export default FunFact;
