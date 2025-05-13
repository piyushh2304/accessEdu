import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const CourseFilterContainer = () => {
  const navigate = useNavigate();

  const onButtonsClick = useCallback(() => {
    navigate("/03-courses");
  }, [navigate]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-6 bg-primary-100 flex flex-row items-start justify-start gap-[12px]"
      onClick={onButtonsClick}
    >
      
      <Link to="/02-course-category" style={{ textDecoration: 'none' }}><div className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-primary-500 text-left">
        Browse all Course
      </div>
      </Link>
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <img className="w-6 h-6 relative" alt="" src="/arrowright.svg" />
      </div>
    </button>
  );
};

export default CourseFilterContainer;
