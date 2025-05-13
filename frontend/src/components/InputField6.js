const InputField6 = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[277px] max-w-full text-left text-sm text-gray-900 font-body-medium-400">
      <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[62px]">
        Full name
      </div>
      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
        <input
          className="w-20 [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
          placeholder="First name"
          type="text"
        />
      </div>
    </div>
  );
};

export default InputField6;
