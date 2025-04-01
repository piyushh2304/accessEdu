import FunFact2 from "./FunFact2";
import FunFact4 from "./FunFact4";
import FunFact5 from "./FunFact5";

const FrameComponent9 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-start gap-[24px_22.7px] min-h-[240px] max-w-full">
        <FunFact2
          chatCircleDots="/playcircle2.svg"
          proximitySensor="957"
          courseInstructors="Enrolled Courses"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#ffeee8"
        />
        <FunFact2
          chatCircleDots="/checksquareoffset.svg"
          proximitySensor="19"
          courseInstructors="Active Courses"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#ebebff"
        />
        <FunFact4
          users="/users2.svg"
          sound="241"
          courseInstructors="Course Instructors"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#fff2e6"
        />
        <FunFact4
          users="/trophy.svg"
          sound="951"
          courseInstructors="Completed Courses"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#e1f7e3"
        />
        <FunFact2
          chatCircleDots="/usercircle.svg"
          proximitySensor="1,674,767"
          courseInstructors="Students"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#fff0f0"
        />
        <FunFact5
          notepad="/notepad1.svg"
          prop="3"
          enrolledCourses="Online Courses"
        />
        <FunFact5
          notepad="/creditcard1.svg"
          prop="$7,461,767"
          enrolledCourses="USD Total Earning"
          propHeight="unset"
          propBackgroundColor="#76abae"
          propAlignSelf="unset"
        />
        <FunFact4
          users="/stack-11.svg"
          sound="56,489"
          courseInstructors="Course Sold"
          propAlignSelf="unset"
          propWidth="312px"
          propBackgroundColor="#ebebff"
        />
      </div>
    </div>
  );
};

export default FrameComponent9;
