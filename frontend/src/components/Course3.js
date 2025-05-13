import { useMemo } from "react";

const Course3 = ({
  courseImages,
  digitalMarketingMastercla,
  whatYoullNeedToGetStarted,
  propWidth,
}) => {
  const course3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="h-[367px] w-[312px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] text-left text-xs text-gray-600 font-body-medium-400 border-[1px] border-solid border-gray-100"
      style={course3Style}
    >
      <img
        className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={courseImages}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[16px]">
            {digitalMarketingMastercla}
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
            {whatYoullNeedToGetStarted}
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm text-primary-500">
        <div className="flex-1 bg-primary-100 flex flex-row items-start justify-center py-0 px-5 whitespace-nowrap">
          <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
            Watch Lecture
          </div>
        </div>
      </div>
      <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border opacity-[0]">
        <div className="h-0.5 w-[190px] relative bg-success-500" />
      </div>
    </div>
  );
};

export default Course3;
