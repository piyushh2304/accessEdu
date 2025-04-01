import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
import Footer4 from "./Footer4";
import Steps from "./Steps";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";
import SectionContainer from "./SectionContainer";
import Lecture1 from "./Lecture1";
import Lecture from "./Lecture";
import Select from "./Select";
import FrameComponent20 from "./FrameComponent11";

const InstructorCreateCourseCurri = () => {
  return (
    <form className="m-0 w-full h-[1080px] relative bg-gray-50 overflow-hidden tracking-[normal] mq1100:h-auto mq1100:min-h-[1080]">
      <Sidebar />
      <DashboardNav />
      <Footer4 />
      <div className="absolute top-[340px] left-[480px] bg-gray-50 w-[1240px] h-60 hidden" />
      <section className="absolute top-[0px] left-[0px] bg-gray1-800 w-full h-full z-[4]" />
      <section className="absolute top-[140px] left-[440px] bg-gray-white w-[1320px] flex flex-col items-start justify-start gap-[89px] max-w-full">
        <div className="self-stretch h-[868px] relative bg-gray-white hidden" />
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <Steps />
          <div className="self-stretch h-[579px] relative max-w-full mq750:h-auto mq750:min-h-[579]">
            <div className="absolute top-[0px] left-[0px] bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] w-full flex flex-row items-center justify-between py-6 px-10 box-border gap-[20px] max-w-full z-[1] mq750:flex-wrap mq750:justify-center">
              <h2 className="m-0 relative text-5xl tracking-[-0.01em] leading-[32px] font-semibold font-body-medium-400 text-gray-900 text-left mq450:text-lgi mq450:leading-[26px]">
                Course Curriculum
              </h2>
              <div className="flex flex-row items-start justify-start gap-[12px]">
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
                  <div className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left inline-block min-w-[117px]">{`Save & Preview`}</div>
                </div>
              </div>
            </div>
            <SectionContainer />
            <Lecture1 />
            <Lecture />
            <Select />
            <div className="absolute top-[93px] left-[196px] w-[648px] flex flex-row items-start justify-start max-w-full">
              <SizeLargePositionsPrimary
                button="Add Sections"
                sizeLargePositionsPrimaryBackgroundColor="#ffeee8"
                sizeLargePositionsPrimaryBorder="unset"
                sizeLargePositionsPrimaryPosition="absolute"
                sizeLargePositionsPrimaryTop="unset"
                sizeLargePositionsPrimaryLeft="unset"
                sizeLargePositionsPrimaryWidth="1240px"
                sizeLargePositionsPrimaryMarginLeft="unset"
                sizeLargePositionsPrimaryMargin="0 !important"
                sizeLargePositionsPrimaryRight="-436px"
                sizeLargePositionsPrimaryBottom="123px"
                buttonLineHeight="48px"
                buttonMargin="unset"
                buttonMinWidth="102px"
                buttonColor="#ff6636"
                buttonDisplay="inline-block"
                buttonTextAlign="left"
              />
              <div className="flex-1 bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[24px] max-w-full z-[5]">
                <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between py-4 px-5 gap-[20px]">
                  <div className="relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-900 text-left">
                    Add Lecture Notes
                  </div>
                  <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-[18px] h-[18px] relative"
                      alt=""
                      src="/x.svg"
                    />
                  </div>
                </div>
                <FrameComponent20
                  labal="Notes"
                  inputFieldPlaceholder="Write your lecture Notes here..."
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 bg-gray-white box-border flex flex-row items-start justify-start py-6 px-[23px] max-w-full border-[1px] border-solid border-gray-100">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                      <div className="self-stretch relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-900 text-center">
                        Uploads Notes
                      </div>
                      <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-center">
                        <span className="text-gray-500">{`Drag an drop a file or `}</span>
                        <span className="text-gray-700">browse file</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
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
                    <div className="bg-primary-200 flex flex-row items-start justify-start py-0 px-6 whitespace-nowrap">
                      <div className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-gray-white text-left inline-block min-w-[123px]">
                        Add Description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between p-10 gap-[20px] z-[1] mq450:flex-wrap">
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
      </section>
    </form>
  );
};

export default InstructorCreateCourseCurri;
