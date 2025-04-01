const FrameComponent12 = () => {
  return (
    <div className="w-[424px] flex flex-col items-start justify-start gap-[24px] min-w-[424px] max-w-full mq925:flex-1 mq925:min-w-full">
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
        <img
          className="h-[129px] w-[129px] relative object-cover mq450:flex-1"
          loading="lazy"
          alt=""
          src="/01@2x.png"
        />
        <img
          className="h-[200px] w-[200px] relative object-cover mq450:flex-1"
          loading="lazy"
          alt=""
          src="/02@2x.png"
        />
      </div>
      <img
        className="self-stretch h-[424px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/07@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] mq450:flex-wrap">
        <img
          className="h-[200px] w-[200px] relative object-cover"
          loading="lazy"
          alt=""
          src="/04@2x.png"
        />
        <img
          className="h-[312px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[130px]"
          loading="lazy"
          alt=""
          src="/03@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent12;
