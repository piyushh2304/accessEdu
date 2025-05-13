import Search from "./Search";

const FrameComponent16 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border top-[0] z-[99] sticky max-w-full">
      <header className="flex-1 bg-gray-white flex flex-row items-start justify-center py-6 px-5 box-border gap-[551px] max-w-full text-left text-sm text-gray-600 font-body-medium-400 lg:gap-[551px_275px] mq450:gap-[551px_69px] mq750:gap-[551px_138px]">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[6px] mq1050:w-0">
          <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium whitespace-nowrap">
            Good Morning
          </div>
          <h3 className="m-0 self-stretch relative text-xl leading-[26px] font-semibold font-inherit text-gray-900 whitespace-nowrap mq1050:hidden">
            Create a new course
          </h3>
        </div>
        <div className="h-[50px] w-[457px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full">
            <Search
              magnifyingGlass="/magnifyingglass.svg"
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
            <button className="cursor-pointer py-3 px-[11px] bg-gray-white h-12 w-12 box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray-100">
              <img className="h-6 w-6 relative" alt="" src="/bell1.svg" />
            </button>
            <img
              className="h-12 w-12 relative rounded-[50%] object-cover min-h-[48px]"
              loading="lazy"
              alt=""
              src="/ellipse-300@2x.png"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent16;
