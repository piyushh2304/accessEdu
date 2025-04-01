import Course3 from "./Course3";

const GraphTheory = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start pt-0 px-0 pb-4 gap-[24px] grid-cols-[repeat(4,_minmax(234px,_1fr))] text-left text-xs text-gray-600 font-body-medium-400 lg:justify-center lg:grid-cols-[repeat(2,_minmax(234px,_406px))] mq450:grid-cols-[minmax(234px,_1fr)]">
      <Course3
        courseImages="/course-images-81@2x.png"
        digitalMarketingMastercla="Ultimate Google Ads Training 2020: Profit with..."
        whatYoullNeedToGetStarted="1. Introductions"
        propWidth="unset"
      />
      <Course3
        courseImages="/course-images-92@2x.png"
        digitalMarketingMastercla="SEO 2021: Complete SEO Training + SEO for W..."
        whatYoullNeedToGetStarted="1. Introductions"
        propWidth="unset"
      />
      <div className="h-[367px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] border-[1px] border-solid border-gray-100">
        <img
          className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/course-images-102@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[16px]">
              Instagram Marketing 2021: Complete Guide To I...
            </div>
            <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
              54. CSS Static and Relative Positioning
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm text-primary-500">
          <div className="flex-1 flex flex-row items-start justify-start gap-[45px] mq450:gap-[45px_22px]">
            <div className="bg-primary-100 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
              <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                Watch Lecture
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[105px]">
                52% Completed
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
          <div className="h-0.5 w-[190px] relative bg-primary-500" />
        </div>
      </div>
      <div className="h-[367px] bg-gray-white shadow-[0px_12px_48px_rgba(29,_32,_38,_0.12)] flex flex-col items-start justify-start gap-[15.75px]">
        <img
          className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/course-images-114@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="self-stretch relative leading-[16px]">
              [NEW] Ultimate AWS Certified Cloud Practitio...
            </div>
            <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
              91. CSS Float and Clear
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm text-gray-white">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="bg-primary-500 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
              <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                Watch Lecture
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[103px]">
                13% Completed
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
          <div className="h-0.5 w-[190px] relative bg-primary-500" />
        </div>
      </div>
    </div>
  );
};

export default GraphTheory;
