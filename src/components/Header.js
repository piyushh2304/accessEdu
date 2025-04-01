import TopNav1 from "./TopNav1";
import StNav1 from "./StNav1";

const Header1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
      <TopNav1 />
      <StNav1 />
    </div>
  );
};

export default Header1;
