import TopHeader1 from "../components/TopHeader1";
import NavLinks1 from "../components/NavLinks1";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import Search from "../components/Search";
import Message5 from "../components/Message5";
import Message4 from "../components/Message4";
import Message3 from "../components/Message3";
import ActionButton from "../components/ActionButton";

const InstructorMessage = () => {
  return (
    <div className="w-full relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] lg:pl-5 lg:pr-5 lg:box-border">
      <div className="h-[1080px] w-[280px] relative bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] lg:hidden">
        <div className="absolute top-[0px] left-[calc(50%_-_140px)] w-full h-[326px] flex flex-col items-start justify-start gap-[16px]">
          <TopHeader1 />
          <NavLinks1 />
        </div>
        <FrameComponent6 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_280px)] text-center text-sm text-gray-600 font-body-medium-400 lg:max-w-full">
        <FrameComponent5 />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xl text-gray-900 font-body-medium-400">
          <div className="w-[1320px] flex flex-row items-start justify-start gap-[24px] max-w-full lg:flex-wrap">
            <div className="h-[878px] w-[424px] bg-gray-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[424px] max-w-full lg:flex-1 mq450:h-auto mq750:min-w-full">
              <div className="self-stretch h-[878px] relative bg-gray-white hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] shrink-0 [debug_commit:1cbd860]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[2] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit inline-block min-w-[47px] mq450:text-base mq450:leading-[21px]">
                        Chat
                      </h3>
                    </div>
                    <button className="cursor-pointer [border:none] py-0 px-4 bg-secondary-100 flex flex-row items-start justify-start gap-[8px]">
                      <div className="h-7 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                        <img
                          className="w-4 h-4 relative"
                          alt=""
                          src="/plus1.svg"
                        />
                      </div>
                      <div className="relative text-sm leading-[40px] capitalize font-semibold font-body-medium-400 text-secondary-500 text-left inline-block min-w-[65px]">
                        Compose
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
                  <Search
                    magnifyingGlass="/magnifyingglass1.svg"
                    whatDoYouWantLearn="Search"
                    searchPosition="unset"
                    searchWidth="unset"
                    searchHeight="unset"
                    searchFlex="1"
                    searchDisplay="flex"
                    searchFlexDirection="row"
                    searchPadding="12px 18px"
                    infoPosition="unset"
                    infoTop="unset"
                    infoLeft="unset"
                    infoWidth="89px"
                    magnifyingGlassIconMinHeight="24px"
                    whatDoYouWidth="calc(100% - 24px)"
                    whatDoYouBorder="none"
                    whatDoYouOutline="none"
                    whatDoYouBackgroundColor="transparent"
                    whatDoYouHeight="24px"
                    whatDoYouFlex="1"
                    whatDoYouMinWidth="32px"
                    whatDoYouPadding="0"
                    searchAlignSelf="unset"
                    searchMinWidth="unset"
                    searchBorder="1px solid #e9eaf0"
                    whatDoYouColor="#8c94a3"
                  />
                </div>
                <div className="w-[424px] overflow-x-auto flex flex-col items-start justify-start max-w-full text-sm">
                  <div className="w-[424px] bg-primary-200 flex flex-row items-center justify-start py-3 px-6 box-border gap-[16px] z-[2]">
                    <img
                      className="h-12 w-12 relative min-h-[48px]"
                      loading="lazy"
                      alt=""
                      src="/profile.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                        <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[84px]">
                          Jane Cooper
                        </div>
                        <div className="w-[55px] relative tracking-[-0.01em] leading-[22px] text-gray-700 text-right inline-block min-w-[55px]">
                          just now
                        </div>
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[22px] text-gray-700">
                        Yeah sure, tell me zafor
                      </div>
                    </div>
                  </div>
                  <Message5
                    profile="/profile-1.svg"
                    teacherName="Jenny Wilson"
                    time="2 d"
                    newMessage="Thank you so much, sir"
                  />
                  <Message5
                    profile="/profile-2.svg"
                    teacherName="Marvin McKinney"
                    time="1 m"
                    newMessage="You’re Welcome"
                    propMinWidth="115px"
                    propMinWidth1="103px"
                  />
                  <Message4
                    avatar="/avatar-1@2x.png"
                    teacherName="Eleanor Pena"
                    time="1 m"
                    newMessage="Thank you so much, sir"
                  />
                  <Message4
                    avatar="/profile-3.svg"
                    teacherName="Ronald Richards"
                    time="2 m"
                    newMessage="Sorry, I can’t help you"
                    propBorderRadius="unset"
                    propMinWidth="106px"
                    propColor="#6e7485"
                    propColor1="#6e7485"
                    propMinWidth1="unset"
                  />
                  <Message4
                    avatar="/avatar-2@2x.png"
                    teacherName="Kathryn Murphy"
                    time="2 m"
                    newMessage="new message"
                    propBorderRadius="50%"
                    propMinWidth="106px"
                    propColor="#8c94a3"
                    propColor1="#8c94a3"
                    propMinWidth1="90px"
                  />
                  <Message4
                    avatar="/profile-4.svg"
                    teacherName="Jacob Jones"
                    time="6 m"
                    newMessage="Thank you so much, sir"
                    propBorderRadius="unset"
                    propMinWidth="84px"
                    propColor="#6e7485"
                    propColor1="#6e7485"
                    propMinWidth1="unset"
                  />
                  <Message4
                    avatar="/avatar-3@2x.png"
                    teacherName="Cameron Williamson"
                    time="6 m"
                    newMessage="It’s okay, no problem brother, i will fix everhitn..."
                    propBorderRadius="50%"
                    propMinWidth="unset"
                    propColor="#8c94a3"
                    propColor1="#8c94a3"
                    propMinWidth1="unset"
                  />
                  <Message4
                    avatar="/avatar-4@2x.png"
                    teacherName="Arlene McCoy"
                    time="9 m"
                    newMessage="Thank you so much, sir"
                    propBorderRadius="50%"
                    propMinWidth="93px"
                    propColor="#8c94a3"
                    propColor1="#6e7485"
                    propMinWidth1="unset"
                  />
                  <Message4
                    avatar="/profile-5.svg"
                    teacherName="Dianne Russell"
                    time="9 m"
                    newMessage="You’re Welcome"
                    propBorderRadius="unset"
                    propMinWidth="96px"
                    propColor="#6e7485"
                    propColor1="#6e7485"
                    propMinWidth1="103px"
                  />
                  <div className="w-[424px] h-[72px] flex flex-row items-center justify-start py-3 px-6 box-border gap-[16px] z-[6]">
                    <img
                      className="h-12 w-12 relative min-h-[48px]"
                      alt=""
                      src="/profile-6.svg"
                    />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-between gap-[20px]">
                        <div className="h-5 w-[95px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                          Kristin Watson
                        </div>
                        <div className="self-stretch w-[18px] relative tracking-[-0.01em] leading-[22px] text-gray-600 text-right inline-block">
                          1 y
                        </div>
                      </div>
                      <div className="w-[90px] h-[22px] relative tracking-[-0.01em] leading-[22px] text-gray-600 inline-block">
                        new message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-3 px-6 gap-[16px] shrink-0 [debug_commit:1cbd860] z-[7] text-sm mq450:flex-wrap">
                <img className="h-12 w-12 relative min-h-[48px]" alt="" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[203px]">
                  <div className="self-stretch h-[22px] flex flex-row items-center justify-between gap-[20px]">
                    <div className="h-5 w-[95px] relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      Kristin Watson
                    </div>
                    <div className="self-stretch w-[18px] relative tracking-[-0.01em] leading-[22px] text-gray-600 text-right inline-block">
                      1 y
                    </div>
                  </div>
                  <div className="w-[90px] h-[22px] relative tracking-[-0.01em] leading-[22px] text-gray-600 inline-block">
                    new message
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start min-w-[567px] max-w-full text-center text-lg mq750:min-w-full">
              <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-5 px-6 gap-[20px] mq450:flex-wrap">
                <div className="h-16 w-[190px] flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-16 w-16 relative"
                    loading="lazy"
                    alt=""
                    src="/image2.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                    <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[110px]">
                      Jane Cooper
                    </div>
                    <div className="w-[75px] relative text-sm tracking-[-0.01em] leading-[22px] text-gray-700 inline-block min-w-[75px]">
                      Active Now
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-3 bg-gray-50 flex flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/dotsthree.svg"
                  />
                </button>
              </div>
              <div className="self-stretch bg-gray-white flex flex-col items-center justify-center pt-44 px-6 pb-12 box-border gap-[24px] max-w-full text-right text-xs text-gray-600 mq750:pt-[114px] mq750:pb-[31px] mq750:box-border">
                <button className="cursor-pointer [border:none] py-2 px-3 bg-primary-100 rounded-md flex flex-row items-start justify-start hover:bg-mistyrose">
                  <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-gray-700 text-left inline-block min-w-[41px]">
                    Today
                  </div>
                </button>
                <Message3 helloAndThanksForSigningU="Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😀" />
                <div className="w-[824px] overflow-x-auto flex flex-col items-end justify-center gap-[12px] max-w-full">
                  <div className="w-[824px] flex flex-col items-end justify-center gap-[8px]">
                    <div className="self-stretch relative leading-[16px]">
                      Time
                    </div>
                    <div className="flex flex-col items-end justify-center text-left text-sm text-gray-white">
                      <div className="bg-primary-500 flex flex-row items-start justify-start py-2 px-3 whitespace-nowrap">
                        <div className="relative tracking-[-0.01em] leading-[22px]">
                          Hello, Good Evening.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-20 flex flex-col items-end justify-center">
                    <div className="bg-primary-500 flex flex-row items-start justify-start py-2 px-3 whitespace-nowrap">
                      <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-white text-left inline-block min-w-[56px]">
                        I’m Zafor
                      </div>
                    </div>
                  </button>
                  <div className="w-[536px] flex flex-col items-end justify-center gap-[8px]">
                    <div className="w-[824px] h-4 relative leading-[16px] hidden max-w-full">
                      Time
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-center max-w-full text-left text-sm text-gray-white">
                      <div className="self-stretch bg-primary-500 flex flex-row items-start justify-start py-2 px-3 box-border max-w-full">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block max-w-full">
                          I only have a small doubt about your lecture. can you
                          give me some time for this?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Message3
                  helloAndThanksForSigningU="Yeah sure, tell me zafor"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propFlex="unset"
                />
              </div>
              <div className="self-stretch bg-gray-white shadow-[0px_1px_0px_#e9eaf0_inset] flex flex-row items-start justify-start p-6 box-border gap-[20px] max-w-full mq750:flex-wrap">
                <Search
                  magnifyingGlass="/pencilline1.svg"
                  whatDoYouWantLearn="Type your message"
                  searchPosition="unset"
                  searchWidth="unset"
                  searchHeight="unset"
                  searchFlex="1"
                  searchDisplay="flex"
                  searchFlexDirection="row"
                  searchPadding="12px 18px"
                  infoPosition="unset"
                  infoTop="unset"
                  infoLeft="unset"
                  infoWidth="184px"
                  magnifyingGlassIconMinHeight="24px"
                  whatDoYouWidth="calc(100% - 24px)"
                  whatDoYouBorder="none"
                  whatDoYouOutline="none"
                  whatDoYouBackgroundColor="transparent"
                  whatDoYouHeight="24px"
                  whatDoYouFlex="1"
                  whatDoYouMinWidth="89px"
                  whatDoYouPadding="0"
                  searchAlignSelf="unset"
                  searchMinWidth="184px"
                  searchBorder="1px solid #e9eaf0"
                  whatDoYouColor="#8c94a3"
                />
                <ActionButton
                  actionButtonText="Send"
                  iconName="/paperplaneright.svg"
                  arrowRightIconBackgroundColor="#ff6636"
                  propLineHeight="48px"
                  propColor="#fff"
                  propMinWidth="40px"
                  propPadding="12px 0px 0px"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full lg:flex-wrap lg:justify-center lg:pl-20 lg:pr-20 lg:box-border mq750:pl-10 mq750:pr-10 mq750:box-border">
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

export default InstructorMessage;
