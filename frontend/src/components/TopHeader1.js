import LOGO from "./LOGO";

const TopHeader1 = () => {
  return (
    <div className="self-stretch bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] flex flex-row items-start justify-start py-5 px-6">
      <LOGO
        graduationCap="/graduationcap3.svg"
        eTutor="AccessEdu"
        graduationCapIconWidth="29.9px"
        graduationCapIconHeight="29.9px"
        graduationCapIconMinHeight="30px"
        eTutorFontSize="24px"
        eTutorColor="#fff"
        eTutorTextAlign="left"
        eTutorLineHeight="30px"
        eTutorMargin="0"
        eTutorMinWidth="124px"
      />
    </div>
  );
};

export default TopHeader1;
