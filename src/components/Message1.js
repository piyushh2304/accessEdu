import { useMemo } from "react";

const Message1 = ({
  avatar,
  teacherName,
  time,
  newMessage,
  propBorderRadius,
  propMinWidth,
  propColor,
  propColor1,
  propMinWidth1,
}) => {
  const avatarIcon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const teacherName3Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const time1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const newMessage3Style = useMemo(() => {
    return {
      color: propColor1,
      minWidth: propMinWidth1,
    };
  }, [propColor1, propMinWidth1]);

  return (
    <div className="w-[424px] h-[72px] flex flex-row items-center justify-start py-3 px-6 box-border gap-[16px] z-[2] text-left text-sm text-gray-900 font-body-medium-400">
      <img
        className="h-12 w-12 relative rounded-[50%] object-cover min-h-[48px]"
        alt=""
        src={avatar}
        style={avatarIcon1Style}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
          <div
            className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[86px]"
            style={teacherName3Style}
          >
            {teacherName}
          </div>
          <div
            className="w-[23px] relative tracking-[-0.01em] leading-[22px] text-gray-500 text-right inline-block min-w-[23px]"
            style={time1Style}
          >
            {time}
          </div>
        </div>
        <div
          className="relative tracking-[-0.01em] leading-[22px] text-gray-600"
          style={newMessage3Style}
        >
          {newMessage}
        </div>
      </div>
    </div>
  );
};

export default Message1;
