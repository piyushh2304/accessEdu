import { useMemo } from "react";

const Breadcrumb1 = ({
  becomeAnInstructor,
  becomeAnInstructor1,
  propMarginLeft,
  propWidth,
  propAlignSelf,
  propWidth1,
  propFlex,
  propMinWidth,
  propFlex1,
}) => {
  const breadcrumbStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMarginLeft, propWidth, propAlignSelf]);

  const locationStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const home1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const becomeAnInstructorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: propFlex1,
    };
  }, [propMinWidth, propFlex1]);

  return (
    <section
      className="ml-[-15.5px] w-[1920px] bg-gray-50 flex flex-col items-center justify-start py-10 px-5 box-border gap-[16px] max-w-[102%] shrink-0 text-center text-5xl text-gray-900 font-body-medium-400"
      style={breadcrumbStyle}
    >
      <h2 className="m-0 w-[1320px] relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
        {becomeAnInstructor}
      </h2>
      <div className="w-[1320px] flex flex-row items-start justify-center max-w-full text-left text-sm">
        <div
          className="flex flex-row items-start justify-start gap-[8px]"
          style={locationStyle}
        >
          <div
            className="relative tracking-[-0.01em] leading-[22px] text-gray-600 inline-block min-w-[39px]"
            style={home1Style}
          >
            Home
          </div>
          <div className="relative tracking-[-0.01em] leading-[22px] text-gray-600 inline-block min-w-[5px]">
            /
          </div>
          <div
            className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[52px]"
            style={becomeAnInstructorStyle}
          >
            {becomeAnInstructor1}
          </div>
          <div className="self-stretch w-[5px] relative tracking-[-0.01em] leading-[22px] hidden">
            /
          </div>
          <div className="self-stretch w-[39px] relative tracking-[-0.01em] leading-[22px] hidden">
            Home
          </div>
          <div className="self-stretch w-[5px] relative tracking-[-0.01em] leading-[22px] hidden">
            /
          </div>
          <div className="self-stretch w-[39px] relative tracking-[-0.01em] leading-[22px] hidden">
            Home
          </div>
          <div className="self-stretch w-[5px] relative tracking-[-0.01em] leading-[22px] hidden">
            /
          </div>
          <div className="self-stretch w-[39px] relative tracking-[-0.01em] leading-[22px] hidden">
            Home
          </div>
          <div className="self-stretch w-1.5 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            /
          </div>
          <div className="self-stretch w-10 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            Home
          </div>
          <div className="self-stretch w-1.5 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            /
          </div>
          <div className="self-stretch w-10 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            Home
          </div>
          <div className="self-stretch w-1.5 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            /
          </div>
          <div className="self-stretch w-10 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            Home
          </div>
          <div className="self-stretch w-1.5 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            /
          </div>
          <div className="self-stretch w-10 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            Home
          </div>
          <div className="self-stretch w-1.5 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            /
          </div>
          <div className="self-stretch w-10 relative tracking-[-0.01em] leading-[22px] hidden shrink-0">
            Home
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb1;
