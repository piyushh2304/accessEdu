import FrameComponent from "../components/FrameComponent";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent18 from "../components/FrameComponent18";
import DropdownDesigner from "../components/DropdownDesigner";
import Footer from "../components/Footer";

const StudentSettings = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <FrameComponent />
      <div className="self-stretch h-[280px] relative bg-primary-100 mt-[-200px]" />
      <main className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[280px] box-border gap-[39.666666666666664px] max-w-full mt-[-200px] mq1400:pb-[182px] mq1400:box-border mq450:pb-[77px] mq450:box-border mq825:gap-[20px_39.7px] mq825:pb-[118px] mq825:box-border">
        <FrameComponent19 />
        <FrameComponent18 />
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="w-[1188px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <DropdownDesigner />
        </div>
      </main>
      <Footer propMarginTop="-200px" />
    </div>
  );
};

export default StudentSettings;
