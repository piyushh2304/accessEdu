import { useMemo } from "react";

const FunFact2 = ({
  chatCircleDots,
  proximitySensor,
  courseInstructors,
  propAlignSelf,
  propWidth,
  propBackgroundColor,
}) => {
  const funFact2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="self-stretch h-[108px] bg-gray-white flex flex-row items-center justify-start p-6 box-border gap-[24px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFact2Style}
    >
      <div
        className="self-stretch bg-secondary-100 flex flex-row items-start justify-start p-3.5"
        style={frameDiv1Style}
      >
        <img className="h-8 w-8 relative" alt="" src={chatCircleDots} />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <div className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
          {proximitySensor}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {courseInstructors}
        </div>
      </div>
    </div>
  );
};

export default FunFact2;
