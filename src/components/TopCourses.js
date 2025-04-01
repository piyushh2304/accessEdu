import Courses11 from "./Courses1";

const TopCourses = () => {
  return (
    <div className="self-stretch bg-gray-50 flex flex-col items-center justify-start pt-20 px-5 pb-80 box-border gap-[40px] max-w-full text-left text-21xl text-gray-900 font-body-medium-400 mq850:gap-[20px_40px] mq850:pb-[135px] mq850:box-border mq1225:pt-[546px] mq1225:pb-52 mq1225:box-border">
      <div className="w-[1320px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          Recommended courses
        </h1>
      </div>
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-start gap-[25px_24px] min-h-[691px] max-w-full text-base text-primary-500">
        <Courses11
          courseImages="/course-images1@2x.png"
          design="Design"
          functionBuilder="$5"
          completePythonBootcampFro="Graphic Design Course by Coursera"
          dataflowManager="4.7"
          k="20K"
        />
        <Courses11
          courseImages="/course-images-1@2x.png"
          design="Developments"
          functionBuilder="$12"
          completePythonBootcampFro="Professional Certificate Program in Blockchain"
          dataflowManager="5.0"
          k="265.7K"
          propBackgroundColor="#ebebff"
          propColor="#342f98"
          propMinWidth="82px"
          propMinWidth1="29px"
          propMinWidth2="47px"
        />
        <Courses11
          courseImages="/course-images-21@2x.png"
          design="Business"
          functionBuilder="$12"
          completePythonBootcampFro="Intro to Entrepreneurship: Get started as an Entrepreneur"
          dataflowManager="4.6"
          k="85.38K"
          propBackgroundColor="#e1f7e3"
          propColor="#15711f"
          propMinWidth="50px"
          propMinWidth1="29px"
          propMinWidth2="48px"
        />
        <Courses11
          courseImages="/course-images-31@2x.png"
          design="Marketing"
          functionBuilder="$57"
          completePythonBootcampFro={`Google Digital Marketing & E-commerce Certificate`}
          dataflowManager="4.8"
          k="572.99K"
          propBackgroundColor="#ebebff"
          propColor="#342f98"
          propMinWidth="60px"
          propMinWidth1="30px"
          propMinWidth2="56px"
        />
        <Courses11
          courseImages="/course-images-41@2x.png"
          design={`IT & Software`}
          functionBuilder="$6"
          completePythonBootcampFro="Java 17 Masterclass: Start Coding in 2024"
          dataflowManager="5.0"
          k="845,136K"
          propBackgroundColor="#fff0f0"
          propColor="#882929"
          propMinWidth="77px"
          propMinWidth1="21px"
          propMinWidth2="62px"
        />
        <Courses11
          courseImages="/course-images-51@2x.png"
          design="Higher School"
          functionBuilder="$57"
          completePythonBootcampFro="JEE Main Exam Courses and Certifications"
          dataflowManager="5.0"
          k="265.7K"
          propBackgroundColor="#fff2e6"
          propColor="#65390c"
          propMinWidth="83px"
          propMinWidth1="30px"
          propMinWidth2="47px"
        />
        <Courses11
          courseImages="/course-images-61@2x.png"
          design={`Finance & Accounting`}
          functionBuilder="$57"
          completePythonBootcampFro="Financial accounting and capital markets"
          dataflowManager="4.5"
          k="26.7K"
          propBackgroundColor="#ebebff"
          propColor="#342f98"
          propMinWidth="124px"
          propMinWidth1="30px"
          propMinWidth2="38px"
        />
        <Courses11
          courseImages="/course-images-7@2x.png"
          design="Senior Secondary"
          functionBuilder="$57"
          completePythonBootcampFro="How Things Work: An Introduction to Physics"
          dataflowManager="5.0"
          k="65.5K"
          propBackgroundColor="#e1f7e3"
          propColor="#15711f"
          propMinWidth="102px"
          propMinWidth1="30px"
          propMinWidth2="39px"
        />
        <Courses11
          courseImages="/course-images-8@2x.png"
          design={`IT & Software`}
          functionBuilder="$57"
          completePythonBootcampFro="IBM DevOps and Software Engineering Certificate"
          dataflowManager="5.0"
          k="25.7K"
          propBackgroundColor="#ffeee8"
          propColor="#993d20"
          propMinWidth="77px"
          propMinWidth1="30px"
          propMinWidth2="38px"
        />
        <Courses11
          courseImages="/course-images-91@2x.png"
          design="Lifestyle"
          functionBuilder="$7"
          completePythonBootcampFro="Reiki Level I, II and Master/Teacher Certification"
          dataflowManager="4.8"
          k="181.56K"
          propBackgroundColor="#fff2e6"
          propColor="#65390c"
          propMinWidth="52px"
          propMinWidth1="20px"
          propMinWidth2="52px"
        />
      </div>
    </div>
  );
};

export default TopCourses;
