const Footer4 = () => {
  return (
    <footer className="absolute top-[1018px] left-[280px] w-[1640px] flex flex-row items-start justify-between py-5 px-40 box-border gap-[20px] max-w-full text-center text-sm text-gray-600 font-body-medium-400 mq1100:flex-wrap">
      <div className="relative tracking-[-0.01em] leading-[22px] inline-block max-w-full">
        <span>{`© 2024 - AccessEdu. Designed by `}</span>
        <span className="text-gray-500">EduCrafters</span>
        <span>. All rights reserved</span>
      </div>
      <div className="w-[293px] flex flex-row items-start justify-start gap-[24px]">
        <div className="w-[34px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[34px]">
          FAQs
        </div>
        <div className="w-[91px] relative tracking-[-0.01em] leading-[22px] inline-block min-w-[91px]">
          Privacy Policy
        </div>
        <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[120px]">{`Terms & Condition`}</div>
      </div>
    </footer>
  );
};

export default Footer4;
