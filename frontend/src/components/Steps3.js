import { useMemo } from "react";

const Steps3 = ({
  newspaperClipping,
  applyToBecomeInstructor,
  sedEtMattisUrnaSedTempusF,
  propBackgroundColor,
  propHeight,
}) => {
  const iconsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      height: propHeight,
    };
  }, [propBackgroundColor, propHeight]);

  return (
    <div className="flex-1 bg-gray-white flex flex-col items-center justify-center p-6 box-border gap-[24px] min-w-[284px] max-w-[312px] text-center text-lg text-gray-900 font-body-medium-400">
      <button
        className="cursor-pointer [border:none] p-5 bg-blueviolet h-20 flex flex-row items-start justify-start box-border"
        style={iconsStyle}
      >
        <img className="h-10 w-10 relative" alt="" src={newspaperClipping} />
      </button>
      <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
        <div className="self-stretch relative leading-[24px] font-medium">
          {applyToBecomeInstructor}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
          {sedEtMattisUrnaSedTempusF}
        </div>
      </div>
    </div>
  );
};

export default Steps3;
