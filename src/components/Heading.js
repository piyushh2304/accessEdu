import { useMemo } from "react";

const Heading = ({ category, propMinWidth }) => {
  const category1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch bg-gray-white flex flex-row items-start justify-between py-5 pr-[21px] pl-[19px] gap-[20px] text-left text-lg text-gray-900 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <div
          className="relative leading-[100%] uppercase font-medium inline-block min-w-[98px]"
          style={category1Style}
        >
          {category}
        </div>
      </div>
      <img
        className="h-6 w-6 relative min-h-[24px]"
        alt=""
        src="/chevrondown-4.svg"
      />
    </div>
  );
};

export default Heading;
