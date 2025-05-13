import { useMemo } from "react";

const InputField1 = ({
  labal,
  frame75,
  frame22Placeholder,
  propMinWidth,
  propWidth,
  propFlexDirection,
  propOverflow,
  propMinWidth1,
}) => {
  const labal4Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const socialStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const frameIcon1Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  const frameInputStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="w-[400px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[6px] max-w-full text-left text-sm text-gray-900 font-body-medium-400">
      <div
        className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[65px]"
        style={labal4Style}
      >
        {labal}
      </div>
      <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start py-2 px-[18px] border-[1px] border-solid border-gray-100">
        <div
          className="h-8 w-[122px] flex flex-row items-start justify-start gap-[11.5px]"
          style={frameDivStyle}
        >
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div
              className="h-5 flex flex-row items-start justify-start"
              style={socialStyle}
            >
              <img
                className="h-5 w-5 relative"
                alt=""
                src={frame75}
                style={frameIcon1Style}
              />
            </div>
          </div>
          <div className="h-[33px] w-px relative box-border border-r-[1px] border-solid border-gray-100" />
          <input
            className="w-[calc(100%_-_20px)] [border:none] [outline:none] bg-[transparent] h-7 flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-body-medium-400 text-base text-gray-500 min-w-[47px]"
            placeholder={frame22Placeholder}
            type="text"
            style={frameInputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField1;
