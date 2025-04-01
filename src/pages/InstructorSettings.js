import LOGO from "../components/LOGO";
import NavLinks from "../components/NavLinks";
import DashboardNav1 from "../components/DashboardNav1";
import Area from "../components/Area";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const InstructorSettings = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] text-left text-sm text-gray-500 font-body-medium-400 lg:pl-5 lg:pr-5 lg:box-border">
      <div className="h-[1922px] w-[280px] bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] flex flex-col items-start justify-start pt-0 px-0 pb-[1528px] box-border lg:hidden lg:pb-[993px] lg:box-border mq450:pb-[419px] mq450:box-border mq1050:pb-[645px] mq1050:box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
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
          <NavLinks />
        </div>
        <div className="ml-[-9.799999999999272px] w-[300px] h-[68px] flex flex-row items-start justify-start p-2.5 box-border">
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
      <main className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_280px)] text-center text-sm text-gray-600 font-body-medium-400 lg:max-w-full">
        <DashboardNav1
          dashboard="Settings"
          propFlex="unset"
          propAlignSelf="stretch"
          propTop="0"
          propPosition="sticky"
          propDisplay="inline-block"
          propDisplay1="inline-block"
        />
        <Area />
        <FrameComponent4 />
        <FrameComponent3 />
        <div className="self-stretch flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:flex-wrap mq1050:justify-center">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block whitespace-nowrap max-w-full">
            <span>{`© 2024 - AccessEdu. Designed by `}</span>
            <span className="text-gray-500">EduCrafters</span>
            <span>. All rights reserved</span>
          </div>
          <div className="w-[293px] flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[34px] relative tracking-[-0.01em] leading-[22px] inline-block whitespace-nowrap">
              FAQs
            </div>
            <div className="w-[91px] relative tracking-[-0.01em] leading-[22px] inline-block whitespace-nowrap">
              Privacy Policy
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-nowrap">{`Terms & Condition`}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorSettings;
