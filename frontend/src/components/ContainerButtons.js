import { Link } from "react-router-dom";

const ContainerButtons = () => {
  return (
    <button className="cursor-pointer [border:none] py-1 px-0 bg-gray-white w-[154px] flex flex-row items-start justify-start box-border gap-[8px]">
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <Link to="/11-become-an-instrcutor" style={{ textDecoration: 'none' }}>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-primary-500 text-center inline-block min-w-[122px]">
          Become Instructor
        </div>
        </Link>

      </div>
      <img
        className="h-6 w-6 relative min-h-[24px]"
        alt=""
        src="/arrowright.svg"
      />
    </button>
  );
};

export default ContainerButtons;
