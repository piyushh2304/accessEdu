import { useMemo } from "react";

const SizeMediumPositionsPrimary = ({
  button,
  sizeMediumPositionsPrimarBackgroundColor,
  sizeMediumPositionsPrimarWidth,
  sizeMediumPositionsPrimarAlignSelf,
  buttonColor,
  buttonTextAlign,
  buttonLineHeight,
  buttonMinWidth,
}) => {
  const sizeMediumPositionsPrimaryStyle = useMemo(() => {
    return {
      backgroundColor: sizeMediumPositionsPrimarBackgroundColor,
      width: sizeMediumPositionsPrimarWidth,
      alignSelf: sizeMediumPositionsPrimarAlignSelf,
    };
  }, [
    sizeMediumPositionsPrimarBackgroundColor,
    sizeMediumPositionsPrimarWidth,
    sizeMediumPositionsPrimarAlignSelf,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
      textAlign: buttonTextAlign,
      lineHeight: buttonLineHeight,
      minWidth: buttonMinWidth,
    };
  }, [buttonColor, buttonTextAlign, buttonLineHeight, buttonMinWidth]);

  return (
    <div
      className="bg-primary-500 flex flex-row items-center justify-center py-0 px-6 text-left text-base text-gray-white font-body-medium-400"
      style={sizeMediumPositionsPrimaryStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold"
        style={buttonStyle}
      >
        {button}
      </div>
    </div>
  );
};

export default SizeMediumPositionsPrimary;
