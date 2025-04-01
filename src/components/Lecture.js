import { useMemo } from "react";

const Lecture = ({ propTop, propLeft }) => {
  const lecture3Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[288px] left-[64px] bg-gray-white w-[1192px] flex flex-row items-center justify-between py-3 px-5 box-border gap-[20px] max-w-full z-[2] text-left text-sm text-gray-900 font-body-medium-400 mq450:flex-wrap"
      style={lecture3Style}
    >
      <div className="h-[22px] flex flex-row items-center justify-start gap-[8px]">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/menu-1.svg"
        />
        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[89px]">
          Lecture name
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[12px]">
        <button className="cursor-pointer [border:none] py-0 px-4 bg-primary-100 flex flex-row items-center justify-center gap-[8px] hover:bg-mistyrose">
          <div className="relative text-sm leading-[40px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left inline-block min-w-[63px]">
            contents
          </div>
          <img className="h-4 w-4 relative" alt="" src="/chevronup.svg" />
        </button>
        <div className="h-5 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
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

export default Lecture;
