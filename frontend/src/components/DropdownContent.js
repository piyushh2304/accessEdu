import LOGO from "./LOGO";

const DropdownContent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-justify text-sm text-gray-500 font-body-medium-400">
      <LOGO
        graduationCap="/graduationcap-1.svg"
        eTutor="AccessEdu"
        graduationCapIconWidth="46px"
        graduationCapIconHeight="46px"
        graduationCapIconMinHeight="46px"
        eTutorFontSize="36.8px"
        eTutorColor="#fff"
        eTutorTextAlign="justify"
        eTutorLineHeight="46px"
        eTutorMargin="unset"
        eTutorMinWidth="unset"
      />
      <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
        <p className="m-0">Aliquam rhoncus ligula est, non pulvinar elit</p>
        <p className="m-0">convallis nec. Donec mattis odio at.</p>
      </div>
    </div>
  );
};

export default DropdownContent;
