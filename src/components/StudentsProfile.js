import { useMemo } from "react";
import SizeMediumPositionsPrimary1 from "./SizeMediumPositionsPrimary1";

const StudentsProfile = ({
  arrowRight,
  propAlignSelf,
  propFlex,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propBackgroundColor1,
  propBoxShadow1,
  propColor1,
  propBackgroundColor2,
  propBoxShadow2,
  propColor2,
  propBackgroundColor3,
  propBoxShadow3,
  propColor3,
}) => {
  const studentsProfileStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const tabsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propBackgroundColor, propBoxShadow]);

  const overviewStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const tabs1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      boxShadow: propBoxShadow1,
    };
  }, [propBackgroundColor1, propBoxShadow1]);

  const overview1Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const tabs2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      boxShadow: propBoxShadow2,
    };
  }, [propBackgroundColor2, propBoxShadow2]);

  const overview2Style = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const tabs3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
      boxShadow: propBoxShadow3,
    };
  }, [propBackgroundColor3, propBoxShadow3]);

  const overview3Style = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div
      className="self-stretch bg-gray-white box-border flex flex-col items-start justify-start max-w-full z-[1] text-left text-5xl text-gray-900 font-body-medium-400 border-[1px] border-solid border-primary-200"
      style={studentsProfileStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between p-10 box-border max-w-full gap-[20px] lg:flex-wrap">
        <div className="w-[720px] flex flex-row items-center justify-start gap-[24px] min-w-[720px] max-w-full lg:flex-1 lg:min-w-full mq825:flex-wrap">
          <img
            className="h-[110px] w-[110px] relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/photos1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center gap-[14px] min-w-[381px] max-w-full mq825:min-w-full">
            <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
              Kevin Gilbert
            </h2>
            <div className="self-stretch relative text-base leading-[24px] text-gray-600">{`Web Designer & Best-Selling Instructor`}</div>
          </div>
        </div>
        <SizeMediumPositionsPrimary1
          button="Become Instructor"
          arrowRight="/arrowright.svg"
          sizeMediumPositionsPrimarBackgroundColor="#ffeee8"
          sizeMediumPositionsPrimarBorder="none"
          sizeMediumPositionsPrimarBoxShadow="unset"
          buttonColor="#ff6636"
          buttonMinWidth="unset"
          buttonLineHeight="56px"
          buttonDisplay="inline-block"
        />
      </div>
      <div className="self-stretch h-[62px] flex flex-col items-center justify-center relative max-w-full text-center text-base text-gray-700 lg:h-auto lg:min-h-[62]">
        <div className="w-[1321px] h-px absolute !m-[0] top-[0px] left-[0px] box-border border-t-[1px] border-solid border-primary-200" />
        <div className="w-[1128px] !m-[0] absolute top-[0px] left-[96px] flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div
            className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]"
            style={tabsStyle}
          >
            <div
              className="flex-1 relative leading-[22px] font-medium"
              style={overviewStyle}
            >
              Dashboard
            </div>
          </div>
          <div
            className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]"
            style={tabs1Style}
          >
            <div
              className="flex-1 relative leading-[22px] font-medium"
              style={overview1Style}
            >
              Courses
            </div>
          </div>
          <div
            className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]"
            style={tabs2Style}
          >
            <div
              className="flex-1 relative leading-[22px] font-medium"
              style={overview2Style}
            >
              Teachers
            </div>
          </div>
          <div
            className="flex-1 bg-gray-white shadow-[0px_-3px_0px_#ff6636_inset] flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px] text-gray-900"
            style={tabs3Style}
          >
            <div
              className="flex-1 relative leading-[22px] font-medium"
              style={overview3Style}
            >
              Message
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
            <div className="flex-1 relative leading-[22px] font-medium">
              Notes
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
            <div className="flex-1 relative leading-[22px] font-medium">
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsProfile;
