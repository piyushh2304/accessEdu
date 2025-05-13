const NavLinks3 = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start text-left text-sm text-gray-500 font-body-medium-400">
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/chartbar.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[72px]">
              Dashboard
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 self-stretch h-12 overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/pluscircle.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-gray-white text-left inline-block min-w-[129px]">
              Create New Course
            </div>
          </div>
        </div>
      </button>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/stack.svg"
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
            src="/chatcircledots.svg"
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
            src="/gear.svg"
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

export default NavLinks3;
