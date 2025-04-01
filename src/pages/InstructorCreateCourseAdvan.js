import Sidebar1 from "../components/Sidebar1";
import DashboardNav1 from "../components/DashboardNav1";
import AdvanceInformations from "../components/AdvanceInformations";
import Footer5 from "../components/Footer5";

const InstructorCreateCourseAdvan = () => {
  return (
    <div className="w-full h-[1604px] relative bg-gray-50 overflow-hidden flex flex-row items-start justify-start tracking-[normal] lg:pl-5 lg:pr-5 lg:box-border mq750:h-auto">
      <Sidebar1 informationsHeight="2580px" />
      <main className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-[calc(100%_-_280px)] shrink-0 lg:max-w-full mq750:gap-[20px_40px]">
        <DashboardNav1
          dashboard="Create a new course"
          propFlex="unset"
          propAlignSelf="stretch"
          propTop="0"
          propPosition="sticky"
          propDisplay="inline-block"
          propDisplay1="inline-block"
        />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <AdvanceInformations />
        </section>
        <Footer5 />
      </main>
    </div>
  );
};

export default InstructorCreateCourseAdvan;
