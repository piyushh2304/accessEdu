const NavLinks2 = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start text-left text-sm text-gray-500 font-body-medium-400">
      <div className="self-stretch flex-1 bg-primary-500 overflow-hidden flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch w-[108px] flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/chartbar2.svg"
          />
          <input
            className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-body-medium-400 font-medium text-sm text-gray-white min-w-[43px]"
            placeholder="Dashboard"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/pluscircle11.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[129px]">
              Create New Course
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/stack1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[79px]">
              My Courses
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-between py-3 px-6 gap-[20px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/chatcircledots2.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[60px]">
              Message
            </div>
          </div>
        </div>
        <div className="w-6 rounded-xl bg-primary-500 flex flex-row items-start justify-start py-1 px-0 box-border text-center text-xs text-gray-white">
          <div className="flex-1 relative leading-[16px] font-medium">3</div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/gear11.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[55px]">
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLinks2;
