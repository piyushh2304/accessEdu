import CourseProgress from "./CourseProgress";
import FrameComponent11 from "./FrameComponent1";

const FrameComponent1 = () => {
  return (
    <div className="w-[802px] flex flex-col items-start justify-start gap-[20px] min-w-[802px] shrink-0 [debug_commit:1cbd860] text-left text-5xl text-gray-900 font-body-medium-400 mq925:min-w-full mq1825:flex-1">
      <div className="w-[691px] flex flex-col items-start justify-start pt-0 pb-1 pr-5 pl-0 box-border gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mix-blend-normal mq450:text-lgi mq450:leading-[26px]">
            Course Contents
          </h2>
          <div className="w-[121px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-right text-base text-success-500">
            <div className="self-stretch relative leading-[22px] font-semibold inline-block mix-blend-normal min-w-[121px]">
              15% Completed
            </div>
          </div>
        </div>
        <CourseProgress />
      </div>
      <div className="w-[693px] flex flex-row items-start justify-start pt-0 pb-1 pr-5 pl-0 box-border max-w-full text-base text-primary-500">
        <div className="flex-1 bg-gray-white box-border flex flex-col items-start justify-start gap-[12px] max-w-full border-[1px] border-solid border-gray-100">
          <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between p-5 gap-[20px] mq925:flex-wrap">
            <div className="h-[22px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/iconlylightarrow--down-2.svg"
              />
              <div className="relative leading-[22px] font-medium inline-block min-w-[119px]">
                Getting Started
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-gray-700 mq450:flex-wrap">
              <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/playcircle1.svg"
                />
                <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[65px]">
                  4 lectures
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <img className="h-5 w-5 relative" alt="" src="/clock1.svg" />
                <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[27px]">
                  51m
                </div>
              </div>
              <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
                <img className="h-5 w-5 relative" alt="" src="/checks1.svg" />
                <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[101px]">
                  <span>{`25% finish `}</span>
                  <span className="text-gray-500">(1/4)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-[17.5px] box-border max-w-full text-sm text-gray-700">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between py-[13px] px-5 gap-[20px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-[18px] h-[18px] relative"
                      alt=""
                      src="/check-box.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[93px]">
                    1. What is ISL?
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-gray-400">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img className="w-4 h-4 relative" alt="" src="/play1.svg" />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[35px] whitespace-nowrap">
                    07:31
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-primary-100 flex flex-row items-start justify-between py-[13.5px] px-5 gap-[20px] text-gray-900 mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="flex flex-row items-start justify-start gap-[12px]">
                    <input className="m-0 h-[19px] w-[18px]" type="checkbox" />
                    <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[113px]">
                      2. Concept of ISL
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <input className="m-0 h-[19px] w-4" type="checkbox" />
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[35px] whitespace-nowrap">
                    07:31
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-[13.5px] px-5 gap-[20px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <input className="m-0 h-5 w-[18px]" type="checkbox" />
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[100px]">
                    3. Needs of ISL
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-gray-400">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img className="w-4 h-4 relative" alt="" src="/play1.svg" />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[35px] whitespace-nowrap">
                    07:31
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between py-[13px] px-5 gap-[20px] mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <input className="m-0 h-5 w-[18px]" type="checkbox" />
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[99px]">
                    4. Basics of ISL
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px] text-gray-400">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img className="w-4 h-4 relative" alt="" src="/play1.svg" />
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[35px] whitespace-nowrap">
                    07:31
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[673px] overflow-x-auto flex flex-col items-start justify-start max-w-full text-gray-900">
            <FrameComponent11
              courseContentsName="Secret of Good Communication"
              lectures="52 lectures"
              h37m="5m 49m"
            />
            <FrameComponent11
              courseContentsName="Practice Like an Communicator"
              lectures="43 lectures"
              h37m="51m"
              propMarginTop="-1px"
              propMinWidth="unset"
              propMinWidth1="74px"
              propMinWidth2="27px"
            />
            <FrameComponent11
              courseContentsName="Training of ISL"
              lectures="137 lectures"
              h37m="10h 6m"
              propMarginTop="unset"
              propMinWidth="109px"
              propMinWidth1="79px"
              propMinWidth2="48px"
            />
            <FrameComponent11
              courseContentsName="Communicate with the community"
              lectures="21 lectures"
              h37m="38m"
              propMarginTop="-1px"
              propMinWidth="unset"
              propMinWidth1="71px"
              propMinWidth2="30px"
            />
            <FrameComponent11
              courseContentsName="Advanced"
              lectures="39 lectures"
              h37m="1h 31m"
              propMarginTop="-1px"
              propMinWidth="76px"
              propMinWidth1="74px"
              propMinWidth2="46px"
            />
            <FrameComponent11
              courseContentsName="What’s Next"
              lectures="7 lectures"
              h37m="1h 17m"
              propMarginTop="-1px"
              propMinWidth="91px"
              propMinWidth1="64px"
              propMinWidth2="45px"
            />
          </div>
        </div>
      </div>
      <h2 className="m-0 self-stretch relative text-inherit leading-[32px] mix-blend-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
        <span className="tracking-[-0.01em] font-semibold">{`Course instructor `}</span>
        <span>(01)</span>
      </h2>
      <div className="w-[673px] bg-gray-white box-border flex flex-row items-start justify-start p-8 gap-[24px] max-w-full text-sm border-[1px] border-solid border-gray-100 mq925:flex-wrap">
        <img
          className="h-[136px] w-[136px] relative rounded-[50%] object-contain"
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
        <div className="w-[481.5px] flex flex-row items-start justify-start relative max-w-full">
          <h3 className="!m-[0] w-[607px] absolute top-[0px] right-[-125.5px] text-xl leading-[26px] font-semibold font-inherit inline-block mq450:text-base mq450:leading-[21px]">
            Pragya Gupta
          </h3>
          <div className="w-[607px] absolute !m-[0] top-[32px] right-[-125.5px] tracking-[-0.01em] leading-[22px] text-gray-700 inline-block">
            Sign Language Expert• Founder of DeafWay
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq925:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative"
                      alt=""
                      src="/star-10.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] inline-block min-w-[113px]">
                    <span className="leading-[20px] font-medium">4.6</span>
                    <span className="leading-[22px] text-gray-700">
                      {" "}
                      Course rating
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <div className="h-[21px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <img
                      className="w-5 h-5 relative"
                      alt=""
                      src="/users4.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] inline-block min-w-[101px]">
                    <span className="leading-[20px] font-medium">5,342</span>
                    <span className="leading-[22px] text-gray-700">
                      {" "}
                      Students
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <div className="h-[21px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <img
                      className="w-5 h-5 relative"
                      alt=""
                      src="/playcircle-8.svg"
                    />
                  </div>
                  <div className="relative tracking-[-0.01em] inline-block min-w-[73px]">
                    <span className="leading-[20px] font-medium">01</span>
                    <span className="leading-[22px] text-gray-700">
                      {" "}
                      Courses
                    </span>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start min-h-[132px] text-gray-600">
                <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                  <p className="m-0">
                    I am working on multiple things for social impact apart from
                    this channel, most prominent of which is my work as a social
                    impact consultant at Sattva Consulting.
                  </p>
                  <p className="m-0">
                    I also work for a small NGO, Myra- Ek Pahel, and freelance
                    with a social enterprise, Yunikee, which creates educational
                    content for deaf audiences.
                  </p>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[159px] mt-[-62px] text-xs text-gray-800">
                  <div className="w-[56.3px] relative leading-[12px] font-medium inline-block shrink-0 z-[1]">
                    READ MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
