import { useMemo } from "react";

const Property1InstagramColorDa = ({
  instragarm,
  property1InstagramColorDaBorder,
  property1InstagramColorDaBackgroundColor,
  property1InstagramColorDaBoxShadow,
  property1InstagramColorDaFlexDirection,
  instragarmIconOverflow,
}) => {
  const property1InstagramColorDaStyle = useMemo(() => {
    return {
      border: property1InstagramColorDaBorder,
      backgroundColor: property1InstagramColorDaBackgroundColor,
      boxShadow: property1InstagramColorDaBoxShadow,
      flexDirection: property1InstagramColorDaFlexDirection,
    };
  }, [
    property1InstagramColorDaBorder,
    property1InstagramColorDaBackgroundColor,
    property1InstagramColorDaBoxShadow,
    property1InstagramColorDaFlexDirection,
  ]);

  const instragarmIconStyle = useMemo(() => {
    return {
      overflow: instragarmIconOverflow,
    };
  }, [instragarmIconOverflow]);

  return (
    <div
      className="bg-darkslategray flex flex-row items-start justify-start p-3.5"
      style={property1InstagramColorDaStyle}
    >
      <img
        className="w-[18px] relative h-[18px]"
        alt=""
        src={instragarm}
        style={instragarmIconStyle}
      />
    </div>
  );
};

export default Property1InstagramColorDa;
