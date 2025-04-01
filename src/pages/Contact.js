import Header3 from "../components/Header3";
import Breadcrumb1 from "../components/Breadcrumb1";
import SizeMediumPositionsPrimary2 from "../components/SizeMediumPositionsPrimary2";
import ContactUs from "../components/ContactUs";
import Footer7 from "../components/Footer7";

const Contact = () => {
  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start py-0 px-[1.5px] box-border tracking-[normal] text-center text-21xl text-gray-900 font-body-medium-400">
      <Header3
        dimensionCode="/chevrondown.svg"
        dimensionCodeText="/chevrondown.svg"
        dimensionCodeIdentifier="/graduationcap1.svg"
        dimensionCodeValue="/chevrondown1.svg"
        dimensionCodeImage="/magnifyingglass.svg"
        dimensionCodeIdentifierTe="/bell.svg"
        dimensionCodeIdentifierTe2="/heart.svg"
        topNavAlignSelf="unset"
        topNavMarginLeft="-17.5px"
        topNavWidth="1924px"
        topNavPadding="0px 2px"
      />
      <Breadcrumb1 becomeAnInstructor="Contact" becomeAnInstructor1="Contact" />
      <section className="ml-[-15.5px] w-[1920px] bg-gray-white shadow-[0px_-1px_0px_#ffddd1_inset] overflow-hidden flex flex-row items-center justify-center pt-8 px-[300px] pb-0 box-border gap-[136px] max-w-[102%] shrink-0 text-left text-29xl text-gray-900 font-body-medium-400 mq450:gap-[136px_17px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1275:gap-[136px_68px] mq1275:pl-[150px] mq1275:pr-[150px] mq1275:box-border mq900:gap-[136px_34px] mq900:pl-[75px] mq900:pr-[75px] mq900:box-border mq1600:flex-wrap">
        <div className="w-[424px] flex flex-col items-start justify-start gap-[24px] min-w-[424px] max-w-full mq1275:min-w-full mq1600:flex-1">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[52px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[31px] mq900:text-19xl mq900:leading-[42px]">
            Connect with us
          </h1>
          <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-gray-700">
            Have questions or feedback? We'd love to hear from you! Reach out to
            us with any inquiries or comments, and our team will be happy to
            assist you.
          </div>
          <SizeMediumPositionsPrimary2
            play="/envelope.svg"
            button="Copy Email"
            showPlayIcon
            sizeMediumPositionsPrimarWidth="unset"
            sizeMediumPositionsPrimarAlignSelf="unset"
            sizeMediumPositionsPrimarBackgroundColor="#ff6636"
            sizeMediumPositionsPrimarGap="12px"
            sizeMediumPositionsPrimarBorder="none"
            buttonLetterSpacing="-0.01em"
            buttonLineHeight="48px"
            buttonColor="#fff"
            buttonMinWidth="85px"
          />
        </div>
        <div className="h-[540px] flex-1 relative min-w-[494px] flex items-center justify-center">
          <img
            className="h-full flex-1 max-w-full overflow-hidden min-w-[494px] object-contain absolute left-[20px] top-[40px] w-full [transform:scale(1.148)] mq1275:min-w-full"
            loading="lazy"
            alt=""
            src="/fit@2x.png"
          />
        </div>
      </section>
      <div className="self-stretch hidden flex-col items-center justify-center py-20 px-5 box-border gap-[40px] max-w-full">
        <div className="w-[604px] flex flex-col items-center justify-center gap-[20px] max-w-full">
          <div className="self-stretch h-12 relative tracking-[-0.01em] leading-[48px] font-semibold inline-block mq450:text-5xl mq450:leading-[29px] mq900:text-13xl mq900:leading-[38px]">
            Our branches all over the world.
          </div>
          <div className="w-[536px] h-12 relative text-lg tracking-[-0.01em] leading-[24px] text-gray-700 inline-block max-w-full">{`Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna, imperdiet id leo quis, luctus auctor nisi. `}</div>
        </div>
        <div className="w-[1320px] grid flex-row items-start justify-start gap-[24px] max-w-full grid-cols-[repeat(4,_minmax(234px,_1fr))] text-sm mq450:grid-cols-[minmax(234px,_1fr)] mq1275:justify-center mq1275:grid-cols-[repeat(2,_minmax(234px,_406px))]">
          <div className="h-[364px] flex flex-col items-start justify-end p-6 box-border bg-[url('/public/branches@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[364px] text-xs text-primary-500">
            <div className="self-stretch h-[130px] bg-gray-white box-border flex flex-col items-center justify-center pt-5 px-0 pb-4 gap-[8px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch h-3 relative leading-[12px] uppercase font-medium inline-block">
                mAIN BRANCHE
              </div>
              <div className="self-stretch h-[22px] relative text-base leading-[22px] font-medium text-gray-900 inline-block">
                Los Angeles, California
              </div>
              <div className="self-stretch flex-1 relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
                <p className="m-0">1702 Olympic Boulevard</p>
                <p className="m-0">Santa Monica, CA 90404</p>
              </div>
            </div>
          </div>
          <div className="h-[366px] flex flex-col items-start justify-end p-6 box-border bg-[url('/public/branches1@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[366px] text-base">
            <div className="self-stretch h-[106px] bg-gray-white box-border flex flex-col items-center justify-center py-4 px-0 gap-[8px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch h-[22px] relative leading-[22px] font-medium inline-block">
                Tokyo, Japan
              </div>
              <div className="self-stretch flex-1 relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
                <p className="m-0">901 N Pitt Str., Suite 170</p>
                <p className="m-0">Tokyo, VA 22314, Japan</p>
              </div>
            </div>
          </div>
          <div className="h-[364px] flex flex-col items-start justify-end p-6 box-border bg-[url('/public/branches2@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[364px]">
            <div className="self-stretch h-[104px] bg-gray-white box-border flex flex-col items-center justify-center py-4 px-0 gap-[8px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                Moscow, Russia
              </div>
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[22px] text-gray-600">
                <p className="m-0">Anjeliersstraat 470H, 1015 NL</p>
                <p className="m-0">Moscow, Russia</p>
              </div>
            </div>
          </div>
          <div className="h-[364px] flex flex-col items-start justify-end p-6 box-border bg-[url('/public/branches3@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[364px]">
            <div className="self-stretch h-[104px] bg-gray-white box-border flex flex-col items-center justify-center py-4 px-0 gap-[8px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                Mumbai, India
              </div>
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[22px] text-gray-600">
                <p className="m-0">36 East 20th St, 6th Floor</p>
                <p className="m-0">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/rectangle-36@2x.png"
      />
      <Footer7 />
    </div>
  );
};

export default Contact;
