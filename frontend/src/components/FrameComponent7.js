import Search from "./Search";
import FrameComponent8 from "./FrameComponent8";

const FrameComponent7 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xs text-gray-600 font-body-medium-400">
      <div className="w-[1320px] flex flex-row items-start justify-center gap-[24px] max-w-full lg:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[343px] max-w-full mq450:min-w-full">
          <div className="relative leading-[16px] inline-block min-w-[43px]">
            Search:
          </div>
          <Search
            magnifyingGlass="/magnifyingglass1.svg"
            whatDoYouWantLearn="Search in your courses..."
            searchPosition="unset"
            searchWidth="unset"
            searchHeight="unset"
            searchFlex="unset"
            searchDisplay="flex"
            searchFlexDirection="row"
            searchPadding="12px 18px"
            infoPosition="unset"
            infoTop="unset"
            infoLeft="unset"
            infoWidth="222px"
            magnifyingGlassIconMinHeight="24px"
            whatDoYouWidth="calc(100% - 24px)"
            whatDoYouBorder="none"
            whatDoYouOutline="none"
            whatDoYouBackgroundColor="transparent"
            whatDoYouHeight="24px"
            whatDoYouFlex="1"
            whatDoYouMinWidth="112px"
            whatDoYouPadding="0"
            searchAlignSelf="stretch"
            searchMinWidth="unset"
            searchBorder="unset"
            whatDoYouColor="#8c94a3"
          />
        </div>
        <FrameComponent8 sortBy="Sort by:" select="Latest" />
        <FrameComponent8
          sortBy="Category"
          select="All Category"
          propMinWidth="53px"
          propMinWidth1="94px"
        />
        <FrameComponent8
          sortBy="Rating"
          select={`4 Star & Up`}
          propMinWidth="36px"
          propMinWidth1="87px"
        />
      </div>
    </div>
  );
};

export default FrameComponent7;
