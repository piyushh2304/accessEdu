import InputField6 from "./InputField6";
import InputField5 from "./InputField5";

const FrameComponent18 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <div className="w-[1320px] flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h2 className="m-0 relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
          Account settings
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full text-center text-sm text-gray-600 lg:flex-wrap mq450:gap-[80px_20px] mq825:gap-[80px_40px]">
          <div className="h-[434px] w-[368px] bg-gray-white box-border flex flex-col items-start justify-start py-11 px-[43px] gap-[22px] min-w-[368px] max-w-full border-[1px] border-solid border-gray-100 lg:flex-1 mq450:pt-[220px] mq450:px-5 mq450:pb-[29px] mq450:box-border mq450:min-w-full">
            <div className="flex-1 overflow-hidden flex flex-row items-end justify-start bg-[url('/public/image61@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[280px] w-[280px] relative object-cover hidden"
                alt=""
                src="/image61@2x.png"
              />
              <button className="cursor-pointer [border:none] py-3 px-[79px] bg-gray1-500 h-12 flex flex-row items-start justify-start box-border gap-[8px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/uploadsimple1.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-body-medium-400 text-gray-white text-left inline-block min-w-[90px]">
                    Upload Photo
                  </div>
                </div>
              </button>
            </div>
            <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
              Image size should be under 1MB and image ration needs to be 1:1
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20.5px] min-w-[567px] max-w-full text-left text-gray-900 mq825:min-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[20px] max-w-full mq825:flex-wrap">
              <InputField6 />
              <div className="flex-[0.9108] bg-gray-white box-border overflow-hidden flex flex-row items-start justify-start py-3 px-[18px] min-w-[277px] max-w-full border-[1px] border-solid border-gray-100 mq450:flex-1">
                <input
                  className="w-[79px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
            <InputField5
              labal="Username"
              labelPlaceholder="Enter your username"
            />
            <InputField5
              labal="Email"
              labelPlaceholder="Email address"
              propMinWidth="35px"
              propWidth="106px"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[34px]">
                Tittle
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-between py-3 pr-[19px] pl-[17px] gap-[20px] text-base text-gray-500 border-[1px] border-solid border-gray-100 mq450:flex-wrap">
                <div className="relative leading-[24px]">
                  Your tittle, proffesion or small biography
                </div>
                <div className="relative leading-[24px] text-gray-700 inline-block min-w-[36px]">
                  0/50
                </div>
              </div>
            </div>
            <div className="bg-primary-500 flex flex-row items-start justify-start py-0 px-6 whitespace-nowrap text-base text-gray-white">
              <div className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold inline-block min-w-[110px]">
                Save changes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent18;
