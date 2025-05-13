import { useMemo } from "react";
import Search from "./Search";

const DataAggregator = ({
  whatDoYouWantLeaPlacehold,
  propMinWidth,
  propWidth,
}) => {
  const dataAggregatorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const infoStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[421px] max-w-full text-left text-xs text-gray-600 font-body-medium-400 mq825:min-w-full"
      style={dataAggregatorStyle}
    >
      <div className="relative leading-[16px] inline-block min-w-[43px]">
        Search:
      </div>
      <Search
        magnifyingGlass="/magnifyingglass.svg"
        whatDoYouWantLearn="Search in your teachers..."
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
        infoWidth="228px"
        magnifyingGlassIconMinHeight="24px"
        whatDoYouWidth="calc(100% - 24px)"
        whatDoYouBorder="none"
        whatDoYouOutline="none"
        whatDoYouBackgroundColor="transparent"
        whatDoYouHeight="24px"
        whatDoYouFlex="1"
        whatDoYouMinWidth="115px"
        whatDoYouPadding="0"
        searchAlignSelf="stretch"
        searchMinWidth="unset"
        searchBorder="1px solid #e9eaf0"
        whatDoYouColor="#8c94a3"
      />
    </div>
  );
};

export default DataAggregator;
