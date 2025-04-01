const FrameComponent19 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <div className="w-[1320px] bg-gray-white box-border flex flex-col items-start justify-start max-w-full z-[1] border-[1px] border-solid border-primary-200">
        <div className="self-stretch flex flex-row items-center justify-between p-10 box-border max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[720px] flex flex-row items-center justify-start gap-[24px] min-w-[720px] max-w-full lg:flex-1 lg:min-w-full mq825:flex-wrap">
            <img
              className="h-[110px] w-[110px] relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/photos1@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-center gap-[14px] min-w-[381px] max-w-full mq825:min-w-full">
              <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                Kevin Gilbert
              </h2>
              <div className="self-stretch relative text-base leading-[24px] text-gray-600">{`Web Designer & Best-Selling Instructor`}</div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-0 px-8 bg-primary-100 h-14 flex flex-row items-center justify-center box-border gap-[12px] whitespace-nowrap hover:bg-mistyrose">
            <div className="relative text-lg tracking-[-0.01em] leading-[56px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left">
              Become Instructor
            </div>
            <img className="h-6 w-6 relative" alt="" src="/arrowright.svg" />
          </button>
        </div>
        <div className="self-stretch h-[62px] flex flex-col items-center justify-center relative max-w-full text-center text-base text-gray-700 lg:h-auto lg:min-h-[62]">
          <div className="w-[1321px] h-px absolute !m-[0] top-[0px] left-[0px] box-border border-t-[1px] border-solid border-primary-200" />
          <div className="w-[1128px] !m-[0] absolute top-[0px] left-[96px] flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
              <div className="flex-1 relative leading-[22px] font-medium">
                Dashboard
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
              <div className="flex-1 relative leading-[22px] font-medium">
                Courses
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
              <div className="flex-1 relative leading-[22px] font-medium">
                Teachers
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
              <div className="flex-1 relative leading-[22px] font-medium">
                Message
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px]">
              <div className="flex-1 relative leading-[22px] font-medium">
                Notes
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-center py-5 px-0">
              <div className="self-stretch w-[168px] relative leading-[22px] font-medium inline-block shrink-0">
                Purchase History
              </div>
            </div>
            <div className="flex-1 bg-gray-white shadow-[0px_-3px_0px_#ff6636_inset,_-1px_0px_0px_#ffddd1_inset] flex flex-row items-start justify-start py-5 px-0 box-border min-w-[165px] max-w-[168px] text-gray-900">
              <div className="flex-1 relative leading-[22px] font-medium">
                Settings
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent19;
