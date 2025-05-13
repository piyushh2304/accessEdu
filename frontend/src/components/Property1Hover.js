import { useMemo } from "react";

const Property1Hover = ({
  labal,
  arrowRight,
  property1HoverBorder,
  labalTextAlign,
  labalMinWidth,
}) => {
  const property1HoverStyle = useMemo(() => {
    return {
      border: property1HoverBorder,
    };
  }, [property1HoverBorder]);

  const labal2Style = useMemo(() => {
    return {
      textAlign: labalTextAlign,
      minWidth: labalMinWidth,
    };
  }, [labalTextAlign, labalMinWidth]);

  return (
    <div
      className="bg-gray-900 shadow-[0px_-1.5px_0px_#ff6636_inset] flex flex-row items-center justify-center py-1.5 px-0 gap-[12px] text-left text-sm text-gray-white font-body-medium-400"
      style={property1HoverStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[22px]"
        style={labal2Style}
      >
        {labal}
      </div>
      <img className="w-4 relative h-4" alt="" src={arrowRight} />
    </div>
  );
};

export default Property1Hover;
