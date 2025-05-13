import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const CTA1 = () => {
  return (
    <div className="self-stretch bg-gray-900 shadow-[0px_-1px_0px_rgba(54,_59,_71,_0.5)_inset] flex flex-row items-center justify-between pt-0 px-[300px] pb-20 box-border max-w-full gap-[20px] text-left text-21xl text-gray-white font-body-medium-400 mq1800:flex-wrap mq925:pl-[75px] mq925:pr-[75px] mq925:box-border mq1350:pl-[150px] mq1350:pr-[150px] mq1350:box-border mq450:pl-5 mq450:pr-5 mq450:pb-[52px] mq450:box-border">
      <div className="w-[424px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[424px] max-w-full mq1800:flex-1 mq1350:min-w-full mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq925:text-13xl mq925:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            Start teaching with us and inspire others
          </h1>
          <div className="self-stretch relative text-base leading-[24px] text-gray-300">{`Become an instructor & start teaching with AccessEdu. Create a success story with us.`}</div>
        </div>
        <SizeLargePositionsPrimary
          button="Register now"
          sizeLargePositionsPrimaryBackgroundColor="#ff6636"
          sizeLargePositionsPrimaryBorder="none"
          sizeLargePositionsPrimaryPosition="unset"
          sizeLargePositionsPrimaryTop="unset"
          sizeLargePositionsPrimaryLeft="unset"
          sizeLargePositionsPrimaryWidth="unset"
          sizeLargePositionsPrimaryMarginLeft="unset"
          sizeLargePositionsPrimaryMargin="unset"
          sizeLargePositionsPrimaryRight="unset"
          sizeLargePositionsPrimaryBottom="unset"
          buttonLineHeight="64px"
          buttonMargin="unset"
          buttonMinWidth="127px"
          buttonColor="#fff"
          buttonDisplay="inline-block"
          buttonTextAlign="left"
        />
      </div>
      <img
        className="h-[382px] w-[648px] relative max-w-full mq1800:flex-1"
        alt=""
        src="/union-2.svg"
      />
    </div>
  );
};

export default CTA1;
