import DropdownContent from "./DropdownContent";
import Property1InstagramColorDa from "./Property1InstagramColorDa";
import Property1Default1 from "./Property1Default11";
import QuickLinks from "./QuickLinks";
import Bottom from "./Bottom";

const Footer8 = () => {
  return (
    <footer className="self-stretch bg-gray-900 flex flex-col items-start justify-start pt-20 px-0 pb-0 box-border gap-[80px] max-w-full z-[1] text-justify text-sm text-gray-white font-body-medium-400 mq850:gap-[20px_80px] mq1225:gap-[40px_80px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1329px] flex flex-row items-start justify-start py-0 px-0 box-border gap-[35px] max-w-full mq850:gap-[35px_17px] mq1525:flex-wrap">
          <div className="w-[424px] flex flex-col items-start justify-center gap-[26px] max-w-full">
            <DropdownContent />
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <Property1InstagramColorDa
                instragarm="/frame-75.svg"
                property1InstagramColorDaBorder="none"
                property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1InstagramColorDaBoxShadow="unset"
                property1InstagramColorDaFlexDirection="row"
                instragarmIconOverflow="unset"
              />
              <Property1InstagramColorDa
                instragarm="/instragarm.svg"
                property1InstagramColorDaBorder="none"
                property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1InstagramColorDaBoxShadow="unset"
                property1InstagramColorDaFlexDirection="row"
                instragarmIconOverflow="unset"
              />
              <Property1InstagramColorDa
                instragarm="/linkedin.svg"
                property1InstagramColorDaBorder="unset"
                property1InstagramColorDaBackgroundColor="#ff6636"
                property1InstagramColorDaBoxShadow="0px 6px 20px rgba(204, 82, 43, 0.5)"
                property1InstagramColorDaFlexDirection="row"
                instragarmIconOverflow="unset"
              />
              <Property1InstagramColorDa
                instragarm="/twitter.svg"
                property1InstagramColorDaBorder="none"
                property1InstagramColorDaBackgroundColor="rgba(54, 59, 71, 0.4)"
                property1InstagramColorDaBoxShadow="unset"
                property1InstagramColorDaFlexDirection="column"
                instragarmIconOverflow="hidden"
              />
              <Property1InstagramColorDa
                instragarm="/frame-7421@2x.png"
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
          <QuickLinks />
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
      <Bottom />
    </footer>
  );
};

export default Footer8;
