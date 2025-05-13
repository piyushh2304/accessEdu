import Steps2 from "./Steps2";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";
import SizeMediumPositionsPrimary1 from "./SizeMediumPositionsPrimary1";

const AdvanceInformations = () => {
  return (
    <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-lg text-gray-900 font-body-medium-400">
      <div className="h-16 bg-gray-white shadow-[0px_1px_0px_#e9eaf0] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[24px] text-base text-gray-600">
        <Steps2 />
        <div className="w-[312px] bg-gray-white shadow-[0px_-2px_0px_#ff6636_inset] shrink-0 flex flex-row items-start justify-between p-5 box-border gap-[20px] text-gray-900">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/clipboardtext.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[22px] font-medium">
                Advance Information
              </div>
            </div>
          </div>
          <div className="w-[25px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-right text-xs text-success-500">
            <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[25px]">
              7/12
            </div>
          </div>
        </div>
        <div className="w-[312px] bg-gray-white shrink-0 flex flex-row items-start justify-start p-5 box-border">
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
        <div className="w-[312px] bg-gray-white shrink-0 flex flex-row items-start justify-start p-5 box-border">
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
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-5xl">
        <div className="flex-1 bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-6 px-10 box-border max-w-full gap-[20px] mq750:flex-wrap">
          <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Advance Informations
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
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-8 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[387px] max-w-full mq750:min-w-full">
            <div className="relative leading-[24px] font-medium">
              Course Thumbnail
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-sm text-gray-600 mq750:flex-wrap">
              <div className="h-40 bg-gray-50 flex flex-row items-center justify-center py-[18px] px-[52px] box-border min-w-[228px] mq750:flex-1">
                <img
                  className="h-[124px] w-[124px] relative mq750:flex-1"
                  loading="lazy"
                  alt=""
                  src="/image4.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[224px] max-w-full">
                <div className="self-stretch relative tracking-[-0.01em] mix-blend-normal">
                  <span className="leading-[22px]">{`Upload your course Thumbnail here. `}</span>
                  <span className="leading-[20px] font-medium text-gray-900">
                    Important guidelines:
                  </span>
                  <span className="leading-[22px]">{` 1200x800 pixels or 12:8 Ratio. Supported format: `}</span>
                  <span className="leading-[20px] font-medium text-gray-900">
                    .jpg, .jpeg, or .png
                  </span>
                </div>
                <SizeMediumPositionsPrimary1
                  button="Upload image"
                  arrowRight="/uploadsimple.svg"
                  sizeMediumPositionsPrimarBackgroundColor="#ffeee8"
                  sizeMediumPositionsPrimarBorder="none"
                  sizeMediumPositionsPrimarBoxShadow="unset"
                  buttonColor="#ff6636"
                  buttonMinWidth="105px"
                  buttonLineHeight="48px"
                  buttonDisplay="inline-block"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[387px] max-w-full mq750:min-w-full">
            <div className="relative leading-[24px] font-medium inline-block min-w-[121px]">
              Course Trailer
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-sm text-gray-600 mq750:flex-wrap">
              <div className="h-40 bg-gray-50 flex flex-row items-center justify-center py-[18px] px-[52px] box-border min-w-[228px] mq750:flex-1">
                <img
                  className="h-[124px] w-[124px] relative mq750:flex-1"
                  alt=""
                  src="/playcircle-1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[224px] max-w-full">
                <div className="self-stretch relative tracking-[-0.01em] leading-[22px] mix-blend-normal">
                  Students who watch a well-made promo video are 5X more likely
                  to enroll in your course. We've seen that statistic go up to
                  10X for exceptionally awesome videos.
                </div>
                <SizeMediumPositionsPrimary1
                  button="Upload Video"
                  arrowRight="/uploadsimple.svg"
                  sizeMediumPositionsPrimarBackgroundColor="#ffeee8"
                  sizeMediumPositionsPrimarBorder="none"
                  sizeMediumPositionsPrimarBoxShadow="unset"
                  buttonColor="#ff6636"
                  buttonMinWidth="103px"
                  buttonLineHeight="48px"
                  buttonDisplay="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[31px] max-w-full mq750:gap-[15px_31px]">
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="self-stretch relative leading-[24px] font-medium">
              Course Descriptions
            </div>
            <div className="self-stretch bg-gray-white overflow-hidden flex flex-col items-start justify-start py-3 px-0 gap-[160px] text-base text-gray-500 border-[1px] border-solid border-gray-100 lg:gap-[80px_160px] mq450:gap-[20px_160px] mq750:gap-[40px_160px]">
              <div className="flex flex-row items-start justify-start py-0 px-[18px]">
                <div className="relative leading-[24px]">
                  Enter you course descriptions
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="flex flex-row items-start justify-start py-0 px-3">
                  <div className="flex flex-row items-start justify-center gap-[8px] mq450:flex-wrap">
                    <div className="h-[30px] bg-gray-50 flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/textbolder.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/textitalic.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/textunderline.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/textstrikethrough.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/link.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/listbullets.svg"
                      />
                    </div>
                    <div className="h-[30px] bg-gray-white flex flex-row items-start justify-start p-1.5 box-border">
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/listnumbers.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-8 flex flex-row items-start justify-start pt-0 px-0 pb-[31px] box-border max-w-full">
        <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gray-100" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-sm">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px_32px]">
          <div className="w-[1240px] overflow-x-auto flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="w-[1240px] flex flex-row items-start justify-between gap-[20px] text-lg">
              <div className="relative leading-[24px] font-medium">
                What you will teach in this course (4/8)
              </div>
              <button className="cursor-pointer [border:none] pt-0.5 px-0 pb-0 bg-[transparent] flex flex-col items-start justify-start">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[18px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <img
                      className="w-4 h-4 relative"
                      loading="lazy"
                      alt=""
                      src="/plus11.svg"
                    />
                  </div>
                  <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-primary-500 text-left inline-block min-w-[59px]">
                    Add new
                  </div>
                </button>
              </button>
            </div>
            <div className="w-[1240px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[16px]">
                01
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100">
                <div className="relative leading-[24px]">
                  What you will teach in this course...
                </div>
                <div className="w-[37px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700 text-right inline-block min-w-[37px]">
                  0/120
                </div>
              </div>
            </div>
            <div className="w-[1240px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[18px]">
                02
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100">
                <div className="relative leading-[24px]">
                  What you will teach in this course...
                </div>
                <div className="w-[37px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700 text-right inline-block min-w-[37px]">
                  0/120
                </div>
              </div>
            </div>
            <div className="w-[1240px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[18px]">
                03
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100">
                <div className="relative leading-[24px]">
                  What you will teach in this course...
                </div>
                <div className="w-[37px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700 text-right inline-block min-w-[37px]">
                  0/120
                </div>
              </div>
            </div>
            <div className="w-[1240px] overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[18px]">
                04
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between pt-[13px] pb-[11px] pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100">
                <div className="relative leading-[24px]">
                  What you will teach in this course...
                </div>
                <div className="w-[37px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700 text-right inline-block min-w-[37px]">
                  0/120
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg text-gray-600 mq450:flex-wrap">
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
      </div>
    </div>
  );
};

export default AdvanceInformations;
