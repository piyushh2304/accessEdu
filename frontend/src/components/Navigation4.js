import { Link } from "react-router-dom";
import LOGO from "./LOGO";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";

const Navigation4 = () => {
  return (
    <header className="self-stretch bg-gray-white shadow-[0px_-1px_0px_#e9eaf0_inset] flex flex-row items-center justify-between py-5 px-[110px] top-[0] z-[99] sticky gap-[20px] text-left text-sm text-gray-700 font-body-medium-400 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[55px] mq800:pr-[55px] mq800:box-border">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <LOGO
        graduationCap="/graduationcap1.svg"
        eTutor="AccessEdu"
        graduationCapIconWidth="40px"
        graduationCapIconHeight="40px"
        graduationCapIconMinHeight="40px"
        eTutorFontSize="32px"
        eTutorColor="#1d2026"
        eTutorTextAlign="left"
        eTutorLineHeight="40px"
        eTutorMargin="0"
        eTutorMinWidth="unset"
      /></Link>
      <div className="flex flex-row items-center justify-center gap-[16px] mq800:hidden">
        <div className="relative tracking-[-0.01em] leading-[22px] whitespace-nowrap">
          Don’t have account?
        </div>
        <SizeLargePositionsPrimary
          button="Create Account"
          sizeLargePositionsPrimaryBackgroundColor="#ffeee8"
          sizeLargePositionsPrimaryBorder="unset"
          sizeLargePositionsPrimaryPosition="unset"
          sizeLargePositionsPrimaryTop="unset"
          sizeLargePositionsPrimaryLeft="unset"
          sizeLargePositionsPrimaryWidth="unset"
          sizeLargePositionsPrimaryMarginLeft="unset"
          sizeLargePositionsPrimaryMargin="unset"
          sizeLargePositionsPrimaryRight="unset"
          sizeLargePositionsPrimaryBottom="unset"
          buttonLineHeight="48px"
          buttonMargin="unset"
          buttonMinWidth="120px"
          buttonColor="#ff6636"
          buttonDisplay="inline-block"
          buttonTextAlign="left"
        />
      </div>
    </header>
  );
};

export default Navigation4;
