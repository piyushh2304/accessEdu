import Property1Default1 from "./Property1Default11";
import Property1Hover from "./Property1Hover";

const QuickLinks = () => {
  return (
    <div className="w-[200px] flex flex-col items-start justify-start gap-[20px] text-justify text-sm text-gray-white font-body-medium-400">
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
          arrowRight="/arrowright-4.svg"
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
  );
};

export default QuickLinks;
