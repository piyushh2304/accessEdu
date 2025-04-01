import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Active = ({
  home,
  property1ActiveBoxShadow,
  homeColor,
  homeMinWidth,
}) => {
  const property1ActiveStyle = useMemo(() => {
    return {
      boxShadow: property1ActiveBoxShadow,
    };
  }, [property1ActiveBoxShadow]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
      minWidth: homeMinWidth,
    };
  }, [homeColor, homeMinWidth]);

  return (
    <div
      className="bg-gray-900 shadow-[0px_-2px_0px_#ff6636_inset] flex flex-row items-start justify-start p-4 text-left text-sm text-gray-white font-body-medium-400"
      style={property1ActiveStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[20px] font-medium"
        style={homeStyle}
      >
        {home}
      </div>
    </div>
  );
};

Property1Active.propTypes = {
  home: PropTypes.string.isRequired,
  property1ActiveBoxShadow: PropTypes.string,
  homeColor: PropTypes.string,
  homeMinWidth: PropTypes.string,
};

Property1Active.defaultProps = {
  property1ActiveBoxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  homeColor: "#000",
  homeMinWidth: "100px",
};

export default Property1Active;
