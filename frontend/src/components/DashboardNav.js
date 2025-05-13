import Search from "./Search";

const DashboardNav = () => {
  return (
    <section className="absolute top-[0px] left-[280px] bg-gray-white w-[1640px] flex flex-row items-start justify-between py-6 px-40 box-border max-w-full gap-[20px] text-left text-sm text-gray-600 font-body-medium-400 mq1100:flex-wrap">
      <div className="w-[312px] flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-medium">
          Good Morning
        </div>
        <h3 className="m-0 self-stretch relative text-xl leading-[26px] font-semibold font-inherit text-gray-900 mq450:text-base mq450:leading-[21px]">
          Create a new course
        </h3>
      </div>
      <div className="w-[457px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq750:flex-wrap">
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
            searchMinWidth="89px"
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
    </section>
  );
};

export default DashboardNav;
