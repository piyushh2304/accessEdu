import { useMemo } from "react";
import Property1Development from "./Property1Development";

const Courses11 = ({
  courseImages,
  design,
  functionBuilder,
  completePythonBootcampFro,
  dataflowManager,
  k,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
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

  const functionBuilderStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const k2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className="h-[333px] w-[244px] bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[13.666666666666666px] text-left text-base text-primary-500 font-body-medium-400">
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={courseImages}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
          <Property1Development
            developments="Design"
            property1DevelopmentBackgroundColor="#ffeee8"
            property1DevelopmentWidth="unset"
            developmentsColor="#993d20"
            developmentsMinWidth="38px"
            developmentsHeight="unset"
            developmentsFlex="unset"
          />
          <div
            className="relative leading-[22px] font-semibold inline-block min-w-[21px] whitespace-nowrap"
            style={functionBuilderStyle}
          >
            {functionBuilder}
          </div>
        </div>
        <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
          {completePythonBootcampFro}
        </div>
      </div>
      <div className="self-stretch h-px relative box-border opacity-[0.7] border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img className="w-4 h-4 relative" alt="" src="/star.svg" />
            </div>
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
              {dataflowManager}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[27px]"
              style={k2Style}
            >
              {k}
            </div>
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
            {" "}
            students
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses11;
