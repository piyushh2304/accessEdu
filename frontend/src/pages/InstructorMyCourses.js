import Sidebar2 from "../components/Sidebar2";
import DashboardNav2 from "../components/DashboardNav2";
import FrameComponent7 from "../components/FrameComponent7";
import Course4 from "../components/Course4";
import Property1Design from "../components/Property1Design";

const InstructorMyCourses = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row flex-wrap items-start justify-start tracking-[normal] [row-gap:20px]">
      <Sidebar2 informationsHeight="1358px" informationsMinWidth="182px" />
      <main className="w-[1640px] flex flex-col items-start justify-start gap-[40px] max-w-full text-center text-sm text-gray-600 font-body-medium-400 mq750:gap-[20px_40px]">
        <DashboardNav2
          dashboard="My Courses"
          propFlex="unset"
          propAlignSelf="stretch"
          propTop="0"
          propPosition="sticky"
        />
        <FrameComponent7 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-gray-900 font-body-medium-400">
          <div className="w-[1320px] flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(234px,_1fr))] mq450:grid-cols-[minmax(234px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(234px,_406px))]">
              <Course4
                courseImages="/course-images4@2x.png"
                beginnerToProInExcelFinan="Premiere Pro CC for Beginners: Video Editing in Premiere"
                prop="4.9"
                k="982,941"
                timerController="$24.00"
              />
              <Course4
                courseImages="/course-images-116@2x.png"
                beginnerToProInExcelFinan="Learn Python Programming Masterclass"
                prop="4.0"
                k="511,123"
                timerController="$49.00"
                propBoxShadow="unset"
                propMinWidth="48px"
              />
              <div className="h-[446px] bg-gray-white shadow-[0px_12px_48px_rgba(29,_32,_38,_0.12)] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[15.6px]">
                <img
                  className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/course-images-26@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <Property1Design
                      design="Developments"
                      property1DesignBackgroundColor="#ebebff"
                      property1DesignHeight="unset"
                      property1DesignBorder="unset"
                      designMinWidth="82px"
                      designColor="#342f98"
                      designAlignSelf="unset"
                    />
                    <div className="self-stretch relative leading-[22px] font-medium">{`Data Structures & Algorithms Essentials (2021)`}</div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="h-5 w-5 relative min-h-[20px]"
                      alt=""
                      src="/star3.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
                      5.0
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <img className="h-5 w-5 relative" alt="" src="/user2.svg" />
                    <div className="flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[51px]">
                        197,637
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                        {" "}
                        students
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-lg text-primary-500">
                  <div className="h-6 w-[280px] flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border gap-[142px] mq450:gap-[142px_71px]">
                    <div className="flex flex-row items-start justify-start gap-[4px] shrink-0 [debug_commit:1cbd860]">
                      <div className="relative leading-[24px] font-semibold inline-block min-w-[63px] whitespace-nowrap">
                        $23.00
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm text-gray-400">
                        <div className="relative [text-decoration:line-through] tracking-[-0.01em] leading-[22px] inline-block min-w-[47px] whitespace-nowrap">
                          $35.00
                        </div>
                      </div>
                    </div>
                    <div className="h-[152px] w-[200px] flex flex-col items-start justify-start gap-[8px] shrink-0 [debug_commit:1cbd860] text-sm text-gray-700">
                      <div className="self-stretch bg-gray-white shadow-[0px_6px_16px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-3 px-0 border-[1px] border-solid border-gray-200">
                        <input
                          className="w-full [border:none] [outline:none] bg-primary-500 self-stretch h-8 flex flex-row items-start justify-start py-[5px] px-[18px] box-border font-body-medium-400 text-sm text-gray-white min-w-[120px]"
                          placeholder="View Details"
                          type="text"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[76px]">
                            Edit Course
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-[5px] px-[18px]">
                          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[93px]">
                            Delete Course
                          </div>
                        </div>
                      </div>
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/dotsthree.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Course4
                courseImages="/course-images-34@2x.png"
                beginnerToProInExcelFinan={`Machine Learning A-Z™: Hands-On Python & R In Data Science`}
                prop="5.0"
                k="211,434"
                timerController="$89.00"
                propBoxShadow="0px 12px 48px rgba(29, 32, 38, 0.12)"
                propMinWidth="52px"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px_40px]">
              <div className="self-stretch grid flex-row items-start justify-start gap-[24px] grid-cols-[repeat(4,_minmax(234px,_1fr))] mq450:grid-cols-[minmax(234px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(234px,_406px))]">
                <Course4
                  courseImages="/course-images-44@2x.png"
                  beginnerToProInExcelFinan="Complete Blender Creator: Learn 3D Modelling for Beginners"
                  prop="3.5"
                  k="435,671"
                  timerController="$16.00"
                  propBoxShadow="unset"
                  propMinWidth="53px"
                />
                <Course4
                  courseImages="/course-images-54@2x.png"
                  beginnerToProInExcelFinan="SQL for NEWBS: Weekender Crash Course"
                  prop="4.7"
                  k="154,817"
                  timerController="$13.00"
                  propBoxShadow="unset"
                  propMinWidth="51px"
                />
                <div className="h-[446px] bg-gray-white flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[15.6px]">
                  <img
                    className="self-stretch h-[234px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/course-images-63@2x.png"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                      <Property1Design
                        design="Developments"
                        property1DesignBackgroundColor="#ebebff"
                        property1DesignHeight="unset"
                        property1DesignBorder="unset"
                        designMinWidth="82px"
                        designColor="#342f98"
                        designAlignSelf="unset"
                      />
                      <div className="self-stretch relative leading-[22px] font-medium">
                        SEO 2021: Complete SEO Training + SEO for WordPress
                        Websites
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                  <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="h-5 w-5 relative min-h-[20px]"
                        alt=""
                        src="/star3.svg"
                      />
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[22px]">
                        4.9
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/user2.svg"
                      />
                      <div className="flex flex-row items-center justify-center">
                        <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[47px]">
                          181,811
                        </div>
                        <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                          {" "}
                          students
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                  <div className="self-stretch h-6 flex flex-row items-start justify-start py-0 px-4 box-border text-lg text-primary-500">
                    <div className="self-stretch flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <div className="relative leading-[24px] font-semibold inline-block min-w-[61px] whitespace-nowrap">
                          $57.00
                        </div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-sm text-gray-400">
                          <div className="relative [text-decoration:line-through] tracking-[-0.01em] leading-[22px] inline-block min-w-[44px] whitespace-nowrap">
                            $57.00
                          </div>
                        </div>
                      </div>
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        alt=""
                        src="/dotsthree1.svg"
                      />
                    </div>
                  </div>
                </div>
                <Course4
                  courseImages="/course-images-72@2x.png"
                  beginnerToProInExcelFinan="Angular - The Complete Guide (2021 Edition)"
                  prop="4.6"
                  k="236,568"
                  timerController="$32.00"
                  propBoxShadow="unset"
                  propMinWidth="56px"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm">
                <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] p-3 bg-gray-white h-12 w-12 rounded-81xl flex flex-row items-start justify-start box-border">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/arrowleft2.svg"
                    />
                  </button>
                  <div className="flex flex-row items-start justify-start">
                    <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                        01
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-81xl bg-primary-500 flex flex-col items-start justify-start py-3.5 px-0 box-border text-gray-white">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                        02
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                        03
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-81xl bg-gray-white flex flex-col items-start justify-start py-3.5 px-0 box-border text-primary-500">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                        04
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-81xl flex flex-col items-start justify-start py-3.5 px-0 box-border">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
                        05
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-3 bg-gray-white h-12 w-12 rounded-81xl flex flex-row items-start justify-start box-border">
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="/arrowright4.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full z-[2] lg:flex-wrap lg:justify-center lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block max-w-full">
            <span>{`© 2024 - AccessEdu. Designed by `}</span>
            <span className="text-gray-500">EduCrafters</span>
            <span>. All rights reserved</span>
          </div>
          <div className="w-[293px] flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[34px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[34px]">
              FAQs
            </div>
            <div className="w-[91px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[91px]">
              Privacy Policy
            </div>
            <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[120px]">{`Terms & Condition`}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorMyCourses;
