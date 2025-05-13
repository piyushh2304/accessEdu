import { useMemo } from "react";

const FrameComponent11 = ({
  courseContentsName,
  lectures,
  h37m,
  propMarginTop,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const subHeadingStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const courseContentsNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const lecturesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const h37mStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="w-[673px] flex flex-col items-start justify-start text-left text-base text-gray-900 font-body-medium-400">
      <div className="w-[604px] h-px relative box-border max-w-full border-t-[1px] border-solid border-gray-100" />
      <div
        className="self-stretch flex flex-row items-center justify-between p-5 gap-[20px] mt-[-1px]"
        style={subHeadingStyle}
      >
        <div className="h-[22px] flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-5 w-5 relative"
            alt=""
            src="/iconlylightarrow--down-2-1.svg"
          />
          <div
            className="relative leading-[22px]"
            style={courseContentsNameStyle}
          >
            {courseContentsName}
          </div>
        </div>
        <div className="h-[22px] flex flex-row items-start justify-start gap-[16px] text-sm text-gray-700">
          <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/playcircle1.svg" />
            <div
              className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[73px]"
              style={lecturesStyle}
            >
              {lectures}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/clock1.svg" />
            <div
              className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[54px]"
              style={h37mStyle}
            >
              {h37m}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
