import LOGO from "./LOGO";
import Property1InstagramColorDa from "./Property1InstagramColorDa";
import Property1Default1 from "./Property1Default11";
import Property1Hover from "./Property1Hover";

const FrameComponent10 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-justify text-sm text-gray-white font-body-medium-400">
      <div className="w-[1331px] flex flex-row items-start justify-start py-0 px-0 box-border gap-[35px] max-w-full mq925:gap-[35px_17px] mq1350:flex-wrap">
        <div className="w-[424px] flex flex-col items-start justify-center gap-[26px] max-w-full text-gray-500">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <LOGO
              graduationCap="/graduationcap-11.svg"
              eTutor="AccessEdu"
              graduationCapIconWidth="46px"
              graduationCapIconHeight="46px"
              graduationCapIconMinHeight="46px"
              eTutorFontSize="36.8px"
              eTutorColor="#fff"
              eTutorTextAlign="justify"
              eTutorLineHeight="46px"
              eTutorMargin="unset"
              eTutorMinWidth="unset"
            />
            <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
              <p className="m-0">
                Aliquam rhoncus ligula est, non pulvinar elit
              </p>
              <p className="m-0">convallis nec. Donec mattis odio at.</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px]">
            <Property1InstagramColorDa
              instragarm="/layout.svg"
              property1InstagramColorDaBorder="none"
              property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
              property1InstagramColorDaBoxShadow="unset"
              property1InstagramColorDaFlexDirection="row"
              instragarmIconOverflow="unset"
            />
            <Property1InstagramColorDa
              instragarm="/instragarm1.svg"
              property1InstagramColorDaBorder="none"
              property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
              property1InstagramColorDaBoxShadow="unset"
              property1InstagramColorDaFlexDirection="row"
              instragarmIconOverflow="unset"
            />
            <Property1InstagramColorDa
              instragarm="/linkedin1.svg"
              property1InstagramColorDaBorder="unset"
              property1InstagramColorDaBackgroundColor="#ff6636"
              property1InstagramColorDaBoxShadow="0px 6px 20px rgba(204, 82, 43, 0.5)"
              property1InstagramColorDaFlexDirection="row"
              instragarmIconOverflow="unset"
            />
            <Property1InstagramColorDa
              instragarm="/twitter1.svg"
              property1InstagramColorDaBorder="unset"
              property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
              property1InstagramColorDaBoxShadow="unset"
              property1InstagramColorDaFlexDirection="column"
              instragarmIconOverflow="hidden"
            />
            <Property1InstagramColorDa
              instragarm="/frame-741@2x.png"
              property1InstagramColorDaBorder="unset"
              property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
              property1InstagramColorDaBoxShadow="unset"
              property1InstagramColorDaFlexDirection="column"
              instragarmIconOverflow="unset"
            />
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative leading-[100%] uppercase font-medium">
            Top Categories
          </div>
          <div className="flex flex-col items-start justify-start">
            <Property1Default1
              categoryLabel="Learner"
              labalTextAlign="justify"
              labalMinWidth="50px"
            />
            <Property1Default1
              categoryLabel="Special Abled Learner"
              labalTextAlign="justify"
              labalMinWidth="unset"
            />
            <Property1Default1
              categoryLabel="Instructor"
              labalTextAlign="justify"
              labalMinWidth="63px"
            />
            <Property1Default1
              categoryLabel="Worksheets"
              labalTextAlign="justify"
              labalMinWidth="77px"
            />
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative leading-[100%] uppercase font-medium">
            Courses
          </div>
          <div className="flex flex-col items-start justify-start">
            <Property1Default1
              categoryLabel="Development"
              labalTextAlign="justify"
              labalMinWidth="87px"
            />
            <Property1Default1
              categoryLabel={`Finance & Accounting`}
              labalTextAlign="justify"
              labalMinWidth="unset"
            />
            <Property1Default1
              categoryLabel="Design"
              labalTextAlign="justify"
              labalMinWidth="45px"
            />
            <Property1Default1
              categoryLabel="Business"
              labalTextAlign="justify"
              labalMinWidth="58px"
            />
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative leading-[100%] uppercase font-medium">
            Quick Links
          </div>
          <div className="flex flex-col items-start justify-start">
            <Property1Default1
              categoryLabel="About"
              labalTextAlign="justify"
              labalMinWidth="40px"
            />
            <Property1Hover
              labal="Become Instructor"
              arrowRight="/arrowright3.svg"
              property1HoverBorder="none"
              labalTextAlign="justify"
              labalMinWidth="120px"
            />
            <Property1Default1
              categoryLabel="Contact"
              labalTextAlign="justify"
              labalMinWidth="52px"
            />
            <Property1Default1
              categoryLabel="Career"
              labalTextAlign="justify"
              labalMinWidth="44px"
            />
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch relative leading-[100%] uppercase font-medium">
            Support
          </div>
          <div className="flex flex-col items-start justify-start">
            <Property1Default1
              categoryLabel="Help Center"
              labalTextAlign="justify"
              labalMinWidth="78px"
            />
            <Property1Default1
              categoryLabel="FAQs"
              labalTextAlign="justify"
              labalMinWidth="34px"
            />
            <Property1Default1
              categoryLabel={`Terms & Condition`}
              labalTextAlign="justify"
              labalMinWidth="120px"
            />
            <Property1Default1
              categoryLabel="Privacy Policy"
              labalTextAlign="justify"
              labalMinWidth="91px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
