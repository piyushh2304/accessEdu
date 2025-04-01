import { useMemo } from "react";

const Process = ({
  labelContainer,
  applyToBecomeInstructor,
  propFlex,
  propMinWidth,
  propBackgroundColor,
  propColor,
  propFlex1,
  propMinWidth1,
}) => {
  const processStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const numberStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const labelContainerStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const applyToBecomeStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth1,
    };
  }, [propFlex1, propMinWidth1]);

  return (
    <div
      className="flex flex-row items-center justify-center gap-[16px] text-center text-5xl text-secondary-500 font-body-medium-400 mq850:flex-wrap"
      style={processStyle}
    >
      <div
        className="h-[52px] w-[52px] rounded-81xl bg-secondary-100 flex flex-col items-center justify-center py-[11px] px-0 box-border"
        style={numberStyle}
      >
        <div
          className="self-stretch relative leading-[30px] font-semibold mq450:text-lgi mq450:leading-[24px]"
          style={labelContainerStyle}
        >
          {labelContainer}
        </div>
      </div>
      <div
        className="relative text-base leading-[24px] text-gray-900 text-left"
        style={applyToBecomeStyle}
      >
        {applyToBecomeInstructor}
      </div>
    </div>
  );
};

export default Process;
