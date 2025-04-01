import { useMemo } from "react";

const Lecture2 = ({
  propAlignSelf,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propRight,
  propLeft,
}) => {
  const lecture1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [
    propAlignSelf,
    propWidth,
    propMargin,
    propPosition,
    propTop,
    propRight,
    propLeft,
  ]);

  return (
    <div
      className="self-stretch bg-gray-white flex flex-row items-center justify-between py-3 px-5 gap-[20px] z-[2] text-left text-sm text-gray-900 font-body-medium-400 mq750:flex-wrap"
      style={lecture1Style}
    >
      <div className="h-[22px] flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          alt=""
          src="/menu-1.svg"
        />
        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[89px]">
          Lecture name
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[12px] mq450:flex-wrap">
        <button className="cursor-pointer [border:none] py-0 px-4 bg-primary-100 flex flex-row items-center justify-center gap-[8px] hover:bg-mistyrose">
          <div className="relative text-sm leading-[40px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left inline-block min-w-[63px]">
            contents
          </div>
          <img className="h-4 w-4 relative" alt="" src="/chevronup.svg" />
        </button>
        <div className="h-5 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/pencilline-2.svg"
          />
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/trash-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Lecture2;
