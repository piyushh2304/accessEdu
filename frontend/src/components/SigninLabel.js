import { useState } from "react";
import InputField2 from "./InputField2";
import ActionButton from "./ActionButton";
import FrameComponent17 from "./FrameComponent17";

const SigninLabel = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your authentication logic here
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-21xl text-gray-900 font-body-medium-400 mq800:gap-[20px_40px]">
      <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px]">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch h-[270px] flex flex-col items-start justify-start gap-[18px]">
          {/* Username Field */}
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
            <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[50px]">
              Username
            </div>
            <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
              <input
                className="w-[220px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                placeholder="Enter your username..."
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
            <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[35px]">
              Email
            </div>
            <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
              <input
                className="w-[220px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                placeholder=" email address..."
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Password Field (from InputField2) */}
          <InputField2 />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <input
                className="m-0 h-[22px] w-[22px] relative box-border border-[1px] border-solid border-gray-200"
                type="checkbox"
              />
              <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-700 text-left inline-block min-w-[95px]">
                Remember me
              </div>
            </div>
          </div>
          <ActionButton
            actionButtonText="Sign In"
            iconName="/arrowright1.svg"
            arrowRightIconBackgroundColor="#ff6636"
            propLineHeight="48px"
            propColor="#fff"
            propMinWidth="52px"
            propPadding="12px 0px 0px"
          />
        </div>
      </form>
      <FrameComponent17 signInWith="Sign in with" />
    </div>
  );
};

export default SigninLabel;
