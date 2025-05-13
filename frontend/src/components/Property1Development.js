import { useMemo } from "react";

const Property1Development = ({
  developments,
  property1DevelopmentBackgroundColor,
  property1DevelopmentWidth,
  developmentsColor,
  developmentsMinWidth,
  developmentsHeight,
  developmentsFlex,
}) => {
  const property1DevelopmentStyle = useMemo(() => {
    return {
      backgroundColor: property1DevelopmentBackgroundColor,
      width: property1DevelopmentWidth,
    };
  }, [property1DevelopmentBackgroundColor, property1DevelopmentWidth]);

  const developmentsStyle = useMemo(() => {
    return {
      color: developmentsColor,
      minWidth: developmentsMinWidth,
      height: developmentsHeight,
      flex: developmentsFlex,
    };
  }, [
    developmentsColor,
    developmentsMinWidth,
    developmentsHeight,
    developmentsFlex,
  ]);

  return (
    <div
      className="bg-secondary-100 flex flex-row items-center justify-center py-1 px-1.5 text-left text-3xs text-secondary-700 font-body-medium-400"
      style={property1DevelopmentStyle}
    >
      <div
        className="relative leading-[12px] uppercase font-medium"
        style={developmentsStyle}
      >
        {developments}
      </div>
    </div>
  );
};

export default Property1Development;
