const FrameComponent6 = () => {
  return (
    <div className="absolute top-[314px] left-[-9.8px] w-[300px] h-[68px] flex flex-row items-start justify-start p-2.5 box-border z-[1] text-left text-sm text-gray-500 font-body-medium-400">
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/signout1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[57px]">
              Sign-out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
