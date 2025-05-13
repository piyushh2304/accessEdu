import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const Area = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-sm text-gray-900 font-body-medium-400">
      <div className="w-[1320px] bg-gray-white flex flex-col items-start justify-start p-10 box-border gap-[18px] max-w-full mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
        <form className="m-0 self-stretch flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[611px] max-w-full mq1050:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
              <h2 className="m-0 flex-1 relative text-5xl tracking-[-0.01em] leading-[32px] font-semibold font-body-medium-400 text-gray-900 text-left inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                Account Settings
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[18px] max-w-full mq1050:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[300px] max-w-full">
                <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[62px]">
                  Full name
                </div>
                <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                  <input
                    className="w-20 [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                    placeholder="First name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-[0.9176] bg-gray-white box-border overflow-hidden flex flex-row items-start justify-start py-3 px-[18px] min-w-[300px] max-w-full border-[1px] border-solid border-gray-100 mq450:flex-1">
                <input
                  className="w-[79px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[67px]">
                Username
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                <input
                  className="w-[157px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                  placeholder="Enter your username"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[98px]">
                Phone Number
              </div>
              <div className="self-stretch bg-gray-white overflow-x-auto flex flex-row items-start justify-start py-3 px-[18px] gap-[6px] border-[1px] border-solid border-gray-100">
                <input
                  className="w-[42px] [border:none] [outline:none] bg-[transparent] h-[23px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-body-medium-400 font-medium text-base text-primary-500"
                  placeholder="+880"
                  type="text"
                />
                <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-3 pl-0">
                  <img
                    className="w-3 h-3 relative"
                    alt=""
                    src="/chevrondown4.svg"
                  />
                </div>
                <div className="relative text-base leading-[24px] font-body-medium-400 text-gray-500 text-left">
                  Your Phone number...
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 w-[264px] bg-gray-50 flex flex-col items-start justify-start p-8 box-border gap-[24px]">
            <div className="flex-1 flex flex-row items-end justify-start bg-[url('/public/image5@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[200px] w-[200px] relative object-cover hidden"
                alt=""
                src="/image5@2x.png"
              />
              <button className="cursor-pointer [border:none] py-3 px-[39px] bg-gray1-500 h-12 flex flex-row items-start justify-start box-border gap-[8px] z-[1]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/uploadsimple1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-gray-white text-left inline-block min-w-[90px]">
                    Upload Photo
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch relative text-xs leading-[16px] font-body-medium-400 text-gray-600 text-center">
              Image size should be under 1MB and image ration needs to be 1:1
            </div>
          </div>
        </form>
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[34px]">
            Tittle
          </div>
          <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between py-3 pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100 mq750:flex-wrap">
            <div className="relative leading-[24px]">
              Your tittle, proffesion or small biography
            </div>
            <div className="relative leading-[24px] text-gray-700 inline-block min-w-[36px]">
              0/50
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[6px]">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[66px]">
            Biography
          </div>
          <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-3 px-[18px] pb-[84px] border-[1px] border-solid border-gray-100">
            <input
              className="w-[303px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
              placeholder="Your tittle, proffesion or small biography"
              type="text"
            />
          </div>
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

export default Area;
