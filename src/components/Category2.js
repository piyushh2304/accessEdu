import { useMemo } from "react";

const Category2 = ({
  book,
  label,
  labelCourses,
  propBackgroundColor,
  propBoxShadow,
  propWidth,
  propAlignSelf,
}) => {
  const category2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const labelCoursesStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className="w-[312px] bg-secondary-100 flex flex-row items-center justify-center p-5 box-border gap-[20px] text-left text-base text-gray-900 font-body-medium-400"
      style={category2Style}
    >
      <div className="bg-gray-white flex flex-row items-start justify-start p-4">
        <img className="h-8 w-8 relative" loading="lazy" alt="" src={book} />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[22px] font-medium">
          {label}
        </div>
        <div
          className="w-[182px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600 inline-block"
          style={labelCoursesStyle}
        >
          {labelCourses}
        </div>
      </div>
    </div>
  );
};

export default Category2;
