import { useMemo } from "react";

const InputField5 = ({ labal, labelPlaceholder, propMinWidth, propWidth }) => {
  const labal5Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const label3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px] text-left text-sm text-gray-900 font-body-medium-400">
      <div
        className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[67px]"
        style={labal5Style}
      >
        {labal}
      </div>
      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
        <input
          className="w-[157px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
          placeholder={labelPlaceholder}
          type="text"
          style={label3Style}
        />
      </div>
    </div>
  );
};

export default InputField5;
