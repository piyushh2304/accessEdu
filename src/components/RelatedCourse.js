import ActionButton from "./ActionButton";
import Property1Design from "./Property1Design";

const RelatedCourse = () => {
  return (
    <section className="self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0_inset] flex flex-col items-center justify-start pt-[59px] px-5 pb-[52px] box-border gap-[40px] max-w-full text-left text-21xl text-gray-900 font-body-medium-400 mq925:gap-[20px_40px] mq925:pt-[38px] mq925:pb-[34px] mq925:box-border">
      <div className="w-[1320px] flex flex-row items-start justify-between gap-[20px] max-w-full mq925:flex-wrap">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq925:text-13xl mq925:leading-[38px]">
          Related Courses
        </h1>
        <ActionButton actionButtonText="View All" iconName="/arrowright.svg" />
      </div>
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-center gap-[25px] max-w-full text-base text-primary-500">
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] min-w-[239px] max-w-[244px] border-[1px] border-solid border-gray-100">
          <img
            className="self-stretch h-[183px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/course-images1@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
              <Property1Design
                design="Design"
                property1DesignBackgroundColor="#ffeee8"
                property1DesignHeight="unset"
                property1DesignBorder="unset"
                designMinWidth="38px"
                designColor="#993d20"
                designAlignSelf="unset"
              />
              <div className="relative leading-[22px] font-semibold inline-block min-w-[30px] whitespace-nowrap">
                $57
              </div>
            </div>
            <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
              Career Development and Employment Skills
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/star.svg" />
                </div>
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                  5.0
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                  265.7K
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] min-w-[239px] max-w-[244px] border-[1px] border-solid border-gray-100">
          <img
            className="self-stretch h-[183px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/course-images-1@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
              <Property1Design
                design="Developments"
                property1DesignBackgroundColor="#ebebff"
                property1DesignHeight="unset"
                property1DesignBorder="unset"
                designMinWidth="82px"
                designColor="#342f98"
                designAlignSelf="unset"
              />
              <div className="relative leading-[22px] font-semibold inline-block min-w-[30px] whitespace-nowrap">
                $57
              </div>
            </div>
            <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
              Accessible Web Design and Development
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/star.svg" />
                </div>
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                  5.0
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                  265.7K
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] min-w-[239px] max-w-[244px] border-[1px] border-solid border-gray-100">
          <img
            className="self-stretch h-[183px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/course-images-21@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
              <Property1Design
                design="Business"
                property1DesignBackgroundColor="#e1f7e3"
                property1DesignHeight="unset"
                property1DesignBorder="unset"
                designMinWidth="50px"
                designColor="#15711f"
                designAlignSelf="unset"
              />
              <div className="relative leading-[22px] font-semibold inline-block min-w-[30px] whitespace-nowrap">
                $57
              </div>
            </div>
            <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
              Introduction to Assistive Technologies
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/star.svg" />
                </div>
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                  5.0
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                  265.7K
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] min-w-[239px] max-w-[244px] border-[1px] border-solid border-gray-100">
          <img
            className="self-stretch h-[183px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/course-images-31@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
              <Property1Design
                design="Marketing"
                property1DesignBackgroundColor="#ebebff"
                property1DesignHeight="unset"
                property1DesignBorder="unset"
                designMinWidth="60px"
                designColor="#342f98"
                designAlignSelf="unset"
              />
              <div className="relative leading-[22px] font-semibold inline-block min-w-[30px] whitespace-nowrap">
                $57
              </div>
            </div>
            <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
              The Complete Digital Marketing Course - 12 Courses in 1
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/star.svg" />
                </div>
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                  5.0
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                  265.7K
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[13.666666666666666px] min-w-[239px] max-w-[244px] border-[1px] border-solid border-gray-100">
          <img
            className="self-stretch h-[183px] relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/course-images-41@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-3.5 gap-[20px]">
              <Property1Design
                design={`IT & Software`}
                property1DesignBackgroundColor="#fff0f0"
                property1DesignHeight="unset"
                property1DesignBorder="unset"
                designMinWidth="77px"
                designColor="#882929"
                designAlignSelf="unset"
              />
              <div className="relative leading-[22px] font-semibold inline-block min-w-[30px] whitespace-nowrap">
                $57
              </div>
            </div>
            <div className="w-[216px] relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900 inline-block">
              Disability Rights and Advocacy Components
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-3.5 gap-[20px] text-sm text-gray-700">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/star.svg" />
                </div>
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                  5.0
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                  265.7K
                </div>
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCourse;
