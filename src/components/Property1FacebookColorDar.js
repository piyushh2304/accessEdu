import { useMemo } from "react";

const Property1FacebookColorDar = ({
  frame75,
  property1FacebookColorDarBackgroundColor,
  property1FacebookColorDarBoxShadow,
  property1FacebookColorDarFlexDirection,
  property1FacebookColorDarBorder,
  frameIconOverflow,
}) => {
  const property1FacebookColorDarStyle = useMemo(() => {
    return {
      backgroundColor: property1FacebookColorDarBackgroundColor,
      boxShadow: property1FacebookColorDarBoxShadow,
      flexDirection: property1FacebookColorDarFlexDirection,
      border: property1FacebookColorDarBorder,
    };
  }, [
    property1FacebookColorDarBackgroundColor,
    property1FacebookColorDarBoxShadow,
    property1FacebookColorDarFlexDirection,
    property1FacebookColorDarBorder,
  ]);

  const frameIconStyle = useMemo(() => {
    return {
      overflow: frameIconOverflow,
    };
  }, [frameIconOverflow]);

  return (
    <div
      className="bg-darkslategray flex flex-row items-start justify-start p-3.5"
      style={property1FacebookColorDarStyle}
    >
      <img
        className="w-[18px] relative h-[18px]"
        alt=""
        src={frame75}
        style={frameIconStyle}
      />
    </div>
  );
};

export default Property1FacebookColorDar;
