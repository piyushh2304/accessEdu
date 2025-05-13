import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import Sidebar1 from "../components/Sidebar1";
import DashboardNav1 from "../components/DashboardNav1";
import SizeLargePositionsPrimary from "../components/SizeLargePositionsPrimary";
import FrameComponent2 from "../components/FrameComponent21";
import Footer5 from "../components/Footer5";

const InstructorCreateCourseBasic = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] lg:pl-5 lg:pr-5 lg:box-border">
      <Sidebar1 informationsHeight="1080px" />
      <main className="flex-1 flex flex-col items-start justify-start gap-[82px] max-w-[calc(100%_-_280px)] lg:max-w-full mq450:gap-[20px_82px] mq750:gap-[41px_82px]">
        <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
          <DashboardNav1
            dashboard="Create a new course"
            propFlex="unset"
            propAlignSelf="stretch"
            propTop="0"
            propPosition="sticky"
            propDisplay="inline-block"
            propDisplay1="inline-block"
          />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[32px] max-w-full mq750:gap-[16px_32px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0] flex flex-row flex-wrap items-start justify-center gap-[24px]">
                  <div className="flex-1 bg-gray-white shadow-[0px_-2px_0px_#ff6636_inset] flex flex-row items-start justify-between p-5 box-border min-w-[191px] max-w-[312px] gap-[20px]">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        alt=""
                        src="/stack-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-900 text-left">
                          Basic Information
                        </div>
                      </div>
                    </div>
                    <div className="w-[25px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                      <div className="self-stretch relative text-xs leading-[16px] font-medium font-body-medium-400 text-success-500 text-right inline-block min-w-[25px]">
                        7/12
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-white flex flex-row items-start justify-start p-5 box-border min-w-[191px] max-w-[312px]">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/clipboardtext.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative text-base leading-[22px] font-medium font-body-medium-400 text-gray-600 text-left">
                          Advance Information
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-white flex flex-row items-start justify-start p-5 box-border min-w-[191px] max-w-[312px]">
                    <div className="w-[116px] flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        alt=""
                        src="/monitorplay1.svg"
                      />
                      <input
                        className="w-[calc(100%_-_24px)] [border:none] [outline:none] bg-[transparent] h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-body-medium-400 font-medium text-base text-gray-600 min-w-[50px]"
                        placeholder="Curriculum"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-white flex flex-row items-start justify-start p-5 box-border min-w-[191px] max-w-[312px]">
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
                <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-6 px-10 gap-[20px] mq750:flex-wrap mq750:justify-center">
                  <h2 className="m-0 relative text-5xl tracking-[-0.01em] leading-[32px] font-semibold font-body-medium-400 text-gray-900 text-left mq450:text-lgi mq450:leading-[26px]">
                    Basic Information
                  </h2>
                  <div className="flex flex-row items-start justify-start gap-[12px] mq450:flex-wrap">
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
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[34px]">
                        Tittle
                      </div>
                      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] border-[1px] border-solid border-gray-100 mq450:flex-wrap">
                        <div className="relative text-base leading-[24px] font-body-medium-400 text-gray-500 text-left inline-block min-w-[124px]">
                          You course tittle
                        </div>
                        <div className="w-[31px] relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-700 text-right inline-block min-w-[31px]">
                          0/80
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[55px]">
                        Subtittle
                      </div>
                      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] border-[1px] border-solid border-gray-100 mq450:flex-wrap">
                        <div className="relative text-base leading-[24px] font-body-medium-400 text-gray-500 text-left">
                          You course subtittle
                        </div>
                        <div className="w-[37px] relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-700 text-right inline-block min-w-[37px]">
                          0/120
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[24px] max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                      <FrameComponent2 courseCategory="Course Category" />
                      <FrameComponent2
                        courseCategory="Course Sub-category"
                        propMinWidth="395px"
                        propDisplay="inline-block"
                        propMinWidth1="unset"
                      />
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[86px]">
                        Course Topic
                      </div>
                      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                        <input
                          className="w-[299px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                          placeholder="What is primarily taught in your course?"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
                      <FrameComponent2
                        courseCategory="Course Language"
                        propMinWidth="219px"
                        propDisplay="inline-block"
                        propMinWidth1="115px"
                      />
                      <FrameComponent2
                        courseCategory="Subtitle Language (Optional)"
                        propMinWidth="219px"
                        propDisplay="inline-block"
                        propMinWidth1="unset"
                      />
                      <FrameComponent2
                        courseCategory="Course Level"
                        propMinWidth="219px"
                        propDisplay="inline-block"
                        propMinWidth1="85px"
                      />
                      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[219px] max-w-[292px]">
                        <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[63px]">
                          Durations
                        </div>
                        <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] border-[1px] border-solid border-gray-100 mq450:flex-wrap">
                          <div className="relative text-base leading-[24px] font-body-medium-400 text-gray-500 text-left">
                            Course durations
                          </div>
                          <FormControl
                            className="w-12 font-body-medium-400 text-sm text-gray-700"
                            variant="outlined"
                            sx={{
                              borderRadius: "0px 0px 0px 0px",
                              width: "48px",
                              height: "22px",
                              m: 0,
                              p: 0,
                              "& .MuiInputBase-root": {
                                m: 0,
                                p: 0,
                                minHeight: "22px",
                                justifyContent: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInputLabel-root": {
                                m: 0,
                                p: 0,
                                minHeight: "22px",
                                display: "inline-flex",
                              },
                              "& .MuiMenuItem-root": {
                                m: 0,
                                p: 0,
                                height: "22px",
                                display: "inline-flex",
                              },
                              "& .MuiSelect-select": {
                                m: 0,
                                p: 0,
                                height: "22px",
                                alignItems: "center",
                                display: "inline-flex",
                              },
                              "& .MuiInput-input": { m: 0, p: 0 },
                              "& .MuiInputBase-input": {
                                textAlign: "left",
                                p: "0 !important",
                              },
                            }}
                          >
                            <InputLabel color="primary" />
                            <Select
                              color="primary"
                              disableUnderline
                              displayEmpty
                            />
                            <FormHelperText />
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="bg-gray-white flex flex-row items-start justify-start py-0 px-[31px] border-[1px] border-solid border-gray-100">
                      <div className="relative text-lg tracking-[-0.01em] leading-[56px] capitalize font-semibold font-body-medium-400 text-gray-600 text-left inline-block min-w-[60px]">
                        Cancel
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
              </div>
            </div>
          </div>
        </form>
        <Footer5 />
      </main>
    </div>
  );
};

export default InstructorCreateCourseBasic;
