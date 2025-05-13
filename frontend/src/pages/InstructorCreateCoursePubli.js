import LOGO from "../components/LOGO";
import NavLinks3 from "../components/NavLinks3";
import FrameComponent16 from "../components/FrameComponent16";
import Steps4 from "../components/Steps4";
import CoursePublishContainer from "../components/CoursePublishContainer";
import SizeLargePositionsPrimary from "../components/SizeLargePositionsPrimary";
import FrameComponent15 from "../components/FrameComponent15";

const InstructorCreateCoursePubli = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] text-left text-sm text-gray-500 font-body-medium-400 lg:pl-5 lg:pr-5 lg:box-border">
      <div className="h-[1080px] w-[280px] relative bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] lg:hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_140px)] w-full h-[326px] flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] flex flex-row items-start justify-start py-5 px-6">
            <LOGO
              graduationCap="/graduationcap.svg"
              eTutor="AccessEdu"
              graduationCapIconWidth="29.9px"
              graduationCapIconHeight="29.9px"
              graduationCapIconMinHeight="30px"
              eTutorFontSize="24px"
              eTutorColor="#fff"
              eTutorTextAlign="left"
              eTutorLineHeight="30px"
              eTutorMargin="0"
              eTutorMinWidth="124px"
            />
          </div>
          <NavLinks3 />
        </div>
        <div className="absolute top-[314px] left-[-9.8px] w-[300px] h-[68px] flex flex-row items-start justify-start p-2.5 box-border z-[1]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/signout.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[57px]">
                  Sign-out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_280px)] lg:max-w-full">
        <FrameComponent16 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-lg text-gray-900 font-body-medium-400">
          <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
            <div className="self-stretch flex flex-col items-start justify-start text-5xl">
              <div className="self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0] flex flex-row flex-wrap items-start justify-center gap-[24px]">
                <Steps4 stack="/stack-1.svg" label="Basic Information" />
                <Steps4
                  stack="/clipboardtext.svg"
                  label="Advance Information"
                  propMinWidth="unset"
                />
                <Steps4
                  stack="/monitorplay1.svg"
                  label="Curriculum"
                  propMinWidth="84px"
                />
                <CoursePublishContainer />
              </div>
              <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-6 px-10 gap-[20px] mq750:flex-wrap mq750:justify-center">
                <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Publish Course
                </h2>
                <div className="flex flex-row items-start justify-start gap-[12px] text-base text-primary-500 mq450:flex-wrap">
                  <SizeLargePositionsPrimary
                    button="Save"
                    sizeLargePositionsPrimaryBackgroundColor="#ffeee8"
                    sizeLargePositionsPrimaryBorder="unset"
                    sizeLargePositionsPrimaryPosition="unset"
                    sizeLargePositionsPrimaryTop="unset"
                    sizeLargePositionsPrimaryLeft="unset"
                    sizeLargePositionsPrimaryWidth="unset"
                    sizeLargePositionsPrimaryMarginLeft="unset"
                    sizeLargePositionsPrimaryMargin="unset"
                    sizeLargePositionsPrimaryRight="unset"
                    sizeLargePositionsPrimaryBottom="unset"
                    buttonLineHeight="48px"
                    buttonMargin="unset"
                    buttonMinWidth="38px"
                    buttonColor="#ff6636"
                    buttonDisplay="inline-block"
                    buttonTextAlign="left"
                  />
                  <div className="flex flex-row items-center justify-center py-0 px-6">
                    <div className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold inline-block min-w-[117px]">{`Save & Preview`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[66px] box-border max-w-full mq750:pb-[43px] mq750:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Message
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-sm">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
                    <div className="w-[608px] overflow-hidden flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[123px]">
                        Welcome Message
                      </div>
                      <textarea
                        className="bg-gray-white h-[120px] w-auto [outline:none] self-stretch box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] px-[18px] font-body-medium-400 text-base text-gray-500 border-[1px] border-solid border-gray-100"
                        placeholder="Enter course starting message here..."
                        rows={6}
                        cols={30}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg">
                      <div className="self-stretch relative leading-[24px] font-medium">
                        Add Instructor (02)
                      </div>
                      <div className="w-[608px] bg-gray-white box-border overflow-hidden flex flex-row items-start justify-start py-3 px-[18px] max-w-full border-[1px] border-solid border-gray-100">
                        <div className="w-[191px] flex flex-row items-start justify-start gap-[12px]">
                          <img
                            className="h-6 w-6 relative min-h-[24px]"
                            alt=""
                            src="/magnifyingglass.svg"
                          />
                          <input
                            className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-gray-500 text-left inline-block min-w-[93px] p-0"
                            placeholder="Search by username"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[608px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px] max-w-full ml-[-608px]">
                    <div className="relative tracking-[-0.01em] leading-[22px]">
                      Congratulations Message
                    </div>
                    <textarea
                      className="bg-gray-white h-[120px] w-auto [outline:none] self-stretch box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] px-[18px] font-body-medium-400 text-base text-gray-500 border-[1px] border-solid border-gray-100"
                      placeholder="Enter your course completed message here..."
                      rows={6}
                      cols={30}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq750:flex-wrap">
                  <FrameComponent15 dashboardHeader="/ellipse-300-1@2x.png" />
                  <FrameComponent15 dashboardHeader="/ellipse-300-2@2x.png" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between p-10 gap-[20px] mq750:flex-wrap">
              <div className="bg-gray-50 flex flex-row items-start justify-start py-0 px-8 whitespace-nowrap">
                <div className="relative tracking-[-0.01em] leading-[56px] capitalize font-semibold inline-block min-w-[83px]">
                  Prev step
                </div>
              </div>
              <SizeLargePositionsPrimary
                button="Submit for review"
                sizeLargePositionsPrimaryBackgroundColor="#ff6636"
                sizeLargePositionsPrimaryBorder="none"
                sizeLargePositionsPrimaryPosition="unset"
                sizeLargePositionsPrimaryTop="unset"
                sizeLargePositionsPrimaryLeft="unset"
                sizeLargePositionsPrimaryWidth="unset"
                sizeLargePositionsPrimaryMarginLeft="unset"
                sizeLargePositionsPrimaryMargin="unset"
                sizeLargePositionsPrimaryRight="unset"
                sizeLargePositionsPrimaryBottom="unset"
                buttonLineHeight="56px"
                buttonMargin="unset"
                buttonMinWidth="unset"
                buttonColor="#fff"
                buttonDisplay="inline-block"
                buttonTextAlign="left"
              />
            </div>
          </div>
        </section>
        <footer className="self-stretch flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full text-center text-sm text-gray-600 font-body-medium-400 lg:flex-wrap lg:justify-center lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block max-w-full">
            <span>{`© 2024 - AccessEdu. Designed by `}</span>
            <span className="text-gray-500">EduCrafters</span>
            <span>. All rights reserved</span>
          </div>
          <div className="w-[293px] flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[34px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[34px]">
              FAQs
            </div>
            <div className="w-[91px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[91px]">
              Privacy Policy
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[120px]">{`Terms & Condition`}</div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default InstructorCreateCoursePubli;
