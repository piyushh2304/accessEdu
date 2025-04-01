import { useMemo } from "react";

const Category1 = ({
  bookBookmark,
  label,
  labelCourses,
  propBackgroundColor,
}) => {
  const category3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="w-[312px] bg-success-200 flex flex-row items-center justify-center p-5 box-border gap-[20px] text-left text-base text-gray-900 font-body-medium-400"
      style={category3Style}
    >
      <button className="cursor-pointer [border:none] p-4 bg-gray-white flex flex-row items-start justify-start">
        <img className="h-8 w-8 relative" alt="" src={bookBookmark} />
      </button>
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[22px] font-medium">
          {label}
        </div>
        <div className="w-[182px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600 inline-block">
          {labelCourses}
        </div>
      </div>
    </div>
  );
};

export default Category1;
