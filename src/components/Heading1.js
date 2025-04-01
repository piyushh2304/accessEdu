import { useMemo } from "react";

const Heading1 = ({ propHeight }) => {
  const buttons2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-center justify-between p-6 box-border gap-[20px] max-w-full z-[2] text-left text-base text-gray-900 font-body-medium-400 mq450:flex-wrap">
      <div className="flex flex-row items-center justify-start gap-[12px]">
        <div className="h-[22px] flex flex-row items-center justify-center gap-[8px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className="relative leading-[22px] font-medium inline-block min-w-[94px]">
            Sections 01:
          </div>
        </div>
        <div className="relative leading-[24px] inline-block min-w-[104px]">
          Section name
        </div>
      </div>
      <div
        className="h-6 flex flex-row items-start justify-start gap-[16px]"
        style={buttons2Style}
      >
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/plus.svg"
        />
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/pencilline.svg"
        />
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/trash.svg"
        />
      </div>
    </div>
  );
};

export default Heading1;
