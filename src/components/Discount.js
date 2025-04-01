import { useMemo } from "react";

const Discount = ({ labelOff, discountHeight, labelOffAlignSelf }) => {
  const discountStyle = useMemo(() => {
    return {
      height: discountHeight,
    };
  }, [discountHeight]);

  const labelOffStyle = useMemo(() => {
    return {
      alignSelf: labelOffAlignSelf,
    };
  }, [labelOffAlignSelf]);

  return (
    <div
      className="bg-primary-100 flex flex-row items-center justify-center py-2 px-3 text-left text-sm text-primary-500 font-body-medium-400"
      style={discountStyle}
    >
      <div
        className="relative leading-[100%] uppercase font-medium"
        style={labelOffStyle}
      >
        {labelOff}
      </div>
    </div>
  );
};

export default Discount;
