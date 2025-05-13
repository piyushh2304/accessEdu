import DashboardNav1 from "./DashboardNav1";

const NotificationBadge = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border top-[0] z-[99] sticky max-w-full">
      <DashboardNav1 dashboard="Create a new course" />
    </section>
  );
};

export default NotificationBadge;
