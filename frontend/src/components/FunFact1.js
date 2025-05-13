import { useMemo } from "react";

const FunFact1 = ({
  playCircle,
  valueSplitter,
  enrolledCourses,
  propBackgroundColor,
}) => {
  const funFact4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="flex-1 bg-primary-100 flex flex-row items-center justify-start p-6 box-border gap-[24px] min-w-[240px] max-w-[312px] text-left text-5xl text-gray-900 font-body-medium-400"
      style={funFact4Style}
    >
      <div className="h-[60px] bg-gray-white flex flex-row items-start justify-start p-3.5 box-border">
        <img
          className="h-8 w-8 relative"
          loading="lazy"
          alt=""
          src={playCircle}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center gap-[6px]">
        <div className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
          {valueSplitter}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700">
          {enrolledCourses}
        </div>
      </div>
    </div>
  );
};

export default FunFact1;
