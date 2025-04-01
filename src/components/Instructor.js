import { useMemo } from "react";

const Instructor = ({
  image,
  instructorName,
  headline,
  tabbedModal,
  k,
  propOverflow,
  propMinWidth,
  propMinWidth1,
}) => {
  const instructorStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const tabbedModalStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const k5Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className="w-[244px] bg-gray-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[11.666666666666666px] text-center text-base text-gray-900 font-body-medium-400 border-[1px] border-solid border-gray-100"
      style={instructorStyle}
    >
      <img
        className="w-[244px] h-[244px] relative object-cover"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[22px] font-medium">
            {instructorName}
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-500">
            {headline}
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
      <div className="self-stretch flex flex-row items-start justify-between py-0 px-4 gap-[20px] text-left text-sm text-gray-700">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/star-10.svg"
            />
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]"
              style={tabbedModalStyle}
            >
              {tabbedModal}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[27px]"
              style={k5Style}
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

export default Instructor;
