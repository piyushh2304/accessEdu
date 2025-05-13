import { useMemo } from "react";

const Message2 = ({
  profile,
  teacherName,
  time,
  newMessage,
  propMinWidth,
  propMinWidth1,
}) => {
  const teacherName2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const newMessage2Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="w-[424px] h-[72px] flex flex-row items-start justify-start py-3 px-6 box-border gap-[16px] z-[2] text-left text-sm text-gray-900 font-body-medium-400">
      <img className="h-12 w-12 relative min-h-[48px]" alt="" src={profile} />
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div
              className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[88px]"
              style={teacherName2Style}
            >
              {teacherName}
            </div>
          </div>
          <div className="w-[21px] relative tracking-[-0.01em] leading-[22px] text-gray-600 text-right inline-block min-w-[21px]">
            {time}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gray-600">
          <div
            className="relative tracking-[-0.01em] leading-[22px]"
            style={newMessage2Style}
          >
            {newMessage}
          </div>
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="w-2 h-2 relative rounded-[50%] bg-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message2;
