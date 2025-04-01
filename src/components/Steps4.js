import { useMemo } from "react";

const Steps4 = ({ stack, label, propMinWidth }) => {
  const label2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 bg-gray-white flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px] text-left text-base text-gray-600 font-body-medium-400">
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <img className="h-6 w-6 relative min-h-[24px]" alt="" src={stack} />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div
            className="relative leading-[22px] font-medium"
            style={label2Style}
          >
            {label}
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
  );
};

export default Steps4;
