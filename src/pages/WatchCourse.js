import TopNav from "../components/TopNav";
import StNav from "../components/StNav";
import RdInfo from "../components/RdInfo";
import FunctionCallGraph from "../components/FunctionCallGraph";
import FrameComponent1 from "../components/FrameComponent2";
import RelatedCourse from "../components/RelatedCourse";
import Footer1 from "../components/Footer1";

const WatchCourse = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-end justify-start gap-[32.066666666666606px] tracking-[normal] mq925:gap-[16px_32.1px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <TopNav />
        <StNav />
        <RdInfo />
      </section>
      <section className="w-[1909.5px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[50px] max-w-full mq925:gap-[50px_25px] mq1825:flex-wrap">
        <FunctionCallGraph />
        <FrameComponent1 />
      </section>
      <RelatedCourse />
      <Footer1 />
    </div>
  );
};

export default WatchCourse;
