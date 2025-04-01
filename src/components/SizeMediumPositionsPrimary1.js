import { useMemo } from "react";

const SizeMediumPositionsPrimary1 = ({
  button,
  arrowRight,
  sizeMediumPositionsPrimarBackgroundColor,
  sizeMediumPositionsPrimarBorder,
  sizeMediumPositionsPrimarBoxShadow,
  buttonColor,
  buttonMinWidth,
  buttonLineHeight,
  buttonDisplay,
}) => {
  const sizeMediumPositionsPrimary1Style = useMemo(() => {
    return {
      backgroundColor: sizeMediumPositionsPrimarBackgroundColor,
      border: sizeMediumPositionsPrimarBorder,
      boxShadow: sizeMediumPositionsPrimarBoxShadow,
    };
  }, [
    sizeMediumPositionsPrimarBackgroundColor,
    sizeMediumPositionsPrimarBorder,
    sizeMediumPositionsPrimarBoxShadow,
  ]);

  const button3Style = useMemo(() => {
    return {
      color: buttonColor,
      minWidth: buttonMinWidth,
      lineHeight: buttonLineHeight,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonMinWidth, buttonLineHeight, buttonDisplay]);

  return (
    <div
      className="bg-primary-500 flex flex-row items-center justify-center py-0 px-6 gap-[12px] text-left text-base text-gray-white font-body-medium-400"
      style={sizeMediumPositionsPrimary1Style}
    >
      <div
        className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold"
        style={button3Style}
      >
        {button}
      </div>
      <img className="w-6 relative h-6" alt="" src={arrowRight} />
    </div>
  );
};

export default SizeMediumPositionsPrimary1;
