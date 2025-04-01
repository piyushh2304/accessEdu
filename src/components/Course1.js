import { useMemo } from "react";
import Property1Development from "./Property1Development";

const Course1 = ({
  courseImages,
  productivity,
  theCompleteFoundationStoc,
  kevinGilbert,
  prop,
  prop1,
  k,
  hour,
  propBoxShadow,
  propBorder,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propColor1,
  propMinWidth1,
  propTextDecoration,
  propMinWidth2,
  propMinWidth3,
}) => {
  const course2Style = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
      border: propBorder,
    };
  }, [propBoxShadow, propBorder]);

  const property1DevelopmentStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const developmentsStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const theCompleteFoundationStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const kevinGilbertStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      textDecoration: propTextDecoration,
    };
  }, [propMinWidth1, propTextDecoration]);

  const div3Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const k3Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div
      className="flex-1 bg-gray-white shadow-[0px_12px_32px_rgba(29,_32,_38,_0.1)] flex flex-row items-start justify-start max-w-full text-left text-sm text-gray-700 font-body-medium-400"
      style={course2Style}
    >
      <img
        className="h-[188px] w-[220px] relative object-cover min-h-[188px]"
        alt=""
        src={courseImages}
      />
      <div className="flex-1 flex flex-col items-start justify-start py-4 px-0 box-border gap-[16.666666666666668px] min-w-[278px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px] max-w-full text-lg text-gray-900">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 gap-[20px] mq450:flex-wrap">
            <Property1Development
              developments="Education"
              property1DevelopmentBackgroundColor="#76abae"
              property1DevelopmentWidth="unset"
              developmentsColor="#1d2026"
              developmentsMinWidth="59px"
              developmentsHeight="unset"
              developmentsFlex="unset"
            />
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[24px] inline-block min-w-[43px]">
                FREE
              </div>
              <div className="relative text-sm [text-decoration:line-through] leading-[24px] text-gray-400 inline-block min-w-[47px] whitespace-nowrap">
                $26.00
              </div>
            </div>
          </div>
          <div
            className="w-[380px] relative text-base leading-[22px] font-medium text-primary-500 inline-block max-w-full"
            style={theCompleteFoundationStyle}
          >
            {theCompleteFoundationStoc}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-5 gap-[20px] mq450:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-7 w-7 relative rounded-[50%] object-cover min-h-[28px]"
              alt=""
              src="/photo@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div
                className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[98px]"
                style={kevinGilbertStyle}
              >
                {kevinGilbert}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-gray-900">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img className="w-5 h-5 relative" alt="" src="/star-10.svg" />
              </div>
              <div
                className="relative tracking-[-0.01em] inline-block min-w-[84px]"
                style={div3Style}
              >
                <span>
                  <span className="leading-[20px] font-medium">{prop}</span>
                  <span className="text-base leading-[150%] font-dm-sans">{` `}</span>
                </span>
                <span className="leading-[22px] text-gray-500">{prop1}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 gap-[20px] mq850:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/user.svg" />
            <div className="flex flex-row items-center justify-center">
              <div
                className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[40px]"
                style={k3Style}
              >
                {k}
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/barchart.svg"
            />
            <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[58px]">
              Beginner
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/clock.svg" />
            <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[42px]">
              {hour}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course1;
