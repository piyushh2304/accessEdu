const Steps2 = () => {
  return (
    <div className="self-stretch w-[312px] bg-gray-white shrink-0 flex flex-row items-start justify-between p-5 box-border gap-[20px] text-left text-base text-gray-600 font-body-medium-400">
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/stack-1.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="relative leading-[22px] font-medium">
            Basic Information
          </div>
        </div>
      </div>
      <img className="h-6 w-6 relative min-h-[24px]" alt="" src="/checks.svg" />
    </div>
  );
};

export default Steps2;
