import Navigation1 from "../components/Navigation1";
import Courses from "../components/Courses";
import Footer1 from "../components/Footer1";

const CourseList = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[40px] tracking-[normal] mq825:gap-[20px_40px]">
      <Navigation1 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <Courses />
      </section>
      <Footer1 propOverflowX="unset" />
    </div>
  );
};

export default CourseList;
