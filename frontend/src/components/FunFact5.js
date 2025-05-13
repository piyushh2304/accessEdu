import { useMemo } from "react";

const FunFact5 = ({
  notepad,
  prop,
  enrolledCourses,
  propHeight,
  propBackgroundColor,
  propAlignSelf,
}) => {
  const funFact3Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  return (
    <div
      className="h-[108px] w-[312px] bg-gray-white flex flex-row items-center justify-start p-6 box-border gap-[24px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFact3Style}
    >
      <button
        className="cursor-pointer [border:none] p-3.5 bg-success-100 self-stretch flex flex-row items-start justify-start"
        style={frameButtonStyle}
      >
        <img className="h-8 w-8 relative" alt="" src={notepad} />
      </button>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[32px] font-semibold mq450:text-lgi mq450:leading-[26px]">
          {prop}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {enrolledCourses}
        </div>
      </div>
    </div>
  );
};

export default FunFact5;
