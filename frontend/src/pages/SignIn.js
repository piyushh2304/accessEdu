import Navigation4 from "../components/Navigation4";
import SigninLabel from "../components/SigninLabel";

const SignIn = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Navigation4 />
      <main className="w-[1696px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[192px] max-w-full mq450:gap-[192px_24px] mq800:gap-[192px_48px] mq1350:flex-wrap mq1350:gap-[192px_96px]">
        <img
          className="h-[992px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[543px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="/illustrations@2x.png"
        />
        <div className="w-[648px] flex flex-col items-start justify-start pt-[270px] px-0 pb-0 box-border min-w-[648px] max-w-full mq800:pt-[175px] mq800:box-border mq800:min-w-full mq1350:flex-1">
          <SigninLabel />
        </div>
      </main>
    </div>
  );
};

export default SignIn;
