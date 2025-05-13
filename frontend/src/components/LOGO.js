import { useMemo } from "react";

const LOGO = ({
  graduationCap,
  eTutor,
  graduationCapIconWidth,
  graduationCapIconHeight,
  graduationCapIconMinHeight,
  eTutorFontSize,
  eTutorColor,
  eTutorTextAlign,
  eTutorLineHeight,
  eTutorMargin,
  eTutorMinWidth,
}) => {
  const graduationCapIconStyle = useMemo(() => {
    return {
      width: graduationCapIconWidth,
      height: graduationCapIconHeight,
      minHeight: graduationCapIconMinHeight,
    };
  }, [
    graduationCapIconWidth,
    graduationCapIconHeight,
    graduationCapIconMinHeight,
  ]);

  const eTutorStyle = useMemo(() => {
    return {
      fontSize: eTutorFontSize,
      color: eTutorColor,
      textAlign: eTutorTextAlign,
      lineHeight: eTutorLineHeight,
      margin: eTutorMargin,
      minWidth: eTutorMinWidth,
    };
  }, [
    eTutorFontSize,
    eTutorColor,
    eTutorTextAlign,
    eTutorLineHeight,
    eTutorMargin,
    eTutorMinWidth,
  ]);

  return (
    <div className="flex flex-row items-start justify-start gap-[8px] text-left text-13xl text-gray-900 font-body-medium-400">
      <img
        className="w-10 relative h-10"
        alt=""
        src={graduationCap}
        style={graduationCapIconStyle}
      />
      <div
        className="relative tracking-[-0.03em] leading-[124%] font-semibold"
        style={eTutorStyle}
      >
        {eTutor}
      </div>
    </div>
  );
};

export default LOGO;
