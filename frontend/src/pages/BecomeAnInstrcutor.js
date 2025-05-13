import Header3 from "../components/Header3";

import SizeLargePositionsPrimary from "../components/SizeLargePositionsPrimary";
import Student from "../components/Student";
import Why from "../components/Why";
import FrameComponent14 from "../components/FrameComponent14";
import Rules from "../components/Rules";
import FrameComponent13 from "../components/FrameComponent13";
import Contents from "../components/Contents";
import FrameComponent12 from "../components/FrameComponent12";
import CTA1 from "../components/CTA1";
import FrameComponent10 from "../components/FrameComponent10";

const BecomeAnInstrcutor = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-end justify-start tracking-[normal]">
      <Header3
        dimensionCode="/chevrondown3.svg"
        dimensionCodeText="/chevrondown3.svg"
        dimensionCodeIdentifier="/graduationcap2.svg"
        dimensionCodeValue="/chevrondown-2.svg"
        dimensionCodeImage="/magnifyingglass1.svg"
        dimensionCodeIdentifierTe="/bell3.svg"
        dimensionCodeIdentifierTe2="/heart1.svg"
      />
      <section className="self-stretch flex flex-row flex-wrap items-center justify-start pt-8 px-[300px] pb-0 box-border gap-[24px] max-w-full text-left text-45xl text-gray-900 font-body-medium-400 mq925:pl-[75px] mq925:pr-[75px] mq925:box-border mq1350:pl-[150px] mq1350:pr-[150px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[421px] max-w-full mq925:gap-[20px_40px] mq1350:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq925:gap-[16px_32px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[68px] font-semibold font-inherit mq925:text-[51px] mq925:leading-[54px] mq450:text-19xl mq450:leading-[41px]">
              Become an Instuctor
            </h1>
            <h2 className="m-0 self-stretch relative text-5xl leading-[32px] font-normal font-inherit text-gray-700 mq450:text-lgi mq450:leading-[26px]">{`Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.`}</h2>
          </div>
          <SizeLargePositionsPrimary
            button="Get Started"
            sizeLargePositionsPrimaryBackgroundColor="#ff6636"
            sizeLargePositionsPrimaryBorder="unset"
            sizeLargePositionsPrimaryPosition="unset"
            sizeLargePositionsPrimaryTop="unset"
            sizeLargePositionsPrimaryLeft="unset"
            sizeLargePositionsPrimaryWidth="unset"
            sizeLargePositionsPrimaryMarginLeft="unset"
            sizeLargePositionsPrimaryMargin="unset"
            sizeLargePositionsPrimaryRight="unset"
            sizeLargePositionsPrimaryBottom="unset"
            buttonLineHeight="64px"
            buttonMargin="0"
            buttonMinWidth="111px"
            buttonColor="#fff"
            buttonDisplay="inline-block"
            buttonTextAlign="left"
          />
        </div>
        <div className="h-[648px] flex-1 relative min-w-[421px] flex items-center justify-center">
          <img
            className="h-full flex-1 max-w-full overflow-hidden min-w-[421px] object-contain absolute left-[-20px] top-[20px] w-full [transform:scale(1.123)] mq1350:min-w-full"
            loading="lazy"
            alt=""
            src="/image51@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch bg-primary-100 flex flex-row items-center justify-center py-10 px-5 [row-gap:20px] mq1350:flex-wrap mq1350:justify-start">
        <Student users="/users.svg" k="67.1k" students="Students" />
        <Student
          users="/notebook1.svg"
          k="26k"
          students="Certified Instructor"
        />
        <Student
          users="/globehemispherewest.svg"
          k="72"
          students="Country Language"
        />
        <Student
          users="/circlewavycheck.svg"
          k="99.9%"
          students="Success Rate"
        />
        <Student users="/stack21.svg" k="57" students="Trusted Companies" />
      </section>
      <Why />
      <FrameComponent14 />
      <Rules />
      <FrameComponent13 />
      <section className="w-[1640px] flex flex-row items-start justify-start pt-0 pb-20 pr-0 pl-5 box-border gap-[136px] max-w-full mq925:gap-[136px_34px] mq925:pb-[34px] mq925:box-border mq1350:flex-wrap mq1350:gap-[136px_68px] mq1350:pb-[52px] mq1350:box-border mq450:gap-[136px_17px]">
        <div className="w-[536px] flex flex-col items-start justify-start pt-[169px] px-0 pb-0 box-border min-w-[536px] max-w-full mq925:pt-[110px] mq925:box-border mq925:min-w-full mq1350:flex-1 mq450:pt-[71px] mq450:box-border">
          <Contents />
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[24px] min-w-[616px] max-w-full mq925:flex-wrap mq925:min-w-full">
          <FrameComponent12 />
          <div className="h-[925px] w-[312px] flex flex-col items-start justify-start pt-[53px] px-0 pb-0 box-border min-w-[312px] mq925:flex-1 mq1350:pt-[34px] mq1350:box-border mq450:pt-[22px] mq450:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
              <img
                className="w-[200px] h-[312px] relative object-cover"
                loading="lazy"
                alt=""
                src="/08@2x.png"
              />
              <img
                className="self-stretch h-[312px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/06@2x.png"
              />
              <img
                className="w-[200px] h-[200px] relative object-cover"
                loading="lazy"
                alt=""
                src="/05@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="self-stretch bg-gray-900 flex flex-col items-start justify-start pt-20 px-0 pb-0 box-border gap-[80px] max-w-full text-justify text-sm text-gray-500 font-body-medium-400 mq925:gap-[20px_80px] mq925:pt-[34px] mq925:box-border mq1350:gap-[40px_80px] mq1350:pt-[52px] mq1350:box-border">
        <CTA1 />
        <FrameComponent10 />
        <div className="self-stretch bg-gray-900 shadow-[0px_1px_0px_rgba(54,_59,_71,_0.5)_inset] flex flex-row items-start justify-between py-6 px-[300px] box-border max-w-full gap-[20px] mq925:pl-[75px] mq925:pr-[75px] mq925:box-border mq1350:flex-wrap mq1350:justify-center mq1350:pl-[150px] mq1350:pr-[150px] mq1350:box-border">
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border max-w-full">
            <div className="relative tracking-[-0.01em] leading-[22px]">
              © 2024 - AccessEdu. Designed by EduCrafters. All rights reserved
            </div>
          </div>
          <div className="w-[200px] bg-gray-900 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-3 pr-[15px] pl-[17px] gap-[95px] text-base border-[1px] border-solid border-gray-800">
            <div className="relative leading-[24px] inline-block min-w-[55px]">
              English
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-4 h-4 relative"
                alt=""
                src="/chevrondown-3.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BecomeAnInstrcutor;
