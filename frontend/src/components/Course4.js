import { useMemo } from "react";
import Property1Design from "./Property1Design";

const Course4 = ({
  courseImages,
  beginnerToProInExcelFinan,
  prop,
  k,
  timerController,
  propBoxShadow,
  propMinWidth,
}) => {
  const courseStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  const kStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="h-[446px] bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[15.6px] text-left text-base text-gray-900 font-body-medium-400"
      style={courseStyle}
    >
      <img
        className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={courseImages}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <Property1Design
            design="Developments"
            property1DesignBackgroundColor="#ebebff"
            property1DesignHeight="unset"
            property1DesignBorder="unset"
            designMinWidth="82px"
            designColor="#342f98"
            designAlignSelf="unset"
          />
          <div className="self-stretch relative leading-[22px] font-medium">
            {beginnerToProInExcelFinan}
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-5 w-5 relative min-h-[20px]"
            loading="lazy"
            alt=""
            src="/star3.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[22px]">
            {prop}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/user2.svg"
          />
          <div className="flex flex-row items-center justify-center">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[54px]"
              style={kStyle}
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
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-4 box-border text-lg text-primary-500">
        <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
          <div className="relative leading-[24px] font-semibold inline-block min-w-[63px] whitespace-nowrap">
            {timerController}
          </div>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/dotsthree1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Course4;
