import { useMemo } from "react";

const Select = ({ propTop, propLeft }) => {
  const select1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[352px] left-[992px] bg-gray-white shadow-[0px_6px_16px_rgba(0,_0,_0,_0.06)] box-border w-[180px] overflow-hidden flex flex-row items-start justify-start py-3 px-0 z-[3] text-left text-sm text-gray-700 font-body-medium-400 border-[1px] border-solid border-gray-100"
      style={select1Style}
    >
      <div className="flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
          <div className="w-[58px] relative tracking-[-0.01em] leading-[22px] inline-block box-border pr-5">
            Vidoe
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
          <div className="w-[89px] relative tracking-[-0.01em] leading-[22px] inline-block box-border pr-5">
            Attach File
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
          <div className="w-[78px] relative tracking-[-0.01em] leading-[22px] inline-block box-border pr-5">
            Captions
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
          <div className="w-[94px] relative tracking-[-0.01em] leading-[22px] inline-block box-border pr-5">
            Description
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
          <div className="w-28 relative tracking-[-0.01em] leading-[22px] inline-block box-border pr-5">
            Lecture Notes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
