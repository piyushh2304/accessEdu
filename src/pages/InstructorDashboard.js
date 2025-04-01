import TopHeader1 from "../components/TopHeader1";
import NavLinks2 from "../components/NavLinks2";
import FrameComponent6 from "../components/FrameComponent6";
import DashboardNav2 from "../components/DashboardNav2";
import FrameComponent9 from "../components/FrameComponent9";
import Banner from "../components/Banner";

const InstructorDashboard = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] lg:pl-5 lg:pr-5 lg:box-border">
      <div className="h-[1056px] w-[280px] relative bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] lg:hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_140px)] w-full h-[326px] flex flex-col items-start justify-start gap-[16px]">
          <TopHeader1 />
          <NavLinks2 />
        </div>
        <FrameComponent6 />
      </div>
      <section className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_280px)] text-center text-sm text-gray-600 font-body-medium-400 lg:max-w-full">
        <DashboardNav2
          dashboard="Dashboard"
          propFlex="unset"
          propAlignSelf="stretch"
          propTop="0"
          propPosition="sticky"
        />
        <FrameComponent9 />
        <Banner />
        <div className="self-stretch flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full lg:flex-wrap lg:justify-center lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
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
        </div>
      </section>
    </div>
  );
};

export default InstructorDashboard;
