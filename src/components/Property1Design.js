import { useMemo } from "react";

const Property1Design = ({
  design,
  property1DesignBackgroundColor,
  property1DesignHeight,
  property1DesignBorder,
  designMinWidth,
  designColor,
  designAlignSelf,
}) => {
  const property1DesignStyle = useMemo(() => {
    return {
      backgroundColor: property1DesignBackgroundColor,
      height: property1DesignHeight,
      border: property1DesignBorder,
    };
  }, [
    property1DesignBackgroundColor,
    property1DesignHeight,
    property1DesignBorder,
  ]);

  const designStyle = useMemo(() => {
    return {
      minWidth: designMinWidth,
      color: designColor,
      alignSelf: designAlignSelf,
    };
  }, [designMinWidth, designColor, designAlignSelf]);

  return (
    <div
      className="bg-primary-100 flex flex-row items-center justify-center py-1 px-1.5 text-left text-3xs text-primary-700 font-body-medium-400"
      style={property1DesignStyle}
    >
      <div
        className="relative leading-[12px] uppercase font-medium"
        style={designStyle}
      >
        {design}
      </div>
    </div>
  );
};

export default Property1Design;
