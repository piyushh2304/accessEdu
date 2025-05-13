import Sidebar1 from "../components/Sidebar1";
import NotificationBadge from "../components/NotificationBadge";
import SizeLargePositionsPrimary from "../components/SizeLargePositionsPrimary";
import Lecture3 from "../components/Lecture3";
import Lecture2 from "../components/Lecture2";
import Footer5 from "../components/Footer5";

const InstructorCreateCourseCurri11 = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] lg:pl-5 lg:pr-5 lg:box-border">
      <Sidebar1 />
      <div className="h-60 w-[1240px] relative bg-gray-50 hidden max-w-full" />
      <main className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-[calc(100%_-_280px)] lg:max-w-full">
        <NotificationBadge />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-gray-600 font-body-medium-400">
          <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
            <div className="self-stretch h-[868px] relative bg-gray-white hidden" />
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0] flex flex-row flex-wrap items-start justify-center gap-[24px] z-[1]">
                <div className="flex-1 bg-gray-white flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      alt=""
                      src="/stack-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative leading-[22px] font-medium">
                        Basic Information
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/checks.svg"
                  />
                </div>
                <div className="flex-1 bg-gray-white flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px]">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/clipboardtext.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative leading-[22px] font-medium">
                        Advance Information
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/checks.svg"
                  />
                </div>
                <div className="flex-1 bg-gray-white shadow-[0px_-2px_0px_#ff6636_inset] flex flex-row items-start justify-between p-5 box-border min-w-[215px] max-w-[312px] gap-[20px] text-gray-900">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      alt=""
                      src="/monitorplay.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="relative leading-[22px] font-medium inline-block min-w-[84px]">
                        Curriculum
                      </div>
                    </div>
                  </div>
                  <div className="w-[25px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-xs text-success-500">
                    <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[25px]">
                      7/12
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-gray-white flex flex-row items-start justify-start p-5 box-border min-w-[215px] max-w-[312px]">
                  <div className="w-[148px] flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      alt=""
                      src="/playcircle.svg"
                    />
                    <input
                      className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-body-medium-400 font-medium text-base text-gray-600 min-w-[70px]"
                      placeholder="Publish Course"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-6 px-10 gap-[20px] z-[1] text-5xl text-gray-900 mq750:flex-wrap mq750:justify-center">
                <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                  Course Curriculum
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
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-[124px] box-border max-w-full text-gray-900 mq750:pb-[81px] mq750:box-border">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-row items-center justify-between p-6 gap-[20px] z-[2] mq750:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-[12px] mq450:flex-wrap">
                    <div className="h-[22px] flex flex-row items-center justify-center gap-[8px]">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/menu.svg"
                      />
                      <div className="relative leading-[22px] font-medium inline-block min-w-[94px]">
                        Sections 01:
                      </div>
                    </div>
                    <div className="relative leading-[24px] inline-block min-w-[104px]">
                      Section name
                    </div>
                  </div>
                  <div className="h-6 flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/plus.svg"
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/pencilline.svg"
                    />
                    <input
                      className="m-0 h-6 w-6 relative min-h-[24px]"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                    <Lecture3 />
                    <Lecture2 />
                  </div>
                </div>
                <div className="self-stretch h-[152px] relative max-w-full text-sm text-gray-700">
                  <SizeLargePositionsPrimary
                    button="Add Sections"
                    sizeLargePositionsPrimaryBackgroundColor="#ffeee8"
                    sizeLargePositionsPrimaryBorder="unset"
                    sizeLargePositionsPrimaryPosition="absolute"
                    sizeLargePositionsPrimaryTop="56px"
                    sizeLargePositionsPrimaryLeft="0px"
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
                  <div className="absolute top-[0px] left-[952px] bg-gray-white shadow-[0px_6px_16px_rgba(0,_0,_0,_0.06)] box-border w-[180px] overflow-hidden flex flex-row items-start justify-start py-3 px-0 z-[3] border-[1px] border-solid border-gray-100">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[38px]">
                          Vidoe
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[69px]">
                          Attach File
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[74px]">
                          Description
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                        <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[92px]">
                          Lecture Notes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between p-10 gap-[20px] z-[1] text-lg mq450:flex-wrap">
              <div className="bg-gray-white flex flex-row items-start justify-start py-0 px-[31px] border-[1px] border-solid border-gray-100">
                <div className="relative tracking-[-0.01em] leading-[56px] capitalize font-semibold inline-block min-w-[75px]">
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
          </div>
        </section>
        <Footer5 />
      </main>
    </div>
  );
};

export default InstructorCreateCourseCurri11;
