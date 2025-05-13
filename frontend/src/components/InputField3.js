import { useMemo } from "react";

const InputField3 = ({ labal, labelPlaceholder, propMinWidth, propWidth, onChange, value, name, type = "text" }) => {
  const labal3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const labelStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[205px] text-left text-sm text-gray-900 font-body-medium-400">
      <div
        className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[64px]"
        style={labal3Style}
      >
        {labal}
      </div>
      <div className="self-stretch h-12 bg-gray-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-3 pr-[19px] pl-[17px] gap-[20px] border-[1px] border-solid border-gray-100">
        <input
          className="w-[129px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
          placeholder={labelPlaceholder}
          type={type}
          style={labelStyle}
          onChange={onChange}
          value={value}
          name={name}
        />
        <img className="h-6 w-6 relative min-h-[24px]" alt="" src="/eye.svg" />
      </div>
    </div>
  );
};

export default InputField3;
