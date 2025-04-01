import Property1Active from "./Property1Active";

const TopNav2 = () => {
  return (
    <div className="self-stretch bg-gray-900 flex flex-row items-center justify-between py-0 px-8 box-border max-w-full gap-[20px] text-left text-sm text-gray-400 font-body-medium-400">
      <div className="flex flex-row items-center justify-center gap-[8px] max-w-full">
        <Property1Active
          home="Home"
          property1ActiveBoxShadow="0px 2px 0px #ff6636 inset"
          homeColor="#fff"
          homeMinWidth="39px"
        />
        <Property1Active
          home="Courses"
          property1ActiveBoxShadow="unset"
          homeColor="#8c94a3"
          homeMinWidth="55px"
        />
        <Property1Active
          home="About"
          property1ActiveBoxShadow="unset"
          homeColor="#8c94a3"
          homeMinWidth="40px"
        />
        <Property1Active
          home="Contact"
          property1ActiveBoxShadow="unset"
          homeColor="#8c94a3"
          homeMinWidth="53px"
        />
        <Property1Active
          home="Become an Instructor"
          property1ActiveBoxShadow="unset"
          homeColor="#8c94a3"
          homeMinWidth="unset"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px] mq1400:hidden">
        <div className="flex flex-row items-center justify-center gap-[6px]">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[30px]">
            USD
          </div>
          <img className="h-3 w-3 relative" alt="" src="/chevrondown3.svg" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[6px]">
          <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[47px]">
            English
          </div>
          <img className="h-3 w-3 relative" alt="" src="/chevrondown3.svg" />
        </div>
      </div>
    </div>
  );
};

export default TopNav2;
