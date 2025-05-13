import { useMemo } from "react";

const FunFact4 = ({
  users,
  sound,
  courseInstructors,
  propAlignSelf,
  propWidth,
  propBackgroundColor,
}) => {
  const funFactStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const animationStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="self-stretch h-[108px] bg-gray-white flex flex-row items-center justify-start p-6 box-border gap-[24px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFactStyle}
    >
      <button
        className="cursor-pointer [border:none] p-3.5 bg-error-100 self-stretch flex flex-row items-start justify-start"
        style={animationStyle}
      >
        <img className="h-8 w-8 relative" alt="" src={users} />
      </button>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <div className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
          {sound}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {courseInstructors}
        </div>
      </div>
    </div>
  );
};

export default FunFact4;
