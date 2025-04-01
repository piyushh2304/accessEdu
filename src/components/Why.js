import Success from "./Success";

const Why = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-[100px] px-[300px] box-border gap-[86px] max-w-full text-left text-21xl text-gray-900 font-body-medium-400 mq1800:flex-wrap mq925:gap-[86px_21px] mq925:py-[65px] mq925:px-[75px] mq925:box-border mq1350:gap-[86px_43px] mq1350:pl-[150px] mq1350:pr-[150px] mq1350:box-border mq450:pt-[42px] mq450:pb-[42px] mq450:box-border">
      <img
        className="h-[587px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[454px] mq1350:min-w-full"
        alt=""
        src="/image-13@2x.png"
      />
      <div className="w-[536px] flex flex-col items-start justify-start gap-[32px] min-w-[536px] max-w-full mq1800:flex-1 mq925:gap-[16px_32px] mq1350:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq925:text-13xl mq925:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
            Why you’ll start teaching on Eduguard
          </h1>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-gray-700">{`Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a purus mollis venenatis. `}</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg">
          <Success
            techYourStudentsAsYouWant="Tech your students as you want."
            morbiQuisLoremNonOrciFerm="Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus. "
          />
          <Success
            techYourStudentsAsYouWant="Manage your course, payment in one place"
            morbiQuisLoremNonOrciFerm="Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim."
          />
          <Success
            techYourStudentsAsYouWant="Chat with your students"
            morbiQuisLoremNonOrciFerm="Nullam mattis lectus ac diam egestas posuere. Praesent auctor massa orci, ut fermentum eros dictum id. "
          />
        </div>
      </div>
    </section>
  );
};

export default Why;
