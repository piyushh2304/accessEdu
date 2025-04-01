import { useMemo } from "react";
import Property1Development from "./Property1Development";

const Course = ({
  courseImages,
  design,
  beginnerToProInExcelFinan,
  messageBroker,
  k,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propMinWidth1,
}) => {
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

  const k4Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch w-[312px] bg-gray-white box-border shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] text-left text-lg text-primary-500 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={courseImages}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
          <Property1Development
            developments="Education"
            property1DevelopmentBackgroundColor="#ffeee8"
            property1DevelopmentWidth="unset"
            developmentsColor="#993d20"
            developmentsMinWidth="59px"
            developmentsHeight="unset"
            developmentsFlex="unset"
          />
          <div className="relative leading-[24px] font-medium inline-block min-w-[34px] whitespace-nowrap">
            $57
          </div>
        </div>
        <div className="w-[276px] relative text-base leading-[22px] font-medium text-gray-900 inline-block">
          {beginnerToProInExcelFinan}
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            alt=""
            src="/star-10.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
            {messageBroker}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img className="h-5 w-5 relative" alt="" src="/user.svg" />
          <div className="flex flex-row items-center justify-center">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[66px]"
              style={k4Style}
            >
              {k}
            </div>
            <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
              {" "}
              students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
