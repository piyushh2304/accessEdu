import { useMemo } from "react";

const FrameComponent8 = ({ sortBy, select, propMinWidth, propMinWidth1 }) => {
  const sortByStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const selectStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="w-60 flex flex-col items-start justify-start gap-[8px] text-left text-xs text-gray-600 font-body-medium-400">
      <div
        className="relative leading-[16px] inline-block min-w-[45px]"
        style={sortByStyle}
      >
        {sortBy}
      </div>
      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between py-3 pr-4 pl-[18px] gap-[20px] text-base text-gray-700">
        <div
          className="relative leading-[24px] inline-block min-w-[48px]"
          style={selectStyle}
        >
          {select}
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img className="w-4 h-4 relative" alt="" src="/chevrondown-31.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
