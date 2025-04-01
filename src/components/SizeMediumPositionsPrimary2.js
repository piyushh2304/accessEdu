import { useMemo } from "react";

const SizeMediumPositionsPrimary2 = ({
  play,
  button,
  showPlayIcon,
  sizeMediumPositionsPrimarWidth,
  sizeMediumPositionsPrimarAlignSelf,
  sizeMediumPositionsPrimarBackgroundColor,
  sizeMediumPositionsPrimarGap,
  sizeMediumPositionsPrimarBorder,
  buttonLetterSpacing,
  buttonLineHeight,
  buttonColor,
  buttonMinWidth,
}) => {
  const sizeMediumPositionsPrimary2Style = useMemo(() => {
    return {
      width: sizeMediumPositionsPrimarWidth,
      alignSelf: sizeMediumPositionsPrimarAlignSelf,
      backgroundColor: sizeMediumPositionsPrimarBackgroundColor,
      gap: sizeMediumPositionsPrimarGap,
      border: sizeMediumPositionsPrimarBorder,
    };
  }, [
    sizeMediumPositionsPrimarWidth,
    sizeMediumPositionsPrimarAlignSelf,
    sizeMediumPositionsPrimarBackgroundColor,
    sizeMediumPositionsPrimarGap,
    sizeMediumPositionsPrimarBorder,
  ]);

  const button4Style = useMemo(() => {
    return {
      letterSpacing: buttonLetterSpacing,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      minWidth: buttonMinWidth,
    };
  }, [buttonLetterSpacing, buttonLineHeight, buttonColor, buttonMinWidth]);

  return (
    <div
      className="bg-primary-500 flex flex-row items-center justify-center py-0 px-6 gap-[12px] text-left text-base text-gray-white font-body-medium-400"
      style={sizeMediumPositionsPrimary2Style}
    >
      {showPlayIcon && <img className="w-6 relative h-6" alt="" src={play} />}
      <div
        className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold"
        style={button4Style}
      >
        {button}
      </div>
    </div>
  );
};

export default SizeMediumPositionsPrimary2;
