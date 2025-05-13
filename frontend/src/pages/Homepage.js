/* eslint-disable react/react-in-jsx-scope */
import Header1 from "../components/Header";
import Header from "../components/Header1";
import Category from "../components/Category";
import TopCourses from "../components/TopCourses";
import FeatureCoursesContainer from "../components/FeatureCoursesContainer";
import Course1 from "../components/Course1";
import Course from "../components/Course";
import PriceCard from "../components/PriceCard";
import CourseFilterContainer from "../components/CourseFilterContainer";
import CTA from "../components/CTA";
import Instructor from "../components/Instructor";
import ContainerButtons from "../components/ContainerButtons";
import Footer2 from "../components/Footer2";

const Homepage = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-center text-21xl text-gray-900 font-body-medium-400">
        <Header1 />
        <div className="self-stretch h-[3530px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[546px] px-0 pb-20 box-border max-w-full mt-[-6px] mq850:pb-5 mq850:box-border mq1225:pb-[22px] mq1225:box-border mq1525:h-auto">
          <Header />
          <Category />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[84px] box-border max-w-full shrink-0 mq850:pb-9 mq850:box-border mq1225:pb-[55px] mq1225:box-border mq450:pb-[23px] mq450:box-border">
            <TopCourses />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-253px]">
              <div className="w-[1480px] bg-gray-white box-border flex flex-col items-start justify-start py-20 px-[79px] gap-[40px] max-w-full z-[1] border-[1px] border-solid border-gray-100 mq850:gap-[20px_40px] mq850:pt-[546px] mq850:pb-[52px] mq850:box-border mq1225:pl-[39px] mq1225:pr-[39px] mq1225:box-border">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq850:flex-wrap">
                  <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit inline-block max-w-full mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                    Our feature courses
                  </h1>
                  <div className="w-[300px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-left text-sm text-gray-700">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                      we believe that every learner deserves equal access to
                      education.
                    </div>
                  </div>
                </div>
                <div className="w-[1320px] overflow-x-auto flex flex-col items-start justify-start gap-[26px] max-w-full">
                  <div className="w-[1320px] overflow-x-auto flex flex-row items-start justify-start gap-[24px]">
                    <FeatureCoursesContainer />
                    <Course1
                      courseImages="/course-images-121@2x.png"
                      productivity="Personal Development"
                      theCompleteFoundationStoc="Introduction to Self Development "
                      kevinGilbert="Rayan A. H."
                      prop="5.0"
                      prop1="(357,914)"
                      k="18.7K"
                      hour="6 hour"
                      propBoxShadow="unset"
                      propBorder="1px solid #e9eaf0"
                      propBackgroundColor="#ffeee8"
                      propColor="#993d20"
                      propMinWidth="unset"
                      propColor1="#1d2026"
                      propMinWidth1="75px"
                      propTextDecoration="none"
                      propMinWidth2="86px"
                      propMinWidth3="36px"
                    />
                  </div>
                  <div className="w-[1320px] flex flex-row items-start justify-start gap-[24px]">
                    <Course1
                      courseImages="/course-images-112@2x.png"
                      productivity="Education"
                      theCompleteFoundationStoc="American Sign Language"
                      kevinGilbert="Montessori Pro"
                      prop="5.0"
                      prop1="(116,675)"
                      k="23.4K"
                      hour="5 hour"
                    />
                    <Course1
                      courseImages="/course-images-131@2x.png"
                      productivity="Disability"
                      theCompleteFoundationStoc="Best Practice in Disability Advocacy"
                      kevinGilbert="Kevin Gilbert"
                      prop="4.8"
                      prop1="(57,914)"
                      k="20.5K"
                      hour="6 hour"
                      propBoxShadow="unset"
                      propBorder="1px solid #e9eaf0"
                      propBackgroundColor="#fff2e6"
                      propColor="#65390c"
                      propMinWidth="55px"
                      propColor1="#1d2026"
                      propMinWidth1="84px"
                      propTextDecoration="unset"
                      propMinWidth2="77px"
                      propMinWidth3="39px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
            <div className="w-[1320px] flex flex-col items-start justify-start gap-[40px] max-w-full mq850:gap-[20px_40px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
                Recently added courses
              </h1>
              <div className="w-[1320px] h-[388px] overflow-x-auto shrink-0 flex flex-row items-start justify-start gap-[24px] max-w-full">
                <Course
                  courseImages="/course-images-14@2x.png"
                  design="Education"
                  beginnerToProInExcelFinan="International Sign Language by University of Virginia"
                  messageBroker="4.8"
                  k="258.486K"
                />
                <Course
                  courseImages="/course-images-151@2x.png"
                  design="Higher School"
                  beginnerToProInExcelFinan="C++ For C Programmers, Part A by University of California"
                  messageBroker="5.0"
                  k="265.7K"
                  propBackgroundColor="#fff0f0"
                  propColor="#882929"
                  propMinWidth="83px"
                  propMinWidth1="47px"
                />
                <PriceCard />
                <Course
                  courseImages="/course-images-17@2x.png"
                  design="Marketing"
                  beginnerToProInExcelFinan="How to get Diamond in soloQ | League of Legends | Season 11"
                  messageBroker="5.0"
                  k="265.7K"
                  propBackgroundColor="#ebebff"
                  propColor="#342f98"
                  propMinWidth="60px"
                  propMinWidth1="47px"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <CourseFilterContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-21xl text-gray-900 font-body-medium-400">
        <CTA />
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-259px]">
          <div className="w-[1480px] bg-gray-white box-border flex flex-col items-start justify-start py-20 px-[79px] gap-[40px] max-w-full z-[1] border-[1px] border-solid border-gray-100 mq850:gap-[20px_40px] mq850:pt-[279px] mq850:pb-[52px] mq850:box-border mq1225:pl-[39px] mq1225:pr-[39px] mq1225:box-border">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
              Top instructors
            </h1>
            <div className="w-[1320px] overflow-x-auto flex flex-row items-start justify-start gap-[25px] max-w-full">
              <Instructor
                image="/image1@2x.png"
                instructorName="Devon Lane"
                headline="Sign Language"
                tabbedModal="4.6"
                k="854"
              />
              <Instructor
                image="/image-1@2x.png"
                instructorName="Darrell Steward"
                headline="Digital Product Designer"
                tabbedModal="4.9."
                k="451,444"
                propOverflow="unset"
                propMinWidth="25px"
                propMinWidth1="55px"
              />
              <Instructor
                image="/image-2@2x.png"
                instructorName="Jane Cooper"
                headline="UI/UX Designer"
                tabbedModal="4.8"
                k="435,671"
                propOverflow="unset"
                propMinWidth="21px"
                propMinWidth1="53px"
              />
              <Instructor
                image="/image-3@2x.png"
                instructorName="Albert Flores"
                headline="Adobe Instructor"
                tabbedModal="4.7"
                k="511,123"
                propOverflow="unset"
                propMinWidth="21px"
                propMinWidth1="48px"
              />
              <Instructor
                image="/image-4@2x.png"
                instructorName="Kathryn Murphy"
                headline="Lead Developer"
                tabbedModal="4.2"
                k="2,711"
                propOverflow="unset"
                propMinWidth="22px"
                propMinWidth1="34px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center max-w-full text-sm text-gray-600">
              <div className="w-[664px] flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[326px] max-w-full">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">{`Thousands of students waiting for a instructor. Start teaching & earning now!.`}</div>
                </div>
                <ContainerButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </div>
  );
};

export default Homepage;
