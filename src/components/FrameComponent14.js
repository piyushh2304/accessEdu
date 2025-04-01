import Steps3 from "./Steps3";

const FrameComponent14 = () => {
  return (
    <section className="self-stretch bg-gray-50 flex flex-col items-center justify-center py-20 px-5 box-border gap-[40px] max-w-full text-center text-21xl text-gray-900 font-body-medium-400 mq925:gap-[20px_40px] mq925:pt-[52px] mq925:pb-[52px] mq925:box-border">
      <h1 className="m-0 w-[518px] relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit inline-block max-w-full mq925:text-13xl mq925:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
        How you'll become successful instructor
      </h1>
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full text-lg">
        <Steps3
          newspaperClipping="/newspaperclipping.svg"
          applyToBecomeInstructor="1. Apply to become instructor."
          sedEtMattisUrnaSedTempusF="Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu."
        />
        <Steps3
          newspaperClipping="/identificationcard.svg"
          applyToBecomeInstructor={`2. Setup & edit your profile.`}
          sedEtMattisUrnaSedTempusF="Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper."
          propBackgroundColor="#fff0f0"
          propHeight="80px"
        />
        <div className="flex-1 bg-gray-white flex flex-col items-center justify-center p-6 box-border gap-[24px] min-w-[284px] max-w-[312px]">
          <div className="h-20 bg-primary-100 flex flex-row items-start justify-start p-5 box-border">
            <img
              className="h-10 w-10 relative"
              loading="lazy"
              alt=""
              src="/playcircle3.svg"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
            <div className="self-stretch relative leading-[24px] font-medium">
              3. Create your new course
            </div>
            <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">{`Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. `}</div>
          </div>
        </div>
        <Steps3
          newspaperClipping="/handshake1.svg"
          applyToBecomeInstructor={`4. Start teaching & earning`}
          sedEtMattisUrnaSedTempusF="Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque. "
          propBackgroundColor="#e1f7e3"
          propHeight="unset"
        />
      </div>
    </section>
  );
};

export default FrameComponent14;
