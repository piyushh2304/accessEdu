const Testimonial1 = ({
  doubleQuotesR2,
  empoweringEveryLearnerReg,
  doubleQuotesR1,
  anuragRaghuwanshi,
  leader,
}) => {
  return (
    <div className="testimonial flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[390px] max-w-full text-center text-lg text-gray-900 font-body-medium-400 mq850:min-w-full">
      <div className="testimonial-header self-stretch flex flex-col items-center justify-center">
        <div className="testimonial-content self-stretch bg-gray-50 flex flex-col items-start justify-center p-6 gap-[8px]">
          <div className="testimonial-quotes self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <img
              className="testimonial-quote-icon h-12 w-12 relative overflow-hidden shrink-0 object-contain min-h-[48px]"
              loading="lazy"
              alt=""
              src="/double-quotes-r-1.svg"
            />
            <img
              className="testimonial-quote-icon h-12 w-12 relative overflow-hidden shrink-0 min-h-[48px]"
              loading="lazy"
              alt=""
              src={doubleQuotesR2}
            />
          </div>
          <div className="testimonial-text self-stretch relative tracking-[-0.01em] leading-[24px]">
            {empoweringEveryLearnerReg}
          </div>
          <div className="testimonial-quotes self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
            <img
              className="testimonial-quote-icon h-12 w-12 relative overflow-hidden shrink-0 object-contain min-h-[48px]"
              alt=""
              src={doubleQuotesR1}
            />
            <img
              className="testimonial-quote-icon h-12 w-12 relative overflow-hidden shrink-0 min-h-[48px]"
              alt=""
              src="/double-quotes-r-2-1.svg"
            />
          </div>
        </div>
        <img className="testimonial-arrow w-6 h-4 relative" alt="" src="/arrow.svg" />
      </div>
      <div className="testimonial-footer self-stretch flex flex-col items-start justify-start gap-[6px] text-base">
        <div className="testimonial-name self-stretch relative leading-[22px] font-medium">
          {anuragRaghuwanshi}
        </div>
        <div className="testimonial-position self-stretch relative text-sm tracking-[-0.01em] text-gray-600">
          <span className="leading-[22px]">{`Team `}</span>
          <span className="leading-[20px] font-medium text-secondary-500">
            {leader}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial1; 