import { useMemo } from "react";

const CompanyNetflixGrayFalse = ({
  companyNetflixGrayFalseCo,
  companyNetflixGrayFalseIcWidth,
  companyNetflixGrayFalseIcHeight,
  companyNetflixGrayFalseIcPosition,
}) => {
  const companyNetflixGrayFalseIconStyle = useMemo(() => {
    return {
      width: companyNetflixGrayFalseIcWidth,
      height: companyNetflixGrayFalseIcHeight,
      position: companyNetflixGrayFalseIcPosition,
    };
  }, [
    companyNetflixGrayFalseIcWidth,
    companyNetflixGrayFalseIcHeight,
    companyNetflixGrayFalseIcPosition,
  ]);

  return (
    <img
      className="w-20 max-w-full overflow-hidden h-20"
      alt=""
      src={companyNetflixGrayFalseCo}
      style={companyNetflixGrayFalseIconStyle}
    />
  );
};

export default CompanyNetflixGrayFalse;
