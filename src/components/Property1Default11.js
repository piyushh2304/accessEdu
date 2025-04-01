import { useMemo } from "react";

const Property1Default1 = ({
  categoryLabel,
  labalTextAlign,
  labalMinWidth,
}) => {
  const labal1Style = useMemo(() => {
    return {
      textAlign: labalTextAlign,
      minWidth: labalMinWidth,
    };
  }, [labalTextAlign, labalMinWidth]);

  return (
    <div className="bg-gray-900 flex flex-row items-center justify-center py-1.5 px-0 text-left text-sm text-gray-500 font-body-medium-400">
      <div
        className="relative tracking-[-0.01em] leading-[22px]"
        style={labal1Style}
      >
        {categoryLabel}
      </div>
    </div>
  );
};

export default Property1Default1;
