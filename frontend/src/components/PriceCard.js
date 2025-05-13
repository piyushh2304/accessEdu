import Property1Development from "./Property1Development";
import Discount from "./Discount";
import CircleFalseStatusFalsePo from "./CircleFalseStatusFalsePo";
import SizeMediumPositionsPrimary2 from "./SizeMediumPositionsPrimary2";
import SizeMediumPositionsPrimary from "./SizeMediumPositionsPrimary";

const PriceCard = () => {
  return (
    <div className="self-stretch w-[312px] bg-gray-white shadow-[0px_2px_6px_rgba(29,_32,_38,_0.06)] box-border shrink-0 flex flex-row items-start justify-start pt-0 px-0 pb-3.5 gap-[14px] text-left text-lg text-primary-500 font-body-medium-400 border-[1px] border-solid border-gray-100">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13.666666666666666px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/course-images-16@2x.png"
        />
        <div className="self-stretch flex flex-col items-center justify-center gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px]">
            <Property1Development
              developments="Education"
              property1DevelopmentBackgroundColor="#ebebff"
              property1DevelopmentWidth="unset"
              developmentsColor="#342f98"
              developmentsMinWidth="59px"
              developmentsHeight="unset"
              developmentsFlex="unset"
            />
            <div className="relative leading-[24px] font-medium inline-block min-w-[34px] whitespace-nowrap">
              $57
            </div>
          </div>
          <div className="w-[276px] relative text-base leading-[22px] font-medium text-gray-900 inline-block">
            Teaching Literacy to Deaf Students by Study.com
          </div>
        </div>
        <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[18px] gap-[20px] text-sm text-gray-700">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/star-10.svg"
            />
            <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[21px]">
              4.6
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <img className="h-5 w-5 relative" alt="" src="/user.svg" />
            <div className="flex flex-row items-center justify-center">
              <div className="relative tracking-[-0.01em] leading-[20px] font-medium inline-block min-w-[43px]">
                112.7K
              </div>
              <div className="relative tracking-[-0.01em] leading-[22px] text-gray-500 inline-block min-w-[61px]">
                {" "}
                students
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[670px] w-[433px] relative hidden max-w-full text-sm text-gray-900 mq450:h-auto mq450:min-h-[670]">
        <div className="relative w-[433px] h-[670px] flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.092)]"
            alt=""
            src="/bg.svg"
          />
        </div>
        <div className="absolute top-[20px] left-[9px] flex flex-col items-center justify-center gap-[20px] max-w-full">
          <div className="self-stretch flex flex-col items-center justify-center gap-[16px] shrink-0 text-lg">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[10px]">
              <Property1Development
                developments="Developments"
                property1DevelopmentBackgroundColor="#ebebff"
                property1DevelopmentWidth="94px"
                developmentsColor="#342f98"
                developmentsMinWidth="unset"
                developmentsHeight="12px"
                developmentsFlex="1"
              />
              <div className="self-stretch h-12 relative leading-[24px] font-medium inline-block">
                2021 Complete Python Bootcamp From Zero to Hero in Python
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 gap-[20px] text-sm text-gray-500 mq450:flex-wrap">
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="h-12 w-12 relative rounded-[50%] object-cover"
                  alt=""
                  src="/photo-4@2x.png"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[22px]">
                    Course by
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[22px] text-gray-900">
                    Kevin Gilbert
                  </div>
                </div>
              </div>
              <div className="h-[22px] flex flex-row items-center justify-start gap-[6px] text-base text-gray-900">
                <img className="h-5 w-5 relative" alt="" src="/star-10.svg" />
                <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                  <div className="self-stretch relative leading-[22px] font-medium">
                    5.0
                  </div>
                  <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[22px] text-gray-600">
                    (357,914)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 shrink-0 gap-[20px] text-gray-700 mq450:flex-wrap">
            <div className="h-[22px] flex flex-row items-center justify-center gap-[6px]">
              <img className="h-5 w-5 relative" alt="" src="/user.svg" />
              <div className="self-stretch relative tracking-[-0.01em]">
                <span className="leading-[20px] font-semibold">265.7K</span>
                <span className="leading-[22px]"> students</span>
              </div>
            </div>
            <div className="h-[22px] flex flex-row items-center justify-center gap-[6px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/barchart.svg"
              />
              <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                Beginner
              </div>
            </div>
            <div className="h-[22px] flex flex-row items-center justify-center gap-[6px]">
              <img className="h-5 w-5 relative" alt="" src="/clock.svg" />
              <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                6 hour
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between py-0 px-5 shrink-0 gap-[20px] text-5xl mq450:flex-wrap">
            <div className="h-8 flex flex-row items-center justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                <div className="self-stretch relative leading-[32px] whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
                  $14.00
                </div>
                <div className="h-6 relative text-base [text-decoration:line-through] leading-[24px] text-gray-500 inline-block whitespace-nowrap">
                  $26.00
                </div>
              </div>
              <Discount
                labelOff="56% off"
                discountHeight="30px"
                labelOffAlignSelf="stretch"
              />
            </div>
            <CircleFalseStatusFalsePo
              arrowRight="/heart-1.svg"
              circleFalseStatusFalsePoPadding="12px"
              circleFalseStatusFalsePoTransform="unset"
              circleFalseStatusFalsePoBackgroundColor="#ffeee8"
              arrowRightIconTransform="unset"
            />
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-5 box-border gap-[8px] max-w-full shrink-0 text-gray-600">
            <div className="self-stretch h-3 relative text-xs leading-[12px] uppercase font-medium text-gray-900 inline-block">
              What you’ll learn
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] max-w-full">
              <img className="h-6 w-6 relative" alt="" src="/check.svg" />
              <div className="h-11 w-[352px] relative tracking-[-0.01em] leading-[22px] inline-block shrink-0 max-w-[calc(100%_-_32px)]">
                Learn to use Python professionally, learning both Python 2 and
                Python 3!
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] max-w-full">
              <img className="h-6 w-6 relative" alt="" src="/check.svg" />
              <div className="h-11 w-[352px] relative tracking-[-0.01em] leading-[22px] inline-block shrink-0 max-w-[calc(100%_-_32px)]">
                Create games with Python, like Tic Tac Toe and Blackjack!
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] max-w-full">
              <img className="h-6 w-6 relative" alt="" src="/check.svg" />
              <div className="h-11 w-[352px] relative tracking-[-0.01em] leading-[22px] inline-block shrink-0 max-w-[calc(100%_-_32px)]">
                Create games with Python, like Tic Tac Toe and Blackjack!
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-100" />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[22px] gap-[12px] shrink-0">
            <SizeMediumPositionsPrimary2
              play="/shoppingcartsimple.svg"
              button="Add to Cart"
              showPlayIcon
              sizeMediumPositionsPrimarWidth="unset"
              sizeMediumPositionsPrimarAlignSelf="stretch"
              sizeMediumPositionsPrimarBackgroundColor="#ff6636"
              sizeMediumPositionsPrimarGap="12px"
              sizeMediumPositionsPrimarBorder="unset"
              buttonLetterSpacing="-0.01em"
              buttonLineHeight="48px"
              buttonColor="#fff"
              buttonMinWidth="unset"
            />
            <SizeMediumPositionsPrimary
              button="Course Detail"
              sizeMediumPositionsPrimarBackgroundColor="#ffeee8"
              sizeMediumPositionsPrimarWidth="unset"
              sizeMediumPositionsPrimarAlignSelf="stretch"
              buttonColor="#ff6636"
              buttonTextAlign="left"
              buttonLineHeight="48px"
              buttonMinWidth="unset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
