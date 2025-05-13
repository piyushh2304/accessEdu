import { useMemo } from "react";
import LOGO from "./LOGO";

const Sidebar1 = ({ informationsHeight }) => {
  const sidebarStyle = useMemo(() => {
    return {
      height: informationsHeight,
    };
  }, [informationsHeight]);

  return (
    <div
      className="h-[1080px] w-[280px] relative bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] text-left text-sm text-gray-500 font-body-medium-400 lg:hidden"
      style={sidebarStyle}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_140px)] w-full h-[326px] flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch bg-gray-900 shadow-[0px_-1px_0px_#363b47_inset] flex flex-row items-start justify-start py-5 px-6">
          <LOGO
            graduationCap="/graduationcap.svg"
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
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/chartbar.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[72px]">
                  Dashboard
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 self-stretch h-12 overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/pluscircle.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-gray-white text-left inline-block min-w-[129px]">
                  Create New Course
                </div>
              </div>
            </div>
          </button>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/stack.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[79px]">
                  My Courses
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-between py-3 px-6 gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/chatcircledots.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[60px]">
                  Message
                </div>
              </div>
            </div>
            <div className="w-6 rounded-xl bg-primary-500 flex flex-row items-start justify-start py-1 px-0 box-border text-center text-xs text-gray-white">
              <div className="flex-1 relative leading-[16px] font-medium">
                3
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/gear.svg"
              />
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[55px]">
                  Settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[314px] left-[-9.8px] w-[300px] h-[68px] flex flex-row items-start justify-start p-2.5 box-border z-[1]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-6">
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/signout.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[57px]">
                Sign-out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar1;
