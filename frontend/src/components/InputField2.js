const InputField2 = () => {
  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] text-left text-sm text-gray-900 font-body-medium-400">
      <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[64px]">
        Password
      </div>
      <div className="self-stretch flex-1 bg-gray-white overflow-hidden flex flex-row items-start justify-between py-3 pr-[19px] pl-[17px] gap-[20px] border-[1px] border-solid border-gray-100">
        <input
          className="w-[74px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
          placeholder="Password"
          type="text"
        />
        <img className="h-6 w-6 relative min-h-[24px]" alt="" src="/eye.svg" />
      </div>
    </div>
  );
};

export default InputField2;
