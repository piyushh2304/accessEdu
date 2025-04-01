import ActionButton from "./ActionButton";

const ContactUs = () => {
  return (
    <section className="self-stretch bg-gray-50 flex flex-col items-start justify-start py-20 pr-[270px] pl-[296px] box-border gap-[40px] max-w-full text-center text-21xl text-gray-900 font-body-medium-400 mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq1275:py-[52px] mq1275:pr-[135px] mq1275:pl-[148px] mq1275:box-border mq900:gap-[20px_40px] mq900:pl-[74px] mq900:pr-[67px] mq900:box-border">
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq900:text-13xl mq900:leading-[38px]">
          Contact Us
        </h1>
      </div>
      <div className="w-[535px] hidden max-w-full" />
      <div className="w-[1278px] flex flex-row items-start justify-center gap-[1px] max-w-full text-left text-5xl mq1600:flex-wrap">
        <img
          className="h-[675px] w-[629px] relative object-cover min-h-[675px] max-w-full mq1600:flex-1"
          loading="lazy"
          alt=""
          src="/man-chatting-remotely-with-female-colleague@2x.png"
        />
        <div className="flex-1 bg-gray-white flex flex-col items-start justify-start p-10 box-border gap-[32px] min-w-[421px] max-w-full z-[2] mq1275:min-w-full mq900:gap-[16px_32px] mq900:pt-[26px] mq900:pb-[26px] mq900:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <h2 className="m-0 self-stretch relative text-inherit leading-[32px] font-normal font-inherit mq450:text-lgi mq450:leading-[26px]">
              Get In touch
            </h2>
            <div className="self-stretch relative text-base leading-[24px] text-gray-500">{`Feel free to contact with us, we love to make new partners & friends`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq900:flex-wrap">
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[179px]">
                <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[71px]">
                  First Name
                </div>
                <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-2 border-[1px] border-solid border-gray-100">
                  <input
                    className="w-[93px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                    placeholder="First name..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[179px]">
                <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[70px]">
                  Last Name
                </div>
                <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-2 border-[1px] border-solid border-gray-100">
                  <input
                    className="w-[92px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                    placeholder="Last name..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[35px]">
                Email
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-2 border-[1px] border-solid border-gray-100">
                <input
                  className="w-[107px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[50px]">
                Subject
              </div>
              <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-2 border-[1px] border-solid border-gray-100">
                <input
                  className="w-[131px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                  placeholder="Message Subject"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
              <div className="relative tracking-[-0.01em] leading-[22px] inline-block min-w-[59px]">
                Message
              </div>
              <textarea
                className="bg-gray-white h-28 w-auto [outline:none] self-stretch box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[13px] px-[18px] font-body-medium-400 text-base text-gray-500 border-[1px] border-solid border-gray-100"
                placeholder="Message Subject"
                rows={6}
                cols={28}
              />
            </div>
          </div>
          <ActionButton
            actionButtonText="Send Message"
            iconName="/paperplaneright1.svg"
            arrowRightIconBackgroundColor="#ff6636"
            propLineHeight="56px"
            propColor="#fff"
            propMinWidth="127px"
            propPadding="16px 0px 0px"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
