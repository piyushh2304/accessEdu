import { useMemo } from "react";

const CircleFalseStatusFalsePo = ({
  arrowRight,
  circleFalseStatusFalsePoPadding,
  circleFalseStatusFalsePoTransform,
  circleFalseStatusFalsePoBackgroundColor,
  arrowRightIconTransform,
}) => {
  const circleFalseStatusFalsePoStyle = useMemo(() => {
    return {
      padding: circleFalseStatusFalsePoPadding,
      transform: circleFalseStatusFalsePoTransform,
      backgroundColor: circleFalseStatusFalsePoBackgroundColor,
    };
  }, [
    circleFalseStatusFalsePoPadding,
    circleFalseStatusFalsePoTransform,
    circleFalseStatusFalsePoBackgroundColor,
  ]);

  const arrowRightIconStyle = useMemo(() => {
    return {
      transform: arrowRightIconTransform,
    };
  }, [arrowRightIconTransform]);

  return (
    <div
      className="bg-primary-100 flex flex-row items-start justify-start p-3"
      style={circleFalseStatusFalsePoStyle}
    >
      <img
        className="w-6 relative h-6"
        alt=""
        src={arrowRight}
        style={arrowRightIconStyle}
      />
    </div>
  );
};

export default CircleFalseStatusFalsePo;
