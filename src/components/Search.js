import { useMemo } from "react";

const Search = ({
  magnifyingGlass,
  whatDoYouWantLearn,
  searchPosition,
  searchWidth,
  searchHeight,
  searchFlex,
  searchDisplay,
  searchFlexDirection,
  searchPadding,
  infoPosition,
  infoTop,
  infoLeft,
  infoWidth,
  magnifyingGlassIconMinHeight,
  whatDoYouWidth,
  whatDoYouBorder,
  whatDoYouOutline,
  whatDoYouBackgroundColor,
  whatDoYouHeight,
  whatDoYouFlex,
  whatDoYouMinWidth,
  whatDoYouPadding,
  searchAlignSelf,
  searchMinWidth,
  searchBorder,
  whatDoYouColor,
}) => {
  const searchStyle = useMemo(() => {
    return {
      position: searchPosition,
      width: searchWidth,
      height: searchHeight,
      flex: searchFlex,
      display: searchDisplay,
      flexDirection: searchFlexDirection,
      padding: searchPadding,
      alignSelf: searchAlignSelf,
      minWidth: searchMinWidth,
      border: searchBorder,
    };
  }, [
    searchPosition,
    searchWidth,
    searchHeight,
    searchFlex,
    searchDisplay,
    searchFlexDirection,
    searchPadding,
    searchAlignSelf,
    searchMinWidth,
    searchBorder,
  ]);

  const infoStyle = useMemo(() => {
    return {
      position: infoPosition,
      top: infoTop,
      left: infoLeft,
      width: infoWidth,
    };
  }, [infoPosition, infoTop, infoLeft, infoWidth]);

  const magnifyingGlassIconStyle = useMemo(() => {
    return {
      minHeight: magnifyingGlassIconMinHeight,
    };
  }, [magnifyingGlassIconMinHeight]);

  const whatDoYouStyle = useMemo(() => {
    return {
      width: whatDoYouWidth,
      border: whatDoYouBorder,
      outline: whatDoYouOutline,
      backgroundColor: whatDoYouBackgroundColor,
      height: whatDoYouHeight,
      flex: whatDoYouFlex,
      minWidth: whatDoYouMinWidth,
      padding: whatDoYouPadding,
      color: whatDoYouColor,
    };
  }, [
    whatDoYouWidth,
    whatDoYouBorder,
    whatDoYouOutline,
    whatDoYouBackgroundColor,
    whatDoYouHeight,
    whatDoYouFlex,
    whatDoYouMinWidth,
    whatDoYouPadding,
    whatDoYouColor,
  ]);

  return (
    <div
      className="w-[424px] bg-gray-white box-border h-12 overflow-hidden shrink-0 text-left text-base text-gray-500 font-body-medium-400 border-[1px] border-solid border-gray-100"
      style={searchStyle}
    >
      <div
        className="absolute top-[calc(50%_-_12px)] left-[18px] flex flex-row items-center justify-start gap-[12px]"
        style={infoStyle}
      >
        <img
          className="w-6 relative h-6"
          alt=""
          src={magnifyingGlass}
          style={magnifyingGlassIconStyle}
        />
        <div className="relative leading-[27px] text-nowrap" style={whatDoYouStyle}>
          {whatDoYouWantLearn}
        </div>
      </div>
    </div>
  );
};

export default Search;
