import { useMemo } from "react";
import TopNav3 from "./TopNav3";
import StNav3 from "./StNav3";

const Header3 = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeIdentifier,
  dimensionCodeValue,
  dimensionCodeImage,
  dimensionCodeIdentifierTe,
  dimensionCodeIdentifierTe2,
  topNavAlignSelf,
  topNavMarginLeft,
  topNavWidth,
  topNavPadding,
}) => {
  const navigationStyle = useMemo(() => {
    return {
      alignSelf: topNavAlignSelf,
      marginLeft: topNavMarginLeft,
      width: topNavWidth,
      padding: topNavPadding,
    };
  }, [topNavAlignSelf, topNavMarginLeft, topNavWidth, topNavPadding]);

  return (
    <header
      className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-sm text-gray-400 font-body-medium-400"
      style={navigationStyle}
    >
      <TopNav3 />
      <StNav3 />
    </header>
  );
};

export default Header3;
