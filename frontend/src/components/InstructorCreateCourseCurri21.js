import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import Footer4 from "./Footer4";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";
import Steps from "./Steps";
import Heading2 from "./Heading2";
import Heading1 from "./Heading1";
import Lecture1 from "./Lecture1";
import Lecture from "./Lecture";
import Select from "./Select";

const InstructorCreateCourseCurri2 = () => {
  return (
    <form className="m-0 w-full h-[1080px] relative bg-gray-50 overflow-hidden tracking-[normal] mq1100:h-auto mq1100:min-h-[1080]">
      <Sidebar />
      <DashboardNav />
      <Footer4 />
      <div className="absolute top-[340px] left-[480px] bg-gray-50 w-[1240px] h-60 hidden" />
      <section className="absolute top-[0px] left-[0px] bg-gray1-800 w-full h-full z-[4]" />
      <section className="absolute top-[140px] left-[440px] bg-gray-white w-[1320px] h-[868px] max-w-full mq1100:h-auto mq1100:min-h-[868]">
        <div className="absolute top-[0px] left-[0px] bg-gray-white w-full h-full hidden" />
        <SizeLargePositionsPrimary
          button="Add Sections"
          sizeLargePositionsPrimaryBackgroundColor="#ffeee8"
          sizeLargePositionsPrimaryBorder="unset"
          sizeLargePositionsPrimaryPosition="absolute"
          sizeLargePositionsPrimaryTop="472px"
          sizeLargePositionsPrimaryLeft="40px"
          sizeLargePositionsPrimaryWidth="1240px"
          sizeLargePositionsPrimaryMarginLeft="unset"
          sizeLargePositionsPrimaryMargin="unset"
          sizeLargePositionsPrimaryRight="unset"
          sizeLargePositionsPrimaryBottom="unset"
          buttonLineHeight="48px"
          buttonMargin="unset"
          buttonMinWidth="102px"
          buttonColor="#ff6636"
          buttonDisplay="inline-block"
          buttonTextAlign="left"
        />
        <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start max-w-full">
          <Steps propDisplay="inline-block" />
          <Heading2 />
        </div>
        <div className="absolute top-[732px] left-[0px] w-full flex flex-row items-start justify-between p-10 box-border gap-[20px] max-w-full z-[1] mq450:flex-wrap">
          <div className="bg-gray-white flex flex-row items-start justify-start py-0 px-[31px] border-[1px] border-solid border-gray-100">
            <div className="relative text-lg tracking-[-0.01em] leading-[56px] capitalize font-semibold font-body-medium-400 text-gray-600 text-left inline-block min-w-[75px]">
              Previous
            </div>
          </div>
          <SizeLargePositionsPrimary
            button={`Save & next`}
            sizeLargePositionsPrimaryBackgroundColor="#ff6636"
            sizeLargePositionsPrimaryBorder="unset"
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
            buttonMinWidth="103px"
            buttonColor="#fff"
            buttonDisplay="inline-block"
            buttonTextAlign="left"
          />
        </div>
        <div className="absolute top-[200px] left-[40px] w-[1240px] h-[400px] max-w-full mq450:h-auto mq450:min-h-[400]">
          <Heading1 />
          <Lecture1 propTop="72px" propLeft="24px" />
          <Lecture propTop="152px" propLeft="24px" />
          <Select propTop="216px" propLeft="952px" />
          <div className="absolute top-[63px] left-[156px] bg-gray-white w-[648px] flex flex-col items-center justify-center pt-0 px-0 pb-6 box-border gap-[24px] max-w-full z-[5]">
            <div className="self-stretch h-[54px] bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-4 px-5 box-border gap-[20px]">
              <div className="relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-900 text-left inline-block min-w-[82px]">
                Attach File
              </div>
              <img className="h-[18px] w-[18px] relative" alt="" src="/x.svg" />
            </div>
            <div className="w-[600px] bg-gray-white box-border flex flex-col items-start justify-start py-6 px-[23px] max-w-full border-[1px] border-solid border-gray-100 mq750:w-[calc(100%_-_40px)]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-900 text-center">
                  Attach File
                </div>
                <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-center">
                  <span className="text-gray-500">{`Drag an drop a file or `}</span>
                  <span className="text-gray-700">browse file</span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 gap-[20px] mq450:flex-wrap">
              <SizeLargePositionsPrimary
                button="Cancel"
                sizeLargePositionsPrimaryBackgroundColor="#76abae"
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
                buttonMinWidth="54px"
                buttonColor="#1d2026"
                buttonDisplay="inline-block"
                buttonTextAlign="left"
              />
              <div className="bg-primary-200 flex flex-row items-center justify-center py-0 px-6 whitespace-nowrap">
                <div className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-gray-white text-left inline-block min-w-[82px]">
                  Attach File
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default InstructorCreateCourseCurri2;
