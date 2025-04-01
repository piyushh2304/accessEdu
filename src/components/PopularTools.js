const PopularTools = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-0 px-5 box-border gap-[24px] max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <div className="w-[1320px] flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap mq450:justify-center">
        <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Popular Articles
        </h2>
        <div className="h-6 flex flex-row items-start justify-start gap-[12px]">
          <img
            className="h-6 w-6 relative min-h-[24px]"
            loading="lazy"
            alt=""
            src="/arrowleft1.svg"
          />
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/arrowright2.svg"
          />
        </div>
      </div>
      <div className="w-[1096px] flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full text-center text-base">
        <div className="flex-1 bg-gray-white box-border flex flex-col items-center justify-center py-6 px-0 gap-[8px] min-w-[196px] max-w-[200px] border-[1px] border-solid border-gray-100">
          <div className="self-stretch relative leading-[22px] font-medium">
            NFB
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-gray-500">
            The Importance of Accessibility in Online Education
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-center justify-center py-6 px-0 gap-[8px] min-w-[196px] max-w-[200px] border-[1px] border-solid border-gray-100">
          <div className="self-stretch relative leading-[22px] font-medium">
            Help Age India
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-gray-500">
            Empowering Learners with Disabilities Through Technology
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-center justify-center py-6 px-0 gap-[8px] min-w-[196px] max-w-[200px] border-[1px] border-solid border-gray-100">
          <div className="self-stretch relative leading-[22px] font-medium">
            NAD
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-gray-500">
            Building Inclusive Learning Communities
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-center justify-center py-6 px-0 gap-[8px] min-w-[196px] max-w-[200px] border-[1px] border-solid border-gray-100">
          <div className="self-stretch relative leading-[22px] font-medium">
            Diya Foundation
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-gray-500">
            The Future of Accessibility in Education
          </div>
        </div>
        <div className="flex-1 bg-gray-white box-border flex flex-col items-center justify-center py-6 px-0 gap-[8px] min-w-[196px] max-w-[200px] border-[1px] border-solid border-gray-100">
          <div className="self-stretch relative leading-[22px] font-medium">
            NCLD
          </div>
          <div className="self-stretch relative text-xs leading-[16px] text-gray-500">
            Promoting Digital Accessibility for specially abled people
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularTools;
