import { useMemo } from "react";

const FunFact3 = ({
  notepad,
  import1,
  completedCourses,
  propHeight,
  propBackgroundColor,
  propAlignSelf,
}) => {
  const funFact1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const composeStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  return (
    <div
      className="self-stretch h-[108px] bg-gray-white flex flex-row items-center justify-start p-6 box-border gap-[24px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFact1Style}
    >
      <button
        className="cursor-pointer [border:none] p-3.5 bg-gray-50 self-stretch flex flex-row items-start justify-start"
        style={composeStyle}
      >
        <img className="h-8 w-8 relative" alt="" src={notepad} />
      </button>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
          {import1}
        </h2>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {completedCourses}
        </div>
      </div>
    </div>
  );
};

export default FunFact3;
