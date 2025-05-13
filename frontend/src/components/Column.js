import { useMemo } from "react";

const Column = ({ nFB, propMinWidth, propColor }) => {
  const nFBIndiaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const nFBStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="flex flex-col items-start justify-start text-left text-5xl text-crimson font-body-medium-400">
      <div className="bg-gray-white shadow-[0px_0px_32px_rgba(9,_26,_68,_0.07)] flex flex-row items-center justify-center py-[34px] px-[45.5px] gap-[10px]">
        <h2
          className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit inline-block min-w-[109px] mq450:text-lgi mq450:leading-[26px]"
          style={nFBIndiaStyle}
        >
          <span style={nFBStyle}>{nFB}</span>
          <span className="text-black"> India</span>
        </h2>
        <div className="h-[100px] w-[100px] relative hidden" />
      </div>
    </div>
  );
};

export default Column;
