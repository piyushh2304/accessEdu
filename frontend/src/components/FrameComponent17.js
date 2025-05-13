import { useMemo } from "react";

const FrameComponent17 = ({
  signInWith,
  propRight,
  propLeft,
  propWidth,
  propMinWidth,
  propDisplay,
  propDisplay1,
  propDisplay2,
}) => {
  const deviderStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const signInWithStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const googleStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const facebookStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const appleStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-center text-sm text-gray-500 font-body-medium-400">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[23px] pl-5">
        <div className="flex flex-row items-start justify-start relative">
          <div
            className="h-px w-[649px] absolute !m-[0] right-[-272px] bottom-[6px] box-border border-t-[1px] border-solid border-gray-100"
            style={deviderStyle}
          />
          <div className="bg-gray-white flex flex-row items-start justify-start py-0 px-2 whitespace-nowrap z-[1]">
            <div
              className="w-[93px] relative leading-[100%] uppercase font-medium inline-block min-w-[93px]"
              style={signInWithStyle}
            >
              {signInWith}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[24px] text-gray-900 mq800:flex-wrap">
        <div className="flex-1 bg-gray-white box-border flex flex-row items-start justify-start min-w-[150px] border-[1px] border-solid border-gray-100">
          <div className="h-11 w-11 bg-gray-white box-border flex flex-row items-start justify-start py-3 px-[11px] border-[1px] border-solid border-gray-100">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/search-1.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div
              className="self-stretch relative tracking-[-0.01em] leading-[22px]"
              style={googleStyle}
            >
              Google
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-row items-start justify-start min-w-[150px] border-[1px] border-solid border-gray-100">
          <div className="h-11 w-11 bg-gray-white box-border flex flex-row items-start justify-start py-3 px-[11px] border-[1px] border-solid border-gray-100">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/facebook-1.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div
              className="self-stretch relative tracking-[-0.01em] leading-[22px]"
              style={facebookStyle}
            >
              Facebook
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-row items-start justify-start min-w-[150px] border-[1px] border-solid border-gray-100">
          <div className="h-11 w-11 bg-gray-white box-border flex flex-row items-start justify-start py-3 px-[11px] border-[1px] border-solid border-gray-100">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/apple-2.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div
              className="self-stretch relative tracking-[-0.01em] leading-[22px]"
              style={appleStyle}
            >
              Apple
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
