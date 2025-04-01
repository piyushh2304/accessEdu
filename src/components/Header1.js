import { Link } from "react-router-dom";
import SizeMediumPositionsPrimary from "./SizeMediumPositionsPrimary";

const Header = () => {
  return (
    <div className="mt-[-548px] self-stretch [background:linear-gradient(180deg,_rgba(240,_242,_245,_0)_0.01%,_#f0f2f5)] flex flex-row items-start justify-start py-0 pr-0 pl-[250px] box-border gap-[154px] max-w-full shrink-0 text-left text-26xl text-gray-900 font-body-medium-400 mq850:gap-[154px_38px] mq1225:gap-[154px_77px] mq1525:flex-wrap mq1525:pl-5 mq1525:pr-5 mq1525:pb-5 mq1525:box-border">
      <div className="w-[692px] flex flex-col items-start justify-start pt-[94px] px-0 pb-0 box-border min-w-[692px] max-w-full mq1225:min-w-full mq1525:flex-1 mq450:pt-[546px] mq450:box-border">
        <div className="self-stretch ml-[-110px] flex flex-col items-start justify-start gap-[40px] max-w-full mq850:gap-[20px_40px]">
          <h1 className="m-0  self-stretch relative text-inherit tracking-[-0.02em] leading-[60px] font-medium font-inherit mq850:text-17xl mq850:leading-[48px] mq450:text-8xl mq450:leading-[36px]">
            AccessEdu: Bridging Education's Accessibility Gap for All Abilities.
          </h1>
          <h2 className="m-0 w-[668px] relative text-5xl leading-[32px] font-normal font-inherit text-gray-700 inline-block max-w-full box-border pr-5 mq450:text-lgi mq450:leading-[26px]">
            Our platform is designed to be accessible and inclusive, catering to
            the diverse needs of learners of all abilities.
          </h2>
           <Link to="/29-sign-up" style={{ textDecoration: 'none' }}>
          <SizeMediumPositionsPrimary
            button="Create Account"
            sizeMediumPositionsPrimarBackgroundColor="#ff6636"
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            buttonColor="#fff"
            buttonTextAlign="left"
            buttonLineHeight="56px"
            buttonMinWidth="unset"
          />
           </Link>
        </div>
      </div>
      <img
        className="h-[548px] ml-[-110px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[536px] mq850:min-w-full"
        loading="lazy"
        alt=""
        src="/istockphoto1-1@2x.png"
      />
    </div>
  );
};

export default Header;
