import { useState } from "react";
import SizeLargePositionsPrimary from "./SizeLargePositionsPrimary";
import InputField from "./InputField";

const FrameComponent3 = () => {
  const [checkBoxIconChecked, setCheckBoxIconChecked] = useState(true);
  return (
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <div className="w-[1320px] flex flex-row flex-wrap items-start justify-center gap-[24px] max-w-full">
        <div className="flex-1 bg-gray-white flex flex-col items-start justify-start py-[39px] px-8 box-border gap-[24px] min-w-[421px] max-w-full mq450:pt-[25px] mq450:pb-[25px] mq450:box-border mq750:min-w-full">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
            Notifications
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-sm">
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full text-gray-600 mq750:flex-wrap">
              <input className="m-0 h-5 w-[18px]" type="checkbox" />
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[181px] max-w-full">
                I want to know who buy my course.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <input
                  className="accent-primary-500 m-0 w-[18px] h-[18px] relative"
                  checked={checkBoxIconChecked}
                  type="checkbox"
                  onChange={(event) =>
                    setCheckBoxIconChecked(event.target.checked)
                  }
                />
              </div>
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[250px] max-w-full">
                I want to know who write a review on my course.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full text-gray-600 mq750:flex-wrap">
              <input className="m-0 h-5 w-[18px]" type="checkbox" />
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[240px] max-w-full">
                I want to know who commented on my lecture.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <input
                  className="m-0 w-[18px] h-[18px] relative"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[245px] max-w-full">
                I want to know who download my lecture notes.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <input
                  className="m-0 w-[18px] h-[18px] relative"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[227px] max-w-full">
                I want to know who replied on my comment.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <input className="m-0 h-5 w-[18px]" type="checkbox" />
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[290px] max-w-full">
                I want to know daily how many people visited my profile.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full mq750:flex-wrap">
              <div className="h-5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <input
                  className="m-0 w-[18px] h-[18px] relative"
                  type="checkbox"
                />
              </div>
              <div className="flex-1 relative tracking-[-0.01em] leading-[22px] inline-block min-w-[268px] max-w-full">
                I want to know who download my lecture attach file.
              </div>
            </div>
          </div>
          <SizeLargePositionsPrimary
            button="Save changes"
            sizeLargePositionsPrimaryBackgroundColor="#ff6636"
            sizeLargePositionsPrimaryBorder="unset"
            sizeLargePositionsPrimaryPosition="unset"
            sizeLargePositionsPrimaryTop="unset"
            sizeLargePositionsPrimaryLeft="unset"
            sizeLargePositionsPrimaryWidth="unset"
            sizeLargePositionsPrimaryMarginLeft="unset"
            sizeLargePositionsPrimaryMargin="unset"
            sizeLargePositionsPrimaryRight="unset"
            sizeLargePositionsPrimaryBottom="unset"
            buttonLineHeight="48px"
            buttonMargin="unset"
            buttonMinWidth="unset"
            buttonColor="#fff"
            buttonDisplay="inline-block"
            buttonTextAlign="left"
          />
        </div>
        <div className="flex-1 bg-gray-white flex flex-col items-start justify-start p-8 box-border gap-[24px] min-w-[421px] max-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq750:min-w-full">
          <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[26px]">
            Change password
          </h2>
          <div className="self-stretch h-[264px] flex flex-col items-start justify-start gap-[18px] text-sm">
            <InputField labal="Current Password" labelPlaceholder="Password" />
            <InputField
              labal="New Password"
              labelPlaceholder="Password"
              propWidth="74px"
            />
            <InputField
              labal="Confirm Password"
              labelPlaceholder="Confirm new password"
              propWidth="174px"
            />
          </div>
          <SizeLargePositionsPrimary
            button="Save changes"
            sizeLargePositionsPrimaryBackgroundColor="#ff6636"
            sizeLargePositionsPrimaryBorder="unset"
            sizeLargePositionsPrimaryPosition="unset"
            sizeLargePositionsPrimaryTop="unset"
            sizeLargePositionsPrimaryLeft="unset"
            sizeLargePositionsPrimaryWidth="unset"
            sizeLargePositionsPrimaryMarginLeft="unset"
            sizeLargePositionsPrimaryMargin="unset"
            sizeLargePositionsPrimaryRight="unset"
            sizeLargePositionsPrimaryBottom="unset"
            buttonLineHeight="48px"
            buttonMargin="unset"
            buttonMinWidth="unset"
            buttonColor="#fff"
            buttonDisplay="inline-block"
            buttonTextAlign="left"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
