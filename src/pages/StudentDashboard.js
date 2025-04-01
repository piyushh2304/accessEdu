import Navigation3 from "../components/Navigation3";
import ParentWithConnections from "../components/ParentWithConnections";
import Footer from "../components/Footer";

const StudentDashboard = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <Navigation3 />
      <section className="w-full h-[280px] absolute !m-[0] top-[148px] right-[0px] left-[0px] bg-primary-100" />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <ParentWithConnections />
      </section>
      <Footer propMarginTop="unset" />
    </div>
  );
};

export default StudentDashboard;
