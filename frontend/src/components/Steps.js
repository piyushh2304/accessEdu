import { useMemo } from "react";

const Steps = ({ propDisplay }) => {
  const label5Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <nav className="m-0 self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0] flex flex-row flex-wrap items-start justify-center gap-[24px] whitespace-nowrap z-[1] text-left text-base text-gray-600 font-body-medium-400">
      <div className="flex-1 bg-gray-white flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px]">
        <div className="w-[166px] flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/stack-1.svg"
          />
          <input
            className="w-[calc(100%_-_48px)] [border:none] [outline:none] bg-[transparent] h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-body-medium-400 font-medium text-base text-gray-600 min-w-[80px]"
            placeholder="Basic Information"
            type="text"
          />
        </div>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/checks.svg"
        />
      </div>
      <div className="flex-1 bg-gray-white flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/clipboardtext.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative leading-[22px] font-medium"
              style={label5Style}
            >
              Advance Information
            </div>
          </div>
        </div>
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src="/checks.svg"
        />
      </div>
      <div className="flex-1 bg-gray-white shadow-[0px_-2px_0px_#ff6636_inset] flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px] text-gray-900">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/monitorplay.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[22px] font-medium inline-block min-w-[84px]">
              Curriculum
            </div>
          </div>
        </div>
        <div className="w-[25px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-xs text-success-500">
          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[25px]">
            7/12
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-white flex flex-row items-start justify-start p-5 box-border min-w-[215px] max-w-[312px]">
        <div className="w-[148px] flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/playcircle.svg"
          />
          <input
            className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-body-medium-400 font-medium text-base text-gray-600 min-w-[70px]"
            placeholder="Publish Course"
            type="text"
          />
        </div>
      </div>
    </nav>
  );
};

export default Steps;
