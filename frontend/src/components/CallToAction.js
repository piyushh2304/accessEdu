import SizeMediumPositionsPrimary from "./SizeMediumPositionsPrimary";

const CallToAction = () => {
  return (
    <div className="ml-[-84px] w-[2088px] bg-gray-900 shadow-[0px_-1px_0px_rgba(54,_59,_71,_0.5)_inset] flex flex-row items-center justify-between py-[100px] px-[300px] box-border max-w-[109%] shrink-0 gap-[20px] text-left text-21xl text-gray-white font-body-medium-400 mq850:pl-[75px] mq850:pr-[75px] mq850:box-border mq1225:pl-[150px] mq1225:pr-[150px] mq1225:box-border mq450:py-[65px] mq450:px-5 mq450:box-border">
      <div className="w-[704px] flex flex-col items-start justify-center py-0 pr-2 pl-0 box-border gap-[32px] min-w-[704px] max-w-full mq850:gap-[16px_32px] mq1525:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          Over 500+ Interactive Courses to Help you Master Key Concept!
        </h1>
        <div className="flex flex-row items-center justify-center gap-[16px] max-w-full mq850:flex-wrap">
          <SizeMediumPositionsPrimary
            button="Join the Family"
            sizeMediumPositionsPrimarBackgroundColor="#ff6636"
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            buttonColor="#fff"
            buttonTextAlign="justify"
            buttonLineHeight="48px"
            buttonMinWidth="120px"
          />
          <SizeMediumPositionsPrimary
            button="Browse all courses"
            sizeMediumPositionsPrimarBackgroundColor="rgba(255, 255, 255, 0.05)"
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            buttonColor="#fff"
            buttonTextAlign="justify"
            buttonLineHeight="48px"
            buttonMinWidth="unset"
          />
        </div>
      </div>
      <div className="w-[648px] flex flex-row items-start justify-start gap-[24px] max-w-full text-justify mq850:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[150px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[48px] font-semibold mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            560
          </div>
          <div className="self-stretch relative text-base leading-[22px] font-medium text-gray-300">
            Online courses
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[150px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[48px] font-semibold mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            165
          </div>
          <div className="self-stretch relative text-base leading-[22px] font-medium text-gray-300">
            Certified Instructor
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[150px]">
          <div className="self-stretch relative tracking-[-0.01em] leading-[48px] font-semibold mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            99.1%
          </div>
          <div className="self-stretch relative text-base leading-[22px] font-medium text-gray-300">
            Sucess Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
