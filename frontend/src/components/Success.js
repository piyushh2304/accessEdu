const Success = ({ techYourStudentsAsYouWant, morbiQuisLoremNonOrciFerm }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full text-left text-lg text-gray-900 font-body-medium-400 mq925:flex-wrap">
      <img
        className="h-10 w-10 relative"
        loading="lazy"
        alt=""
        src="/checkcircle.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[312px] max-w-full">
        <div className="self-stretch relative leading-[24px] font-medium">
          {techYourStudentsAsYouWant}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
          {morbiQuisLoremNonOrciFerm}
        </div>
      </div>
    </div>
  );
};

export default Success;
