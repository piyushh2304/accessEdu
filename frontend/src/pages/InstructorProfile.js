import TopNav2 from "../components/TopNav2";
import StNav2 from "../components/StNav2";
import Course2 from "../components/Course2";
import Footer3 from "../components/Footer3";

const InstructorProfile = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <div className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
        <TopNav2 />
        <StNav2 />
      </div>
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1417px] flex flex-col items-start justify-start py-3 px-0 box-border gap-[40px] max-w-full text-left text-13xl text-gray-900 font-body-medium-400 mq825:gap-[20px_40px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-12 pl-[48.5px] box-border max-w-full mq1400:pl-6 mq1400:pr-6 mq1400:box-border">
            <div className="flex-1 flex flex-row items-start justify-start relative gap-[324px] max-w-full mq825:gap-[324px_81px] mq450:gap-[324px_40px] mq1400:gap-[324px_162px]">
              <div className="h-[280px] w-[1920px] absolute !m-[0] top-[-80px] left-[calc(50%_-_960px)] bg-primary-100" />
              <div className="flex-1 bg-gray-white box-border flex flex-row items-center justify-between p-10 max-w-full gap-[20px] z-[1] border-[1px] border-solid border-primary-200 mq1400:flex-wrap">
                <div className="w-[724px] flex flex-row items-center justify-between min-w-[724px] max-w-full lg:flex-wrap lg:min-w-full mq1400:flex-1">
                  <img
                    className="h-[200px] w-[200px] relative rounded-[50%] object-cover lg:flex-1"
                    loading="lazy"
                    alt=""
                    src="/instructor-images@2x.png"
                  />
                  <div className="w-[500px] flex flex-col items-start justify-center py-6 px-0 box-border gap-[24px] min-w-[500px] max-w-full lg:flex-1 mq825:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
                      <div className="flex flex-row items-center justify-center gap-[12px] mq450:flex-wrap">
                        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[40px] font-semibold font-inherit mq825:text-7xl mq825:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                          Vako Shvili
                        </h1>
                        <button className="cursor-pointer [border:none] py-2 px-3 bg-primary-100 h-9 flex flex-row items-center justify-center box-border gap-[6px] whitespace-nowrap hover:bg-mistyrose">
                          <img
                            className="h-5 w-5 relative min-h-[20px]"
                            alt=""
                            src="/crown.svg"
                          />
                          <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-semibold font-body-medium-400 text-primary-500 text-left inline-block min-w-[68px]">
                            Top Rated
                          </div>
                        </button>
                      </div>
                      <div className="self-stretch relative text-base leading-[24px] text-gray-600">{`Web Designer & Best-Selling Instructor`}</div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[20px] max-w-full text-base mq825:flex-wrap">
                      <div className="flex flex-row items-center justify-center gap-[6px]">
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/star2.svg"
                        />
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[25px]">
                            4.8
                          </div>
                          <div className="relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600 inline-block min-w-[114px]">
                            {" "}
                            (134,633 review)
                          </div>
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-center justify-center gap-[6px]">
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/users1.svg"
                        />
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[59px]">
                            430,117
                          </div>
                          <div className="relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600 inline-block min-w-[61px]">
                            {" "}
                            students
                          </div>
                        </div>
                      </div>
                      <div className="h-6 flex flex-row items-center justify-center gap-[6px]">
                        <img
                          className="h-6 w-6 relative min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/playcircle11.svg"
                        />
                        <div className="flex flex-row items-center justify-start">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[10px]">
                            7
                          </div>
                          <div className="relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600 inline-block min-w-[56px]">
                            {" "}
                            courses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[16px] text-sm text-secondary-500">
                  <div className="h-6 flex flex-row items-center justify-start gap-[6px]">
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/globesimple.svg"
                    />
                    <div className="relative tracking-[-0.01em] leading-[20px] font-medium">
                      https://www.vakoshvili.com
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-center gap-[8px] mq450:flex-wrap">
                    <button className="cursor-pointer [border:none] p-3.5 bg-gray-50 h-12 flex flex-row items-start justify-start box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/facebook.svg"
                      />
                    </button>
                    <button className="cursor-pointer [border:none] p-3.5 bg-gray-50 h-12 flex flex-row items-start justify-start box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/twitter-1.svg"
                      />
                    </button>
                    <button className="cursor-pointer [border:none] p-3.5 bg-gray-50 h-12 flex flex-row items-start justify-start box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/instagram-1.svg"
                      />
                    </button>
                    <div className="h-12 bg-gray-50 flex flex-row items-start justify-start p-3.5 box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/youtube-1.svg"
                      />
                    </div>
                    <button className="cursor-pointer [border:none] p-3.5 bg-gray-50 h-12 flex flex-row items-start justify-start box-border">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/whatsapp.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border gap-[24px] max-w-full text-lg mq1400:flex-wrap">
            <div className="w-[424px] bg-gray-white box-border flex flex-row items-start justify-start py-6 px-[23px] min-w-[424px] max-w-full border-[1px] border-solid border-gray-100 mq825:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq1400:flex-1">
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch relative leading-[100%] uppercase font-medium">
                  About Me
                </div>
                <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
                  <p className="m-0">
                    One day Vako had enough with the 9-to-5 grind, or more like
                    9-to-9 in his case, and quit his job, or more like got
                    himself fired from his own startup.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    He decided to work on his dream: be his own boss, travel the
                    world, only do the work he enjoyed, and make a lot more
                    money in the process. No more begging for vacation days and
                    living from paycheck to paycheck. After trying everything
                    from e-commerce stores to professional poker his lucky break
                    came when he started freelance design. Vako fell in love
                    with the field that gives him the lifestyle of his dreams.
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Vako realizes that people who take courses on Udemy want to
                    transform their lives. Today with his courses and mentoring
                    Vako is helping thousands of people transform their lives,
                    just like he did once.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[872px] flex flex-col items-start justify-start gap-[40px] min-w-[872px] max-w-full text-center text-base lg:min-w-full mq450:gap-[20px_40px] mq1400:flex-1">
              <div className="self-stretch h-[62px] relative">
                <div className="absolute top-[62px] left-[0px] box-border w-[873px] h-px border-t-[1px] border-solid border-gray-100" />
                <div className="absolute top-[calc(50%_-_31px)] left-[calc(50%_-_436px)] bg-gray-white shadow-[0px_-3px_0px_#ff6636_inset] w-[200px] flex flex-row items-start justify-start py-5 px-0 box-border">
                  <div className="flex-1 relative leading-[22px] font-medium">
                    Courses
                  </div>
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-[transparent] absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_212px)] flex flex-row items-start justify-start py-5 px-0 box-border font-body-medium-400 font-medium text-base text-gray-700"
                  placeholder="Review"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-5xl">
                <h2 className="m-0 self-stretch relative text-inherit leading-[32px] mix-blend-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
                  <span className="tracking-[-0.01em] font-semibold">{`Vako Courses `}</span>
                  <span>(02)</span>
                </h2>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                  <Course2
                    courseImages="/course-images2@2x.png"
                    developments="Developments"
                    beginnerToProInExcelFinan={`Machine Learning A-Z™: Hands-On Python & R In Data Science`}
                  />
                  <Course2
                    courseImages="/course-images-110@2x.png"
                    developments="Business"
                    beginnerToProInExcelFinan="Selenium WebDriver with Java -Basics to Advanced+Frameworks"
                    propBackgroundColor="#e1f7e3"
                    propColor="#15711f"
                    propMinWidth="60px"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                  <Course2
                    courseImages="/course-images-22@2x.png"
                    developments="Developments"
                    beginnerToProInExcelFinan={`Data Structures & Algorithms Essentials (2021)`}
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="98px"
                  />
                  <Course2
                    courseImages="/course-images-32@2x.png"
                    developments="Developments"
                    beginnerToProInExcelFinan="Complete Adobe Lightroom Megacourse: Beginner to Expert"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="98px"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                  <Course2
                    courseImages="/course-images-42@2x.png"
                    developments="Developments"
                    beginnerToProInExcelFinan="Graphic Design Masterclass - Learn GREAT Design"
                    propBackgroundColor="#ebebff"
                    propColor="#342f98"
                    propMinWidth="98px"
                  />
                  <Course2
                    courseImages="/course-images-52@2x.png"
                    developments="Productivity"
                    beginnerToProInExcelFinan="Digital Marketing Masterclass - 23 Courses in 1"
                    propBackgroundColor="#76abae"
                    propColor="#1d2026"
                    propMinWidth="90px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer3 />
    </div>
  );
};

export default InstructorProfile;
