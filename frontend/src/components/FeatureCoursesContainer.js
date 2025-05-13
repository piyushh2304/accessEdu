import Property1Development from "./Property1Development";

const FeatureCoursesContainer = () => {
  return (
    <div className="w-[648px] bg-gray-white box-border shrink-0 flex flex-row items-start justify-start max-w-full text-left text-sm text-gray-700 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <img
        className="h-[188px] w-[220px] relative object-cover min-h-[188px]"
        alt=""
        src="/course-images-101@2x.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start py-4 px-0 box-border gap-[16.666666666666668px] min-w-[278px] max-w-full">
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px] max-w-full text-lg text-gray-900">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 gap-[20px] mq450:flex-wrap">
            <Property1Development
              developments="Education"
              property1DevelopmentBackgroundColor="#e1f7e3"
              property1DevelopmentWidth="unset"
              developmentsColor="#15711f"
              developmentsMinWidth="59px"
              developmentsHeight="unset"
              developmentsFlex="unset"
            />
            <div className="flex flex-row items-center justify-start gap-[4px]">
              <div className="relative tracking-[-0.01em] leading-[24px] inline-block min-w-[43px]">
                FREE
              </div>
              <div className="relative text-sm [text-decoration:line-through] leading-[24px] text-gray-400 inline-block min-w-[47px] whitespace-nowrap">
                $26.00
              </div>
            </div>
          </div>
          <div className="w-[380px] relative text-base leading-[22px] font-medium inline-block max-w-full">
            Indian Sign Language
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between py-0 px-5 gap-[20px] mq850:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-7 w-7 relative rounded-[50%] object-cover min-h-[28px]"
              alt=""
              src="/photo@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="relative tracking-[-0.01em] leading-[22px]">
                Johns Hopkins University
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-base text-gray-900 font-dm-sans">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img className="w-5 h-5 relative" alt="" src="/star-10.svg" />
              </div>
              <div className="relative tracking-[-0.01em] inline-block min-w-[77px]">
                <span className="leading-[150%]">{`4.7 `}</span>
                <span className="text-sm leading-[22px] font-body-medium-400 text-gray-500">
                  (16,075)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 gap-[20px] mq850:flex-wrap">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/user.svg" />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[36px]">
                16.7K
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/barchart.svg"
            />
            <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[58px]">
              Beginner
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/clock.svg" />
            <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[51px]">
              40 hour
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCoursesContainer;
