import TopNavnew from "./TopNavnew";
import StNavnew from "./StNavnew";

const Headernew = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
      <TopNavnew />
      <StNavnew />
    </div>
  );
};

export default Headernew;
