import { useMemo } from "react";

const Message3 = ({
  helloAndThanksForSigningU,
  propWidth,
  propAlignSelf,
  propFlex,
}) => {
  const messageStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const message1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const helloAndThanksStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-xs text-gray-600 font-body-medium-400">
      <div className="self-stretch flex flex-row items-center justify-start gap-[6px] max-w-full">
        <img
          className="h-6 w-6 relative rounded-[50%] object-cover"
          alt=""
          src="/image-11@2x.png"
        />
        <div className="flex-1 relative leading-[16px] inline-block max-w-[calc(100%_-_30px)]">
          Time
        </div>
      </div>
      <div
        className="w-[536px] flex flex-col items-start justify-start max-w-full text-sm text-gray-900"
        style={messageStyle}
      >
        <div
          className="self-stretch bg-primary-100 flex flex-row items-start justify-start py-2 px-3 box-border max-w-full"
          style={message1Style}
        >
          <div
            className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block max-w-full"
            style={helloAndThanksStyle}
          >
            {helloAndThanksForSigningU}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message3;
