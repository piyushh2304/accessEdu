import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = ({
  actionButtonText,
  iconName,
  arrowRightIconBackgroundColor,
  propLineHeight,
  propColor,
  propMinWidth,
  propPadding,
}) => {
  const buttonsStyle = useMemo(() => {
    return {
      backgroundColor: arrowRightIconBackgroundColor,
    };
  }, [arrowRightIconBackgroundColor]);

  const button5Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propLineHeight, propColor, propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const navigate = useNavigate();

  const onButtonsClick = useCallback(() => {
    navigate("/04-course-list");
  }, [navigate]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-6 bg-primary-100 flex flex-row items-start justify-start gap-[12px]"
      onClick={onButtonsClick}
      style={buttonsStyle}
    >
      <div
        className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left inline-block min-w-[62px]"
        style={button5Style}
      >
        {actionButtonText}
      </div>
      <div
        className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
        style={frameDiv2Style}
      >
        <img className="w-6 h-6 relative" alt="" src={iconName} />
      </div>
    </button>
  );
};

export default ActionButton;
