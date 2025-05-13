import { useMemo } from "react";

const StatusFalseColorPrimary = ({
  labal,
  statusFalseColorPrimaryBorder,
  statusFalseColorPrimaryWidth,
  labalFlex,
  labalMinWidth,
}) => {
  const statusFalseColorPrimaryStyle = useMemo(() => {
    return {
      border: statusFalseColorPrimaryBorder,
      width: statusFalseColorPrimaryWidth,
    };
  }, [statusFalseColorPrimaryBorder, statusFalseColorPrimaryWidth]);

  const labalStyle = useMemo(() => {
    return {
      flex: labalFlex,
      minWidth: labalMinWidth,
    };
  }, [labalFlex, labalMinWidth]);

  return (
    <div
      className="bg-gray-white flex flex-row items-center justify-center py-1 px-0 gap-[8px] text-center text-sm text-primary-500 font-body-medium-400"
      style={statusFalseColorPrimaryStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[20px] font-medium"
        style={labalStyle}
      >
        {labal}
      </div>
      <img className="w-6 relative h-6" alt="" src="/arrowright.svg" />
    </div>
  );
};

export default StatusFalseColorPrimary;
