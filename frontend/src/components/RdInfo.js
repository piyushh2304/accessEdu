import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SizeMediumPositionsPrimary2 from "./SizeMediumPositionsPrimary2";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const RdInfo = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/04-course-list");
  }, [navigate]);

  return (
    <div className="self-stretch bg-gray-50 flex flex-row items-center justify-between py-5 px-8 box-border max-w-full gap-[20px] text-left text-lg text-gray-900 font-body-medium-400 mq1825:flex-wrap">
      <div className="w-[1229px] flex flex-row items-center justify-start gap-[16px] max-w-full mq1350:flex-wrap">
        <button
          className="cursor-pointer [border:none] p-[17px] bg-gray-white h-[58px] w-[58px] rounded-81xl flex flex-row items-start justify-start box-border"
          onClick={onButtonClick}
        >
          <img className="h-6 w-6 relative" alt="" src="/arrowleft.svg" />
        </button>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[751px] max-w-full mq925:min-w-full">
          <div className="self-stretch relative leading-[24px] font-medium">
            Complete Indian Sign Language for understanding the basics of sign
            language by pragya
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px] text-sm text-gray-700 mq450:flex-wrap">
            <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/foldernotchopen.svg"
              />
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[69px]">
                6 Sections
              </div>
            </div>
            <div className="h-[22px] flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/playcircle1.svg"
              />
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[82px]">
                202 lectures
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <img
                className="h-5 w-5 relative"
                loading="lazy"
                alt=""
                src="/clock1.svg"
              />
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[56px]">
                19h 37m
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[12px] max-w-full mq450:flex-wrap">
        <SizeMediumPositionsPrimary2
          play="/star1.svg"
          button="Write a Review"
          showPlayIcon={false}
          sizeMediumPositionsPrimarWidth="unset"
          sizeMediumPositionsPrimarAlignSelf="unset"
          sizeMediumPositionsPrimarBackgroundColor="#fff"
          sizeMediumPositionsPrimarGap="12px"
          sizeMediumPositionsPrimarBorder="unset"
          buttonLetterSpacing="-0.01em"
          buttonLineHeight="48px"
          buttonColor="#ff6636"
          buttonMinWidth="116px"
        />
        <SizeLargePositionsPrimary
          button="Next lecture"
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
          buttonMinWidth="98px"
          buttonColor="#fff"
          buttonDisplay="inline-block"
          buttonTextAlign="left"
        />
      </div>
    </div>
  );
};

export default RdInfo;
