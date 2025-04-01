import ConditionSplitter from "../components/ConditionSplitter";
import RuleEngine from "../components/RuleEngine";
import PopularTools from "../components/PopularTools";
import FunctionCaller from "../components/FunctionCaller";
import Footer11 from "../components/Footer11";

const Courses1 = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start gap-[80px] tracking-[normal] lg:gap-[40px_80px] mq825:gap-[20px_80px]">
      <ConditionSplitter />
      <RuleEngine />
      <PopularTools />
      <FunctionCaller />
      <Footer11 />
    </div>
  );
};

export default Courses1;
