import LOGO from "./LOGO";
import BrowseCategorySelect from "./BrowseCategorySelect";
import Search from "./Search";

const StNav2 = () => {
  return (
    <header className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between py-6 px-8 box-border max-w-full gap-[20px]">
      <div className="w-[904px] flex flex-row items-start justify-start gap-[50px] max-w-full mq450:gap-[50px_25px]">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <LOGO
            graduationCap="/graduationcap2.svg"
            eTutor="AccessEdu"
            graduationCapIconWidth="40px"
            graduationCapIconHeight="40px"
            graduationCapIconMinHeight="40px"
            eTutorFontSize="32px"
            eTutorColor="#1d2026"
            eTutorTextAlign="left"
            eTutorLineHeight="40px"
            eTutorMargin="0"
            eTutorMinWidth="unset"
          />
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px] max-w-full">
          <BrowseCategorySelect
            propBackgroundColor="#fff"
            propBorder="1px solid #e9eaf0"
            propDisplay="flex"
            propFlexDirection="row"
            propPadding="12px 19px 12px 17px"
            propFontFamily="unset"
            propFontSize="unset"
            propColor="unset"
          />
          <Search
            magnifyingGlass="/magnifyingglass1.svg"
            whatDoYouWantLearn="What do you want learn..."
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
            infoWidth="229px"
            magnifyingGlassIconMinHeight="24px"
            whatDoYouWidth="calc(100% - 24px)"
            whatDoYouBorder="none"
            whatDoYouOutline="none"
            whatDoYouBackgroundColor="transparent"
            whatDoYouHeight="24px"
            whatDoYouFlex="1"
            whatDoYouMinWidth="116px"
            whatDoYouPadding="0"
            searchAlignSelf="unset"
            searchMinWidth="unset"
            searchBorder="1px solid #e9eaf0"
            whatDoYouColor="#8c94a3"
          />
        </div>
      </div>
      <div className="h-12 flex flex-row items-start justify-start gap-[24px]">
        <div className="h-9 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/bell2.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/heart1.svg"
          />
        </div>
        <img
          className="h-12 w-12 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src="/avatar1@2x.png"
        />
      </div>
    </header>
  );
};

export default StNav2;
