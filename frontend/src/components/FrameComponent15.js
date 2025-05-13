const FrameComponent15 = ({ dashboardHeader }) => {
  return (
    <div className="h-20 bg-gray-50 overflow-x-auto flex flex-row items-center justify-start p-4 box-border gap-[12px] text-left text-sm text-gray-900 font-body-medium-400">
      <img
        className="h-12 w-12 relative rounded-[50%] shrink-0 object-cover min-h-[48px]"
        alt=""
        src={dashboardHeader}
      />
      <div className="w-48 shrink-0 flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-semibold">
          Username
        </div>
        <div className="self-stretch relative tracking-[-0.01em] leading-[22px] text-gray-600">
          UI/UX Designer
        </div>
      </div>
      <img className="h-4 w-4 relative shrink-0" alt="" src="/x1.svg" />
    </div>
  );
};

export default FrameComponent15;
