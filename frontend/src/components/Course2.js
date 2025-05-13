import { useMemo } from "react";
import Property1Design from "./Property1Design";

const Course2 = ({
  courseImages,
  developments,
  beginnerToProInExcelFinan,
  propBackgroundColor,
  propColor,
  propMinWidth,
}) => {
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

  return (
    <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[15.666666666666666px] min-w-[276px] max-w-full text-left text-5xl text-primary-500 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <img
        className="self-stretch h-[312px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={courseImages}
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[8px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 gap-[20px] mq450:flex-wrap">
          <Property1Design
            design="Developments"
            property1DesignBackgroundColor="#ebebff"
            property1DesignHeight="unset"
            property1DesignBorder="none"
            designMinWidth="98px"
            designColor="#342f98"
            designAlignSelf="unset"
          />
          <div className="relative tracking-[-0.01em] leading-[32px] font-semibold inline-block min-w-[45px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
            $57
          </div>
        </div>
        <div className="w-96 relative text-lg leading-[24px] font-medium text-gray-900 inline-block max-w-full">
          {beginnerToProInExcelFinan}
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 gap-[20px] text-base text-gray-700 mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/star2.svg"
          />
          <div className="relative leading-[22px] font-medium inline-block min-w-[24px]">
            5.0
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[6px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/user1.svg"
          />
          <div className="flex flex-row items-center justify-center">
            <div className="relative leading-[22px] font-medium inline-block min-w-[54px]">
              265.7K
            </div>
            <div className="relative leading-[24px] text-gray-500 inline-block min-w-[71px]">
              {" "}
              students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course2;
