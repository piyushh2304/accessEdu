import LOGO from "./LOGO";
import BrowseCategorySelect1 from "./BrowseCategorySelect1";
import Search from "./Search";
import SizeMediumPositionsPrimary from "./SizeMediumPositionsPrimary";
import { Link } from "react-router-dom";

const StNav1 = () => {
  return (
    <div className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-start justify-between py-6 px-8 box-border max-w-full gap-[20px]">
      <div className="w-[904px] flex flex-row items-start justify-start gap-[50px] max-w-full mq450:gap-[50px_25px]">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <LOGO
            graduationCap="/graduationcap1.svg"
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
          <BrowseCategorySelect1 />
          <Search
            magnifyingGlass="/magnifyingglass.svg"
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
      <div className="flex flex-row items-center justify-start gap-[24px] max-w-full">
        <img className="h-6 w-6 relative" alt="" src="/bell.svg" />
        <img className="h-6 w-6 relative" alt="" src="/heart.svg" />
        <div className="flex flex-row items-start justify-start gap-[12px] mq850:hidden">
        <Link to="/29-sign-up" style={{ textDecoration: 'none' }}>
          <SizeMediumPositionsPrimary
            button="Create Account"
            sizeMediumPositionsPrimarBackgroundColor="#ffeee8"
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            buttonColor="#ff6636"
            buttonTextAlign="left"
            buttonLineHeight="48px"
            buttonMinWidth="120px"
          />
          </Link>
          <Link to="/30-sign-in" style={{ textDecoration: 'none' }}>
          <SizeMediumPositionsPrimary
            button="Sign In"
            sizeMediumPositionsPrimarBackgroundColor="#ff6636"
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            buttonColor="#fff"
            buttonTextAlign="left"
            buttonLineHeight="48px"
            buttonMinWidth="52px"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StNav1;
