import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";
import CircleFalseStatusFalsePo from "./CircleFalseStatusFalsePo";

const Banner = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-gray-white font-body-medium-400">
      <div className="w-[1320px] bg-secondary-900 flex flex-row items-start justify-start py-[62px] px-10 box-border max-w-full mq750:gap-[60px_30px]">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="w-[328px] flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
            <img
              className="h-20 w-20 relative rounded-21xl object-cover"
              loading="lazy"
              alt=""
              src="/avatar3@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[146px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <h3 className="m-0 self-stretch relative text-inherit leading-[26px] font-semibold font-inherit mq450:text-base mq450:leading-[21px]">
                  Vako Shvili
                </h3>
                <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray1-100 whitespace-nowrap">
                  vako.shvili@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border min-w-[408px] max-w-full text-right text-sm text-gray1-300 mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq750:flex-wrap">
              <div className="w-[63px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[63px]">
                  1/4 Steps
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[203px]">
                <div className="self-stretch h-4 relative">
                  <div className="absolute top-[0px] left-[0px] bg-gray1-400 w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] bg-success-500 w-[78px] h-4 z-[1]" />
                </div>
              </div>
              <div className="w-[204px] relative text-base leading-[22px] font-semibold text-gray-white text-left inline-block shrink-0">
                25% Completed
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <SizeLargePositionsPrimary
                button="Edit Biography"
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
                buttonMinWidth="111px"
                buttonColor="#fff"
                buttonDisplay="inline-block"
                buttonTextAlign="left"
              />
              <CircleFalseStatusFalsePo
                arrowRight="/arrowdown.svg"
                circleFalseStatusFalsePoPadding="12px"
                circleFalseStatusFalsePoTransform="unset"
                circleFalseStatusFalsePoBackgroundColor="rgba(255, 255, 255, 0.05)"
                arrowRightIconTransform="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
