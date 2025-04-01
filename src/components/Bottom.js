const Bottom = () => {
  return (
    <div className="self-stretch bg-gray-900 shadow-[0px_1px_0px_rgba(54,_59,_71,_0.5)_inset] flex flex-row items-start justify-between py-6 px-[300px] box-border max-w-full gap-[20px] text-justify text-sm text-gray-500 font-body-medium-400 mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:flex-wrap mq1275:justify-center mq1275:pl-[150px] mq1275:pr-[150px] mq1275:box-border mq900:pl-[75px] mq900:pr-[75px] mq900:box-border">
      <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
        <div className="relative tracking-[-0.01em] leading-[22px]">
          <span>{`© 2024 - AccessEdu. Designed by `}</span>
          <span className="text-gray-white">EduCrafters</span>
          <span>. All rights reserved</span>
        </div>
      </div>
      <div className="w-[200px] bg-gray-900 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 pr-[15px] pl-[17px] gap-[95px] text-base border-[1px] border-solid border-gray-800">
        <div className="relative leading-[24px] inline-block min-w-[55px]">
          English
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <img className="w-4 h-4 relative" alt="" src="/chevrondown2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
