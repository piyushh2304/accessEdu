import InputField1 from "./InputField1";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const FrameComponent4 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-gray-900 font-body-medium-400">
      <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start p-10 box-border gap-[20px] max-w-full mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <div className="w-[584px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-5xl">
          <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
            Social Profile
          </h2>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[113px]">
            Personal Website
          </div>
          <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start py-2 px-[18px] border-[1px] border-solid border-gray-100">
            <div className="h-8 w-[299px] flex flex-row items-start justify-start gap-[11.5px]">
              <div className="h-[26px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <img className="w-5 h-5 relative" alt="" src="/globe.svg" />
              </div>
              <div className="h-[33px] w-px relative box-border border-r-[1px] border-solid border-gray-100" />
              <input
                className="w-[calc(100%_-_20px)] [border:none] [outline:none] bg-[transparent] h-7 flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-body-medium-400 text-base text-gray-500 min-w-[153px]"
                placeholder="Personal website or portfolio url..."
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-0 px-0 pb-1 box-border gap-[20px_18px] min-h-[176px] max-w-full">
          <InputField1
            labal="Facebook"
            frame75="/frame-751.svg"
            frame22Placeholder="Username"
          />
          <InputField1
            labal="Instagram"
            frame75="/instragarm2.svg"
            frame22Placeholder="Username"
            propMinWidth="65px"
            propWidth="122px"
            propFlexDirection="row"
            propOverflow="unset"
            propMinWidth1="47px"
          />
          <InputField1
            labal="Linkedin"
            frame75="/linkedin2.svg"
            frame22Placeholder="Username"
            propMinWidth="55px"
            propWidth="122px"
            propFlexDirection="row"
            propOverflow="unset"
            propMinWidth1="47px"
          />
          <InputField1
            labal="Twitter"
            frame75="/twitter2.svg"
            frame22Placeholder="Username"
            propMinWidth="46px"
            propWidth="122px"
            propFlexDirection="column"
            propOverflow="hidden"
            propMinWidth1="47px"
          />
          <InputField1
            labal="Whatsapp"
            frame75="/whatsapp-1.svg"
            frame22Placeholder="Phone number"
            propMinWidth="66px"
            propWidth="155px"
            propFlexDirection="column"
            propOverflow="hidden"
            propMinWidth1="67px"
          />
          <InputField1
            labal="Youtube"
            frame75="/frame-742@2x.png"
            frame22Placeholder="Username"
            propMinWidth="54px"
            propWidth="122px"
            propFlexDirection="column"
            propOverflow="unset"
            propMinWidth1="47px"
          />
        </div>
        <SizeLargePositionsPrimary
          button="Save changes"
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
          buttonLineHeight="48px"
          buttonMargin="unset"
          buttonMinWidth="110px"
          buttonColor="#fff"
          buttonDisplay="inline-block"
          buttonTextAlign="left"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
