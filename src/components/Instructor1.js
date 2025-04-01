import { useMemo } from "react";

const Instructor1 = ({
  image,
  instructorName,
  headline,
  dataSplitter,
  k,
  propMinWidth,
}) => {
  const k6Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="h-[508px] w-[312px] bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[15.75px] text-left text-sm text-gray-900 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <img
        className="self-stretch h-[312px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-center text-lg">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[24px] font-medium">
            {instructorName}
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-500">
            {headline}
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-5 gap-[20px] text-gray-700">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-5 w-5 relative min-h-[20px]"
              loading="lazy"
              alt=""
              src="/star-10.svg"
            />
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
              {dataSplitter}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[56px]"
              style={k6Style}
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 text-primary-500">
        <div className="flex-1 bg-primary-100 flex flex-row items-start justify-center py-0 px-5 whitespace-nowrap">
          <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[100px]">
            Send message
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor1;
