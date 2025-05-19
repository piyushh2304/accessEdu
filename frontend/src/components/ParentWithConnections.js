import { useNavigate } from "react-router-dom";
import StudentsProfile from "./StudentsProfile";
import FunFact1 from "./FunFact1";
import FunFact from "./FunFact";
import CircleFalseStatusFalsePo from "./CircleFalseStatusFalsePo";

const ParentWithConnections = () => {
  const navigate = useNavigate();

  const handleWatchLecture = (courseId) => {
    navigate(`/video-player/${courseId}`);
  };

  const courses = [
    {
      courseId: 1,
      image: "/course-images3@2x.png",
      title: "Javascript Promises",
      subtitle: "1. Intorductions",
      isActive: true,

    },
    {
      courseId: 2,
      image: "/course-images-115@2x.png",
      title: "Javascript async/await",
      subtitle: "What You'll Need to Get Started",
      isActive: true,
    },
    {
      courseId: 3,
      image: "/course-images-25@2x.png",
      title: "Copywriting - Become a Freelance Copywriter",
      subtitle: "14. How to get started with figma ",
      isActive: true,
    },
    {
      courseId: 4,
      image: "/course-images-92@2x.png",
      title: "2021 Complete Python Bootcamp",
      subtitle: "9. Advanced CSS ",
      isActive: true,
    },
  ];

  return (
    <div className="w-[1320px] flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-5xl text-gray-900 font-body-medium-400 mq825:gap-[20px_40px]">
      <StudentsProfile
        arrowRight="/arrowright.svg"
        propAlignSelf="stretch"
        propFlex="unset"
        propBackgroundColor="#fff"
        propBoxShadow="0px -3px 0px #ff6636 inset"
        propColor="#1d2026"
        propBackgroundColor1="unset"
        propBoxShadow1="unset"
        propColor1="#4e5566"
        propBackgroundColor2="unset"
        propBoxShadow2="unset"
        propColor2="#4e5566"
        propBackgroundColor3="unset"
        propBoxShadow3="unset"
        propColor3="#4e5566"
      />
      <div className="self-stretch flex flex-col items-start justify-center gap-[24px]">
        <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit inline-block min-w-[125px] mq450:text-lgi mq450:leading-[26px]">
          Dashboard
        </h2>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
          <FunFact1
            playCircle="/playcircle5.svg"
            valueSplitter="957"
            enrolledCourses="Enrolled Courses"
          />
          <FunFact1
            playCircle="/checksquareoffset1.svg"
            valueSplitter="6"
            enrolledCourses="Active Courses"
            propBackgroundColor="#ebebff"
          />
          <FunFact
            trophy="/trophy2.svg"
            prop="951"
            completedCourses="Completed Courses"
          />
          <FunFact
            trophy="/users5.svg"
            prop="241"
            completedCourses="Course Instructors"
            propBackgroundColor="#fff2e6"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Let’s start learning, Kevin
          </h2>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <CircleFalseStatusFalsePo
              arrowRight="/arrowright.svg"
              circleFalseStatusFalsePoPadding="8px"
              circleFalseStatusFalsePoTransform="rotate(180deg)"
              circleFalseStatusFalsePoBackgroundColor="#ffeee8"
              arrowRightIconTransform="rotate(-180deg)"
            />
            <CircleFalseStatusFalsePo
              arrowRight="/arrowright.svg"
              circleFalseStatusFalsePoPadding="8px"
              circleFalseStatusFalsePoTransform="unset"
              circleFalseStatusFalsePoBackgroundColor="#ffeee8"
              arrowRightIconTransform="unset"
            />
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(234px,_1fr))] text-xs text-gray-600 lg:justify-center lg:grid-cols-[repeat(2,_minmax(234px,_406px))] mq450:grid-cols-[minmax(234px,_1fr)]">
          {courses.map((course) => (
            <div
              key={course.courseId}
              className={`h-[367px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] border-[1px] border-solid border-gray-100 ${
                course.isActive ? "shadow-[0px_12px_48px_rgba(29,_32,_38,_0.12)]" : ""
              }`}
            >
              <img
                className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={course.image}
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative leading-[16px]">{course.title}</div>
                  <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                    {course.subtitle}
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
              <div
                className={`self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm ${
                  course.isActive ? "text-gray-white" : "text-primary-500"
                }`}
              >
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div
                    className={`${
                      course.isActive ? "bg-primary-500" : "bg-primary-100"
                    } flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap`}
                  >
                    <div
                      onClick={() => handleWatchLecture(course.courseId)}
                      className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px] cursor-pointer"
                    >
                      Watch Lecture
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border opacity-[0]">
                <div className="h-0.5 w-[190px] relative bg-primary-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentWithConnections;
