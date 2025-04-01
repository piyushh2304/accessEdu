import InputField4 from "./InputField4";

const DropdownDesigner = () => {
  return (
    <div className="w-[588px] flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-5xl text-gray-900 font-body-medium-400">
      <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
        Change password
      </h2>
      <div className="self-stretch h-[268px] flex flex-col items-start justify-start gap-[20px] text-sm">
        <InputField4 labal="Current Password" labelPlaceholder="Password" />
        <InputField4
          labal="New Password"
          labelPlaceholder="Password"
          propMinWidth="98px"
          propWidth="74px"
        />
        <InputField4
          labal="Confirm Password"
          labelPlaceholder="Confirm new password"
          propMinWidth="119px"
          propWidth="174px"
        />
      </div>
      <div className="bg-primary-500 flex flex-row items-start justify-start py-0 px-6 whitespace-nowrap text-base text-gray-white">
        <div className="relative tracking-[-0.01em] leading-[48px] capitalize font-semibold">
          Change Password
        </div>
      </div>
    </div>
  );
};

export default DropdownDesigner;
