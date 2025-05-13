import Navigation3 from "../components/Navigation3";
import StudentsProfile from "../components/StudentsProfile";
import DataAggregator from "../components/DataAggregator";
import LogicGate from "../components/LogicGate";
import Course3 from "../components/Course3";
import GraphTheory from "../components/GraphTheory";
import Footer from "../components/Footer";

const StudentCourses = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <Navigation3 />
      <section className="w-full h-[280px] absolute !m-[0] top-[148px] right-[0px] left-[0px] bg-primary-100" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
        <div className="w-[1320px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
            <StudentsProfile
              arrowRight="/arrowright.svg"
              propAlignSelf="unset"
              propFlex="1"
              propBackgroundColor="unset"
              propBoxShadow="unset"
              propColor="#4e5566"
              propBackgroundColor1="#fff"
              propBoxShadow1="0px -3px 0px #ff6636 inset"
              propColor1="#1d2026"
              propBackgroundColor2="unset"
              propBoxShadow2="unset"
              propColor2="#4e5566"
              propBackgroundColor3="unset"
              propBoxShadow3="unset"
              propColor3="#4e5566"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq825:gap-[20px_40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="relative leading-[32px] mq450:text-lgi mq450:leading-[26px]">
                <span className="tracking-[-0.01em] font-semibold">{`Courses `}</span>
                <span>(957)</span>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                <DataAggregator
                  whatDoYouWantLeaPlacehold="Search in your courses..."
                  propMinWidth="343px"
                  propWidth="222px"
                />
                <LogicGate sortBy="Sort by:" />
                <LogicGate sortBy="Status:" propMinWidth="40px" />
                <LogicGate sortBy="Teacher:" propMinWidth="50px" />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px_22.7px] min-h-[758px] text-xs text-gray-600">
              <Course3
                courseImages="/course-images3@2x.png"
                digitalMarketingMastercla="Learn Ethical Hacking From Scratch"
                whatYoullNeedToGetStarted="31. Learn More About Web Design"
              />
              <div className="h-[367px] w-[312px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] border-[1px] border-solid border-gray-100">
                <img
                  className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/course-images-113@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch relative leading-[16px]">
                      SQL for NEWBS: Weekender Crash Course
                    </div>
                    <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                      165. Font Properties Challenge 3 - Chan...
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm text-primary-500">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="bg-primary-100 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
                      <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                        Watch Lecture
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[96px]">
                        2% Completed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
                  <div className="h-0.5 w-[190px] relative bg-primary-500" />
                </div>
              </div>
              <Course3
                courseImages="/course-images-24@2x.png"
                digitalMarketingMastercla="Complete Adobe Lightroom Megacourse: Begin..."
                whatYoullNeedToGetStarted="7. Adding Content to Our Website"
                propWidth="312px"
              />
              <div className="h-[367px] w-[312px] bg-gray-white shadow-[0px_12px_48px_rgba(29,_32,_38,_0.12)] flex flex-col items-start justify-start gap-[15.75px]">
                <img
                  className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/course-images-33@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[16px]">{`Machine Learning A-Z™: Hands-On Python & R I...`}</div>
                    <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                      651. CSS Font Property Challenge Soluti...
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="flex flex-row items-start justify-start py-0 px-4 text-sm text-gray-white">
                  <div className="flex flex-row items-start justify-start gap-[45px] mq450:gap-[45px_22px]">
                    <div className="bg-primary-500 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
                      <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                        Watch Lecture
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[105px]">
                        23% Completed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
                  <div className="h-0.5 w-[190px] relative bg-primary-500" />
                </div>
              </div>
              <div className="h-[367px] w-[312px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] border-[1px] border-solid border-gray-100">
                <img
                  className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/course-images-43@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[16px]">
                      Premiere Pro CC for Beginners: Video Editing in...
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                      7. Adding Content to Our Website
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="flex flex-row items-start justify-start py-0 px-4 text-sm text-primary-500">
                  <div className="flex flex-row items-start justify-start gap-[45px] mq450:gap-[45px_22px]">
                    <div className="bg-primary-100 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
                      <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                        Watch Lecture
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[105px]">
                        26% Completed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
                  <div className="h-0.5 w-[190px] relative bg-primary-500" />
                </div>
              </div>
              <div className="h-[367px] w-[312px] bg-gray-white box-border flex flex-col items-start justify-start gap-[15.75px] border-[1px] border-solid border-gray-100">
                <img
                  className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/course-images-53@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[16px]">
                      Graphic Design Masterclass - Learn GREAT De...
                    </div>
                    <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                      17. The Dark Art of Centering Elements w...
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-sm text-primary-500">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="bg-primary-100 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
                      <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                        Watch Lecture
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[103px]">
                        21% Completed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
                  <div className="h-0.5 w-[190px] relative bg-primary-500" />
                </div>
              </div>
              <Course3
                courseImages="/course-images-62@2x.png"
                digitalMarketingMastercla="Angular - The Complete Guide (2021 Edition)"
                whatYoullNeedToGetStarted="54. CSS Static and Relative Positioning"
                propWidth="312px"
              />
              <div className="h-[367px] w-[312px] bg-gray-white shadow-[0px_12px_48px_rgba(29,_32,_38,_0.12)] flex flex-col items-start justify-start gap-[15.75px]">
                <img
                  className="self-stretch h-[220px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/course-images-71@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[16px]">
                      Complete Blender Creator: Learn 3D Modelling...
                    </div>
                    <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-900">
                      6. Learn More About Typography
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
                <div className="flex flex-row items-start justify-start py-0 px-4 text-sm text-gray-white">
                  <div className="flex flex-row items-start justify-start gap-[45px] mq450:gap-[45px_22px]">
                    <div className="bg-primary-500 flex flex-row items-start justify-start py-0 px-[15px] whitespace-nowrap">
                      <div className="relative leading-[40px] capitalize font-semibold inline-block min-w-[99px]">
                        Watch Lecture
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-success-500">
                      <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[105px]">
                        52% Completed
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px flex flex-row items-end justify-start pt-0 px-0 pb-0 box-border">
                  <div className="h-0.5 w-[190px] relative bg-primary-500" />
                </div>
              </div>
            </div>
          </div>
          <GraphTheory />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm">
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq450:flex-wrap">
              <div className="h-12 w-12 rounded-81xl bg-primary-100 flex flex-row items-start justify-start p-3 box-border">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/arrowleft1.svg"
                />
              </div>
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
                <div className="h-12 w-12 rounded-81xl bg-primary-100 flex flex-col items-start justify-start py-3.5 px-0 box-border text-primary-500">
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
              <button className="cursor-pointer [border:none] p-3 bg-primary-100 h-12 w-12 rounded-81xl flex flex-row items-start justify-start box-border">
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/arrowright.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default StudentCourses;
