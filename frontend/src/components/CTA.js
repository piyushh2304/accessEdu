import SizeMediumPositionsPrimary1 from "./SizeMediumPositionsPrimary1";
import Process from "./Process";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="self-stretch bg-gray-50 flex flex-row flex-wrap items-center justify-center pt-20 px-[300px] pb-80 box-border gap-[24px] max-w-full text-left text-13xl text-gray-white font-body-medium-400 mq850:pt-[52px] mq850:px-[75px] mq850:pb-52 mq850:box-border mq1225:pl-[150px] mq1225:pr-[150px] mq1225:box-border">
      <div className="flex-1 flex flex-col items-start justify-start p-10 box-border gap-[24px] bg-[url('/public/become-an-instructor@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[400px] max-w-full mq1225:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[50px] font-semibold font-inherit mq850:text-7xl mq850:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
            Become an instructor
          </h1>
          <div className="w-[290px]  relative text-sm tracking-[-0.01em] leading-[22px] inline-block max-w-full">
            Instructors from around the world teach millions of learners and
            special abled learner on AccessEdu. We provide the tools and skills
            to teach what you love.
          </div>
        </div>
        <Link to="/11-become-an-instrcutor" style={{ textDecoration: 'none' }}>
        <SizeMediumPositionsPrimary1
          button="Start teaching"
          arrowRight="/arrowright.svg"
          sizeMediumPositionsPrimarBackgroundColor="#fff"
          sizeMediumPositionsPrimarBorder="none"
          sizeMediumPositionsPrimarBoxShadow="0px 6px 16px rgba(0, 0, 0, 0.01)"
          buttonColor="#ff6636"
          buttonMinWidth="112px"
          buttonLineHeight="48px"
          buttonDisplay="inline-block"
        />
        </Link>
      </div>
      <div className="flex-1 bg-gray-white flex flex-col items-start justify-start p-10 box-border gap-[27px] min-w-[421px] max-w-full text-gray-900 mq1225:min-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[40px] font-semibold font-inherit inline-block max-w-full mq850:text-7xl mq850:leading-[32px] mq450:text-lgi mq450:leading-[24px]">{`Your teaching & earning steps`}</h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-center text-5xl text-secondary-500">
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq850:flex-wrap">
            <Process
              labelContainer="1"
              applyToBecomeInstructor="Apply to become instructor"
            />
            <Process
              labelContainer="2"
              applyToBecomeInstructor={`Build & edit your profile`}
              propFlex="1"
              propMinWidth="178px"
              propBackgroundColor="#fff0f0"
              propColor="#ff6636"
              propFlex1="1"
              propMinWidth1="134px"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq850:flex-wrap">
            <Process
              labelContainer="3"
              applyToBecomeInstructor="Create your new course"
              propFlex="1"
              propMinWidth="178px"
              propBackgroundColor="#fff0f0"
              propColor="#e34444"
              propFlex1="1"
              propMinWidth1="134px"
            />
            <Process
              labelContainer="4"
              applyToBecomeInstructor={`Start teaching & earning`}
              propFlex="1"
              propMinWidth="178px"
              propBackgroundColor="#e1f7e3"
              propColor="#23bd33"
              propFlex1="1"
              propMinWidth1="134px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
