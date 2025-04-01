import Testimonial1 from "./Testimonial1";

const Testimonials = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-[56.29999999999927px] pb-[82.00000000000091px] pr-16 pl-[70px] box-border relative gap-[30px] min-h-[539px] max-w-full text-center text-21xl text-gray-900 font-body-medium-400 mq450:pt-[37px] mq450:pb-[53px] mq450:box-border mq850:gap-[15px] mq1225:pl-[35px] mq1225:pr-8 mq1225:box-border">
      <h1 className="!m-[0] w-[1319px] relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit inline-block mq450:text-5xl mq450:leading-[29px] mq850:text-13xl mq850:leading-[38px]">
        Meet the Team
      </h1>
      <Testimonial1
        doubleQuotesR2="/double-quotes-r-2-1.svg"
        empoweringEveryLearnerReg="Empowering every learner, regardless of ability, to unlock their full potential through accessible and inclusive education."
        doubleQuotesR1="/double-quotes-r-1.svg"
        anuragRaghuwanshi="Pratham Tomar"
        leader="Member"
      />
      <Testimonial1
        doubleQuotesR2="/double-quotes-r-2-1.svg"
        empoweringEveryLearnerReg="Accessibility isn't a feature; it's a fundamental right. Join us as we strive to make education accessible to all learners."
        doubleQuotesR1="/double-quotes-r-1.svg"
        anuragRaghuwanshi="Mohit Wadhwani"
        leader="Member"
      />
      <Testimonial1
        doubleQuotesR2="/double-quotes-r-2-1.svg"
        empoweringEveryLearnerReg="Every line of code we write, every feature we design, is driven by our commitment to accessibility and inclusion."
        doubleQuotesR1="/double-quotes-r-1.svg"
        anuragRaghuwanshi="Yash Rathore"
        leader="Member"
      />
      <Testimonial1
        doubleQuotesR2="/double-quotes-r-2-1.svg"
        empoweringEveryLearnerReg="Joining AccessEdu isn't just a job; it's about changing lives for the better, especially for people with disabilities."
        doubleQuotesR1="/double-quotes-r-1.svg"
        anuragRaghuwanshi="Piyush Rajput"
        leader="Leader"
      />
    </div>
  );
};

export default Testimonials;
