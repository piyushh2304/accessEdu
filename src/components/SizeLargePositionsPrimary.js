import { useMemo } from "react";

const SizeLargePositionsPrimary = ({
  button,
  sizeLargePositionsPrimaryBackgroundColor,
  sizeLargePositionsPrimaryBorder,
  sizeLargePositionsPrimaryPosition,
  sizeLargePositionsPrimaryTop,
  sizeLargePositionsPrimaryLeft,
  sizeLargePositionsPrimaryWidth,
  sizeLargePositionsPrimaryMarginLeft,
  sizeLargePositionsPrimaryMargin,
  sizeLargePositionsPrimaryRight,
  sizeLargePositionsPrimaryBottom,
  buttonLineHeight,
  buttonMargin,
  buttonMinWidth,
  buttonColor,
  buttonDisplay,
  buttonTextAlign,
}) => {
  const sizeLargePositionsPrimaryStyle = useMemo(() => {
    return {
      backgroundColor: sizeLargePositionsPrimaryBackgroundColor,
      border: sizeLargePositionsPrimaryBorder,
      position: sizeLargePositionsPrimaryPosition,
      top: sizeLargePositionsPrimaryTop,
      left: sizeLargePositionsPrimaryLeft,
      width: sizeLargePositionsPrimaryWidth,
      marginLeft: sizeLargePositionsPrimaryMarginLeft,
      margin: sizeLargePositionsPrimaryMargin,
      right: sizeLargePositionsPrimaryRight,
      bottom: sizeLargePositionsPrimaryBottom,
    };
  }, [
    sizeLargePositionsPrimaryBackgroundColor,
    sizeLargePositionsPrimaryBorder,
    sizeLargePositionsPrimaryPosition,
    sizeLargePositionsPrimaryTop,
    sizeLargePositionsPrimaryLeft,
    sizeLargePositionsPrimaryWidth,
    sizeLargePositionsPrimaryMarginLeft,
    sizeLargePositionsPrimaryMargin,
    sizeLargePositionsPrimaryRight,
    sizeLargePositionsPrimaryBottom,
  ]);

  const button2Style = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
      margin: buttonMargin,
      minWidth: buttonMinWidth,
      color: buttonColor,
      display: buttonDisplay,
      textAlign: buttonTextAlign,
    };
  }, [
    buttonLineHeight,
    buttonMargin,
    buttonMinWidth,
    buttonColor,
    buttonDisplay,
    buttonTextAlign,
  ]);

  return (
    <div
      className="bg-primary-500 flex flex-row items-center justify-center py-0 px-8 text-left text-lg text-gray-white font-body-medium-400"
      style={sizeLargePositionsPrimaryStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[56px] capitalize font-semibold"
        style={button2Style}
      >
        {button}
      </div>
    </div>
  );
};

export default SizeLargePositionsPrimary;
