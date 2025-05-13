const Student = ({ users, k, students }) => {
  return (
    <div className="h-[68px] w-[264px] flex flex-row items-start justify-start gap-[16px] text-left text-13xl text-gray-900 font-body-medium-400">
      <img className="h-10 w-10 relative" loading="lazy" alt="" src={users} />
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative tracking-[-0.01em] leading-[40px] font-semibold mq925:text-7xl mq925:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          {k}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium text-gray-700">
          {students}
        </div>
      </div>
    </div>
  );
};

export default Student;
