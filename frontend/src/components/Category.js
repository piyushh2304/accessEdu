import Category2 from "./Category2";
import Category1 from "./Category1";
import StatusFalseColorPrimary from "./StatusFalseColorPrimary";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-20 px-5 box-border gap-[40px] max-w-full shrink-0 text-left text-21xl text-gray-900 font-body-medium-400 mq850:gap-[20px_40px] mq850:pt-[546px] mq850:pb-[52px] mq850:box-border">
      <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit inline-block max-w-full mq850:text-13xl mq850:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
        Browse top category
      </h1>
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-start gap-[24px_22.7px] min-h-[360px] max-w-full text-base">
        <Category2
          book="/book.svg"
          label="Higher School"
          labelCourses="476 Courses"
        />
        <Category1
          bookBookmark="/bookbookmark.svg"
          label="Senior Secondary"
          labelCourses="6,196 Courses"
        />
        <Category1
          bookBookmark="/chartbarhorizontal.svg"
          label={`IT & Software`}
          labelCourses="22,649 Courses"
          propBackgroundColor="#fff0f0"
        />
        <Category1
          bookBookmark="/handshake.svg"
          label="Business"
          labelCourses="52,822 Courses"
          propBackgroundColor="#76abae"
        />
        <Category2
          book="/bugdroid.svg"
          label="Personal Development"
          labelCourses="20,126 Courses"
          propBackgroundColor="#ffeee8"
          propBoxShadow="0px 12px 32px rgba(29, 32, 38, 0.1)"
          propWidth="unset"
          propAlignSelf="stretch"
        />
        <Category1
          bookBookmark="/receipt.svg"
          label="Office Productivity"
          labelCourses="13,932 Courses"
          propBackgroundColor="#76abae"
        />
        <Category1
          bookBookmark="/megaphonesimple.svg"
          label="Marketing"
          labelCourses="12,068 Courses"
          propBackgroundColor="#ebebff"
        />
        <Category2
          book="/creditcard.svg"
          label={`Finance & Accounting`}
          labelCourses="33,841 Courses"
          propBackgroundColor="#fff2e6"
          propBoxShadow="unset"
          propWidth="182px"
          propAlignSelf="unset"
        />
        <Category1
          bookBookmark="/package.svg"
          label="Lifestyle"
          labelCourses="2,736 Courses"
          propBackgroundColor="#e1f7e3"
        />
        <Category1
          bookBookmark="/pennib.svg"
          label="Design"
          labelCourses="2,600 Courses"
          propBackgroundColor="#ffeee8"
        />
        <Category1
          bookBookmark="/firstaidkit.svg"
          label={`Health & Fitness`}
          labelCourses="1,678 Courses"
          propBackgroundColor="#e1f7e3"
        />
        <Category1
          bookBookmark="/headphones.svg"
          label="ISL"
          labelCourses="959 Courses"
          propBackgroundColor="#e9eaf0"
        />
      </div>
      <div className="w-[369px] flex flex-row flex-wrap items-center justify-start gap-[12px] max-w-full text-center text-sm text-gray-700">
        <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[166px]">{`We have more category & subcategory.`}</div>
        <Link to="02-course-category" style={{ textDecoration: 'none' }}>
        <StatusFalseColorPrimary
          labal="Browse All"
          statusFalseColorPrimaryBorder="none"
          statusFalseColorPrimaryWidth="101px"
          labalFlex="1"
          labalMinWidth="69px"
        />
        </Link>
      </div>
    </div>
  );
};

export default Category;
