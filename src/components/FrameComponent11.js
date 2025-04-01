import { useMemo } from "react";

const FrameComponent20 = ({ labal, inputFieldPlaceholder, propMinWidth }) => {
  const labal7Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-gray-900 font-body-medium-400">
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div
          className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[39px]"
          style={labal7Style}
        >
          {labal}
        </div>
        <textarea
          className="bg-gray-white h-40 w-auto [outline:none] self-stretch box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] px-[18px] font-body-medium-400 text-base text-gray-500 border-[1px] border-solid border-gray-100"
          placeholder={inputFieldPlaceholder}
          rows={8}
          cols={30}
        />
      </div>
    </div>
  );
};

export default FrameComponent20;
