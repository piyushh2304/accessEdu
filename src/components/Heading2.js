import { useMemo } from "react";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const Heading2 = ({ propAlignSelf, propFlex, propDisplay }) => {
  const headingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const courseCurriculumStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-6 px-10 gap-[20px] z-[1] text-left text-5xl text-gray-900 font-body-medium-400 mq750:flex-wrap mq750:justify-center"
      style={headingStyle}
    >
      <h2
        className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]"
        style={courseCurriculumStyle}
      >
        Course Curriculum
      </h2>
      <div className="flex flex-row items-start justify-start gap-[12px] text-base text-primary-500">
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
  );
};

export default Heading2;
