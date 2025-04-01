import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "./LOGO";
import BrowseCategorySelect from "./BrowseCategorySelect";
import Search from "./Search";

const StNav = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="self-stretch bg-gray-white flex flex-row items-start justify-between py-6 px-8 box-border max-w-full gap-[20px] mq1350:flex-wrap">
      <div className="w-[904px] flex flex-row items-start justify-start gap-[50px] max-w-full mq450:gap-[50px_25px] mq925:flex-wrap">
        <div
          className="flex flex-col items-start justify-start pt-1 px-0 pb-0 cursor-pointer"
          onClick={onFrameContainerClick}
        >
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
        <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[416px] max-w-full mq925:flex-wrap mq925:min-w-full">
          <BrowseCategorySelect />
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
            searchMinWidth="229px"
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
            src="/bell1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          <img
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src="/heart.svg"
          />
        </div>
        <img
          className="h-12 w-12 relative rounded-[50%] object-cover"
          loading="lazy"
          alt=""
          src="/avatar@2x.png"
        />
      </div>
    </header>
  );
};

export default StNav;
