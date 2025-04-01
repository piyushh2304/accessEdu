const Contents = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-left text-21xl text-gray-900 font-body-medium-400 mq925:gap-[16px_32px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq925:text-13xl mq925:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          20k+ Instructor created their success story with eduguard
        </h1>
        <h3 className="m-0 self-stretch relative text-xl leading-[32px] font-normal font-inherit text-gray-700 mq450:text-base mq450:leading-[26px]">
          Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros
          justo, id commodo ante laoreet nec. Phasellus aliquet, orci id
          pellentesque mollis.
        </h3>
      </div>
      <div className="self-stretch bg-primary-100 flex flex-col items-start justify-start p-8 gap-[20px] text-lg">
        <img
          className="w-14 h-14 relative"
          loading="lazy"
          alt=""
          src="/quotes.svg"
        />
        <div className="self-stretch relative tracking-[-0.01em] leading-[26px]">
          Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
          Pellentesque ullamcorper auctor ante, egestas interdum quam facilisis
          commodo. Phasellus efficitur quis ex in consectetur. Mauris tristique
          suscipit metus, a molestie dui dapibus vel.
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[12px]">
        <button className="cursor-pointer [border:none] p-3 bg-gray-50 flex flex-row items-start justify-start [transform:_rotate(180deg)]">
          <img
            className="h-6 w-6 relative [transform:_rotate(-180deg)]"
            alt=""
            src="/arrowright-41.svg"
          />
        </button>
        <button className="cursor-pointer [border:none] p-3 bg-primary-500 shadow-[0px_6px_20px_rgba(204,_82,_43,_0.5)] flex flex-row items-start justify-start">
          <img className="h-6 w-6 relative" alt="" src="/arrowright-5.svg" />
        </button>
      </div>
    </div>
  );
};

export default Contents;
