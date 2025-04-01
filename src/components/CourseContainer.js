import { useMemo } from "react";
import Property1Design from "./Property1Design";

const CourseContainer = ({
  imageDimensionsId,
  categoryLabel,
  priceText,
  courseTitle,
  ratingText,
  numericValue,
  studentIds,
  propFlex,
  propHeight,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propMinWidth1,
  propTextDecoration,
  propHeight1,
  propAlignSelf,
  propHeight2,
  propPosition,
  propBorderTop,
  propMargin,
  propAlignSelf1,
  propDisplay,
  propFlexDirection,
  propPadding,
  propGap,
  propDisplay1,
  propFlexDirection1,
  propGap1,
  propAlignSelf2,
  propHeight3,
  propPosition1,
  propBorderTop1,
  propHeight4,
  propWidth,
  propPosition2,
  propMinHeight,
  propAlignSelf3,
  propDisplay2,
  propFlexDirection2,
  propPadding1,
  propGap2,
  propPosition3,
  propFontSize,
  propLetterSpacing,
  propLineHeight,
  propFontWeight,
  propFontFamily,
  propColor1,
  propTextAlign,
  propDisplay3,
  propMinWidth2,
  propFlexDirection3,
  propGap3,
  propDisplay4,
  propFlexDirection4,
  propGap4,
  propHeight5,
  propWidth1,
  propPosition4,
  propMinHeight1,
  propHeight6,
  propWidth2,
  propFontSize1,
  propLetterSpacing1,
  propLineHeight1,
  propFontWeight1,
  propFontFamily1,
  propColor2,
  propTextAlign1,
  propDisplay5,
  propMinWidth3,
  propGap5,
  propMinWidth4,
  propFontSize2,
  propLetterSpacing2,
  propLineHeight2,
  propFontWeight2,
  propFontFamily2,
  propColor3,
  propTextAlign2,
  propDisplay6,
  propHeight7,
  propWidth3,
  propPosition5,
  propFontSize3,
  propLetterSpacing3,
  propLineHeight3,
  propFontFamily3,
  propColor4,
  propTextAlign3,
  propDisplay7,
  propMinWidth5,
  propFlexDirection5,
}) => {
  const course1Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  const property1DesignStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const designStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const div1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const beginnerToProStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      height: propHeight1,
    };
  }, [propTextDecoration, propHeight1]);

  const devider1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight2,
      position: propPosition,
      borderTop: propBorderTop,
      margin: propMargin,
    };
  }, [propAlignSelf, propHeight2, propPosition, propBorderTop, propMargin]);

  const ratingStudentsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      display: propDisplay,
      flexDirection: propFlexDirection,
      padding: propPadding,
      gap: propGap,
    };
  }, [propAlignSelf1, propDisplay, propFlexDirection, propPadding, propGap]);

  const ratingStyle = useMemo(() => {
    return {
      display: propDisplay1,
      flexDirection: propFlexDirection1,
      gap: propGap1,
      alignSelf: propAlignSelf2,
      height: propHeight3,
      position: propPosition1,
      borderTop: propBorderTop1,
    };
  }, [
    propDisplay1,
    propFlexDirection1,
    propGap1,
    propAlignSelf2,
    propHeight3,
    propPosition1,
    propBorderTop1,
  ]);

  const starIconStyle = useMemo(() => {
    return {
      height: propHeight4,
      width: propWidth,
      position: propPosition2,
      minHeight: propMinHeight,
      alignSelf: propAlignSelf3,
      display: propDisplay2,
      flexDirection: propFlexDirection2,
      padding: propPadding1,
      gap: propGap2,
    };
  }, [
    propHeight4,
    propWidth,
    propPosition2,
    propMinHeight,
    propAlignSelf3,
    propDisplay2,
    propFlexDirection2,
    propPadding1,
    propGap2,
  ]);

  const div2Style = useMemo(() => {
    return {
      position: propPosition3,
      fontSize: propFontSize,
      letterSpacing: propLetterSpacing,
      lineHeight: propLineHeight,
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
      color: propColor1,
      textAlign: propTextAlign,
      display: propDisplay3,
      minWidth: propMinWidth2,
      flexDirection: propFlexDirection3,
      gap: propGap3,
    };
  }, [
    propPosition3,
    propFontSize,
    propLetterSpacing,
    propLineHeight,
    propFontWeight,
    propFontFamily,
    propColor1,
    propTextAlign,
    propDisplay3,
    propMinWidth2,
    propFlexDirection3,
    propGap3,
  ]);

  const studentsEnrolledStyle = useMemo(() => {
    return {
      display: propDisplay4,
      flexDirection: propFlexDirection4,
      gap: propGap4,
      height: propHeight5,
      width: propWidth1,
      position: propPosition4,
      minHeight: propMinHeight1,
    };
  }, [
    propDisplay4,
    propFlexDirection4,
    propGap4,
    propHeight5,
    propWidth1,
    propPosition4,
    propMinHeight1,
  ]);

  const userIconStyle = useMemo(() => {
    return {
      height: propHeight6,
      width: propWidth2,
      fontSize: propFontSize1,
      letterSpacing: propLetterSpacing1,
      lineHeight: propLineHeight1,
      fontWeight: propFontWeight1,
      fontFamily: propFontFamily1,
      color: propColor2,
      textAlign: propTextAlign1,
      display: propDisplay5,
      minWidth: propMinWidth3,
    };
  }, [
    propHeight6,
    propWidth2,
    propFontSize1,
    propLetterSpacing1,
    propLineHeight1,
    propFontWeight1,
    propFontFamily1,
    propColor2,
    propTextAlign1,
    propDisplay5,
    propMinWidth3,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap5,
    };
  }, [propGap5]);

  const k1Style = useMemo(() => {
    return {
      minWidth: propMinWidth4,
      fontSize: propFontSize2,
      letterSpacing: propLetterSpacing2,
      lineHeight: propLineHeight2,
      fontWeight: propFontWeight2,
      fontFamily: propFontFamily2,
      color: propColor3,
      textAlign: propTextAlign2,
      display: propDisplay6,
      height: propHeight7,
      width: propWidth3,
    };
  }, [
    propMinWidth4,
    propFontSize2,
    propLetterSpacing2,
    propLineHeight2,
    propFontWeight2,
    propFontFamily2,
    propColor3,
    propTextAlign2,
    propDisplay6,
    propHeight7,
    propWidth3,
  ]);

  const studentsStyle = useMemo(() => {
    return {
      position: propPosition5,
      fontSize: propFontSize3,
      letterSpacing: propLetterSpacing3,
      lineHeight: propLineHeight3,
      fontFamily: propFontFamily3,
      color: propColor4,
      textAlign: propTextAlign3,
      display: propDisplay7,
      minWidth: propMinWidth5,
      flexDirection: propFlexDirection5,
    };
  }, [
    propPosition5,
    propFontSize3,
    propLetterSpacing3,
    propLineHeight3,
    propFontFamily3,
    propColor4,
    propTextAlign3,
    propDisplay7,
    propMinWidth5,
    propFlexDirection5,
  ]);

  return (
    <div
      className="self-stretch h-[388px] bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] text-left text-lg text-primary-500 font-body-medium-400 border-[1px] border-solid border-gray-100"
      style={course1Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={imageDimensionsId}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
          <Property1Design
            design="Marketing"
            property1DesignBackgroundColor="#ebebff"
            property1DesignHeight="unset"
            property1DesignBorder="unset"
            designMinWidth="60px"
            designColor="#342f98"
            designAlignSelf="unset"
          />
          <div
            className="relative leading-[24px] font-medium inline-block min-w-[24px] whitespace-nowrap"
            style={div1Style}
          >
            {priceText}
          </div>
        </div>
        <div
          className="w-[276px] relative text-base leading-[22px] font-medium text-gray-900 inline-block"
          style={beginnerToProStyle}
        >
          {courseTitle}
        </div>
      </div>
      <div
        className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100"
        style={devider1Style}
      />
      <div
        className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700"
        style={ratingStudentsStyle}
      >
        <div
          className="flex flex-row items-center justify-start gap-[6px]"
          style={ratingStyle}
        >
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/star-10.svg"
            style={starIconStyle}
          />
          <div
            className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]"
            style={div2Style}
          >
            {ratingText}
          </div>
        </div>
        <div
          className="flex flex-row items-center justify-start gap-[6px]"
          style={studentsEnrolledStyle}
        >
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/user.svg"
            style={userIconStyle}
          />
          <div
            className="flex flex-row items-center justify-center"
            style={frameDiv3Style}
          >
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[66px]"
              style={k1Style}
            >
              {numericValue}
            </div>
            <div
              className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]"
              style={studentsStyle}
            >
              {studentIds}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;
