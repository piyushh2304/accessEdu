const VideoPlayer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-end pt-[622px] px-0 pb-0 box-border relative max-w-full text-left text-sm text-gray-white font-body-medium-400 mq925:pt-[404px] mq925:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/full-image@2x.png"
      />
      <div className="w-full h-32 absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] z-[1]" />
      <div className="self-stretch h-1 flex flex-row items-start justify-start py-0 pr-[18px] pl-[18.5px] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start relative max-w-full z-[2]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray1-100" />
          <div className="self-stretch w-[560.6px] relative bg-gray-white max-w-full z-[1]" />
          <div className="self-stretch w-[358.9px] relative bg-primary-500 max-w-full z-[2] ml-[-560.6px]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between p-5 gap-[20px] z-[2] mq450:flex-wrap">
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div className="h-6 flex flex-row items-center justify-center gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/lecture.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/pause.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/lecture-1.svg"
            />
          </div>
          <div className="w-[67px] flex flex-row items-start justify-start">
            <div className="flex-1 relative tracking-[-0.01em] leading-[22px] [text-shadow:0px_0px_12px_rgba(0,_0,_0,_0.3)]">
              1:25
            </div>
            <div className="w-[9px] relative tracking-[-0.01em] leading-[22px] inline-block [text-shadow:0px_0px_12px_rgba(0,_0,_0,_0.3)]">
              {" "}
              /
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[22px] [text-shadow:0px_0px_12px_rgba(0,_0,_0,_0.3)]">
              {" "}
              9:15
            </div>
          </div>
        </div>
        <div className="h-6 flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/volume.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/caption.svg"
          />
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/gear2.svg"
          />
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/cornersout.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
