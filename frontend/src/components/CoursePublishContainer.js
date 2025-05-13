const CoursePublishContainer = () => {
  return (
    <div className="flex-1 bg-gray-white shadow-[0px_-2px_0px_#ff6636_inset] flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px] text-left text-base text-gray-900 font-body-medium-400">
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/playcircle4.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[22px] font-medium inline-block min-w-[116px]">
            Publish Course
          </div>
        </div>
      </div>
      <div className="w-[25px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-xs text-success-500">
        <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[25px]">
          7/12
        </div>
      </div>
    </div>
  );
};

export default CoursePublishContainer;
