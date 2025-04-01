import { useMemo } from "react";

const SizeMediumPositionsSeconda = ({ buttonText, buttonMinWidth }) => {
  const button1Style = useMemo(() => {
    return {
      minWidth: buttonMinWidth,
    };
  }, [buttonMinWidth]);

  return (
    <div className="bg-primary-100 flex flex-row items-center justify-center py-0 px-6 text-left text-base text-primary-500 font-body-medium-400">
      <div
        className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold"
        style={button1Style}
      >
        {buttonText}
      </div>
    </div>
  );
};

export default SizeMediumPositionsSeconda;
